import React, { useState, useEffect, useCallback } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { getSofPlanFindLeave, getSofPlanDeleteLeave } from '../../../../Api/productionUrl'
import AddLeaveWordModal from './AddLeaveWordModal';
import {
    ProductionLeaveWordAll,
    ProductionLeaveWordList
} from './style';
import { Button, message, PageHeader, Typography, Modal, Empty } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

const { confirm } = Modal;
const { Title } = Typography;

const ProductionLeaveWord = () => {
    const history = new useHistory();
    const location = new useLocation();
    const [addLeaveWordModalShow, setAddLeaveWordModalShow] = useState(false); //添加留言组件
    const [listData, setListData] = useState([]);
    const listFun = useCallback(
        () => {
            ; (async () => {
                const { code, msg, data } = await getSofPlanFindLeave({ planId: location.state.planId });
                if (code === '20000') {
                    setListData(data);
                } else {
                    message.error(msg);
                }
            })();
        },
        [location.state],
    );
    useEffect(() => {
        listFun();
    }, [listFun]);
    //显示留言组件
    const handleAddLeaveWordModalFun = () => {
        setAddLeaveWordModalShow(true);
    }
    //删除留言
    const handleDeleteLeaveWord = id => {
        console.log(id)
        confirm({
            title: '确定要删除当前留言吗?',
            icon: <ExclamationCircleOutlined />,
            onOk() {
                ; (async () => {
                    const { code, msg } = await getSofPlanDeleteLeave({leaveId: id});
                    if (code === '20000') {
                        listFun();
                        message.success('留言删除成功！')
                    } else {
                        message.error(msg);
                    }
                })();
            }
        });
    }
    return <ProductionLeaveWordAll>
        <PageHeader
            className="site-page-header"
            title='部门留言'
            onBack={() => history.go(-1)}
            extra={
                [
                    <Button
                        key="1"
                        type="primary"
                        onClick={() => handleAddLeaveWordModalFun()}
                    >
                        点击留言
                    </Button>,
                ]

            }
        ></PageHeader>
        {
            listData.length > 0 ?   listData.map(item =>
                <ProductionLeaveWordList key = {item.emitDepartment}>
                    <Title level={3}> {item.emitDepartment} </Title>
                    <div className='list-item' >
                        {
                            item.infos.map(element => <p key = {element.id}>
                                <span className='card-name'>
                                    {element.acceptDepartment}({element.acceptName}):
                        </span>
                                {element.message}
                                <span className='card-time'>
                                    {element.leaveTime}
                                </span>
                                {
                                    element.isAllowDel ? <Button type='link' danger onClick={() => handleDeleteLeaveWord(element.id)}>删除</Button> : null
                                }
                            </p>)
                        }
                    </div>
                </ProductionLeaveWordList>) : <Empty description = '暂无留言'/>
        }
        <AddLeaveWordModal
            addLeaveWordModalShow={addLeaveWordModalShow}
            setAddLeaveWordModalShow={setAddLeaveWordModalShow}
            planId={location.state.planId}
            listFun={listFun}
        />
    </ProductionLeaveWordAll>
}

export default ProductionLeaveWord;