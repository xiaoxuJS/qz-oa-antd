import React, { useState, useCallback, useEffect, useContext } from 'react';
import {
    useHistory
} from 'react-router-dom';
import {
    postSofClientFindClient,
    getSofClientDeleteClient
} from '../../../../Api/clientUrl';
import SelectClientManagement from './components/SelectClientManagement';
import AllocationModal from '../../../../components/AllocationModal';
//公共数据
import {
    myContext
} from '../../../../reducer';
import {
    CompanyClientIndexAll
} from './style';
import { PageHeader, Button, Table, Space, message, Modal } from "antd";
import { ExclamationCircleOutlined } from '@ant-design/icons';

const { confirm } = Modal;


const CompanyClientIndex = () => {
    const history = useHistory();
    const { state } = useContext(myContext);
    const { clientType } = state;
    const [modalShow, setModalShow] = useState(false);
    const [listData, setListData] = useState([]);  // list
    const [listTotal,setListTotal] = useState(2); //一共有多少条数据
    const [current, setcCurrent] = useState(1); // 当前页
    const [pageSize,setPageSize] = useState(10); //每页条数
    const listFun = useCallback(
        (parames = {
            clientType: clientType,
            currentPage: 1,
            size: 10
        }) => {
            ; (async () => {
                const { code, msg, data } = await postSofClientFindClient(parames);
                if (code === '20000') {
                    setListData(data.records);
                    setListTotal(data.total);
                    setcCurrent(parames.currentPage);
                    setPageSize(parames.size);
                } else {
                    message.error(msg);
                }
            })()
        },
        [clientType],
    )
    useEffect(() => {
        listFun();
    }, [listFun])
    //添加页面
    const handleAddClient = id => {
        history.push({pathname: '/company/client/add', state: {
            clientId: id
        }});
    };
    // //详情page
    // const handleEnterClientDetailsPage = (id) => {
    //     history.push('/company/client/details');
    // };
    //分配责任人
    const handleAllocationPeople = (show) => {
        setModalShow(show)
    }
    //删除
    const handleDelete = id => {
        confirm({
            title: '确定要删除当前客户吗?',
            icon: <ExclamationCircleOutlined />,
            onOk() {
                ; (async () => {
                    const { code, msg } = await getSofClientDeleteClient({ clientId: id });
                    if (code === '20000') {
                        listFun();
                        message.success('删除成功！')
                    } else {
                        message.error(msg);
                    }
                })();
            }
        });
    }

    const columns = [
        {
            title: '客户名称',
            dataIndex: 'clientName',
            // render: text => <Button type='link' onClick={() => handleEnterClientDetailsPage()}>{text}</Button>
        },
        {
            title: '项目经理',
            dataIndex: 'pm'
        },
        {
            title: '报备人员',
            dataIndex: 'report'
        },
        {
            title: '报备时间',
            dataIndex: 'reportTime'
        },
        {
            title: '来源',
            dataIndex: 'resource'
        },
        {
            title: '信誉度',
            dataIndex: 'trustrank'
        },
        {
            title: '操作',
            key: 'action',
            render: (text, record) => (
                <Space size="middle">
                    <Button type='link' onClick={() => handleAddClient(record.id)} >编辑</Button>
                    {/* <Button type = 'link' >标记客户</Button> */}
                    <Button type='link' danger onClick={() => handleDelete(record.id)}>删除</Button>
                </Space>
            ),
        },
    ];
    //分页函数
    const onShowSizeChange = (current, pageSize) => {
        console.log(current, pageSize);
    };
    const handleChangePage = (page, pageSize) => {
        // const params = {
        //     currentPage: page, //当前页
        //     itemStatus: 0, //	项目状态(0:储备项目,1:进行中项目,2:质保段项目,3:已成交项目)
        //     itemType: 1, //项目类型(1:物联网项目,2:传统项目,3:软件项目)
        //     pm: selectValue.pm, //项目经理
        //     process: selectValue.process, //当前流程(0:未开始,1:方案设计,2:开发生产,3:调试,4:部署安装,5:交付)
        //     size: pageSize //每页条数
        // }
        // setcCurrent(page);
        // getItemList(params);
    }
    //分页设置
    const pagination = {
        current: current,
        pageSize: pageSize,
        total: listTotal,
        showTotal: total => `共 ${total} 条`,
        onChange: handleChangePage,
        onShowSizeChange: onShowSizeChange
    }
    //搜索
    const handleChangeList = (values) => {
        values.size = pageSize;
        values.currentPage = current;
        values.clientType = clientType;
        listFun(values);

    }
    //搜索重置
    const handleSelectReset = () => {
        listFun();
    }

    return <CompanyClientIndexAll>
        <PageHeader
            className="site-page-header"
            title={clientType ? "合作客户" : '企业客户'}
            extra={[
                <Button
                    key="1"
                    type="primary"
                    onClick={() => handleAddClient()}
                >
                    客户报备
                </Button>,
            ]}
        ></PageHeader>
        <SelectClientManagement
            handleChangeList={handleChangeList} 
        handleSelectReset={handleSelectReset} 
        />
        <Table
            dataSource={listData}
            columns={columns}
            pagination={pagination}
            rowKey='id'
        />
        <AllocationModal modalShow={modalShow} handlePeople={handleAllocationPeople} />
    </CompanyClientIndexAll>
}

export default CompanyClientIndex;