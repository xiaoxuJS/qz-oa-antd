import React, { useState, useEffect, useCallback } from 'react';
import {
    useHistory
} from 'react-router-dom';
import {
    postSofPlanFindPlan,
    getSofPlanDeletePlan
} from '../../../../Api/productionUrl';
import ProductionAdd from './components/ProductionAdd';
import SelectProduction from './components/SelectProduction';
import StopModal from './components/StopModal';
import MoneyModal from './components/MoneyModal'
import {
    ProductionAll
} from './style';
import { PageHeader, Button, Table, Space, message, Spin, Modal } from "antd";
import { ExclamationCircleOutlined } from '@ant-design/icons';

const { confirm } = Modal;

const Production = () => {
    const history = new useHistory();
    const [productionAddShow, setProductionAddShow] = useState(false);
    const [listData, setListData] = useState([]); //生产计划列表
    const [spinning, setSpinning] = useState(true);
    const [stopModalShow, setStopModalShow] = useState(false); //终止modal
    const [clickStopId, setClickStopId] = useState(null); //点击终止的id
    const [moneyModalShow, setMoneyModalShow] = useState(false); //付款弹框
    const [clickId, setClickId] = useState(null);
    const listFun = useCallback(
        (parames = {
            currentPage: 1,
            size: 10
        }) => {
            setSpinning(true);
            ; (async () => {
                const { code, msg, data } = await postSofPlanFindPlan(parames);
                if (code === '20000') {
                    setSpinning(false);
                    setListData(data.records);
                } else {
                    message.error(msg);
                }
            })();
        },
        [],
    )
    useEffect(() => {
        listFun();
    }, [listFun])
    //弹框显示隐藏
    const productionAddFun = (show) => {
        setProductionAddShow(show)
    };
    //进入详情
    const handleEnterDetails = (type, id, taskId, taskName) => {
        history.push({ pathname: '/production/detailsoperation', state: { type, id, taskId, taskName } })
    }
    //删除
    const handleDelete = id => {
        // getSofPlanDeletePlan
        confirm({
            title: '确定要删除当前生产计划吗?',
            icon: <ExclamationCircleOutlined />,
            onOk() {
                ; (async () => {
                    const { code, msg } = await getSofPlanDeletePlan({ id });
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
    //进入留言页面
    const handleLeaveWord = id => {
        history.push({ pathname: '/production/leaveWord', state: { planId: id } });
    }
    //终止
    const handleStop = id => {
        setClickStopId(id);
        setStopModalShow(true);
    }
    //付款
    const handleMoney = id => {
        setClickId(id);
        setMoneyModalShow(true);
    }
    const columns = [
        {
            title: '编号',
            render: (text, record, index) => <span>{index + 1}</span>,
        },
        {
            title: '客户名称',
            dataIndex: 'client',
            render: text => <Button type='link'>{text}</Button>,
        },
        {
            title: '合同编号',
            dataIndex: 'contractNo'
        },
        {
            title: '订单数量',
            dataIndex: 'orderSize'
        },
        {
            title: '销售人员',
            dataIndex: 'sell'
        },
        {
            title: '交货日期',
            dataIndex: 'deliveryDate'
        },
        {
            title: '剩余天数',
            dataIndex: 'surplusDay'
        },
        {
            title: '当前步骤',
            dataIndex: 'taskName'
        },
        {
            title: '押金',
            dataIndex: 'receipt'
        },
        {
            title: '操作',
            render: (text, record) => (
                <Space size="middle">
                    <Button type='link' onClick={() => handleEnterDetails('operation', record.id, record.taskId, record.taskName)} >操作</Button>
                    <Button type='link' danger onClick={() => handleStop(record.id)}>终止</Button>
                    <Button type='link' onClick={() => handleLeaveWord(record.id)}>留言</Button>
                    <Button type='link' onClick={() => handleEnterDetails('details', record.id, record.taskId, record.taskName)}>查看</Button>
                    <Button type='link' onClick={() => handleMoney(record.id)}>付款</Button>
                    <Button type='link' danger onClick={() => handleDelete(record.id)}>删除</Button>
                </Space>
            ),
        },
    ];

    return <ProductionAll>
        <PageHeader
            className="site-page-header"
            title='生产计划'
            extra={
                [
                    <Button
                        key="1"
                        type="primary"
                        onClick={() => productionAddFun(true)}
                    >
                        添加生产计划
                    </Button>,
                ]

            }
        ></PageHeader>
        <SelectProduction />
        <Spin tip="Loading..." spinning={spinning}>
            <Table columns={columns} dataSource={listData} rowKey='id' />
        </Spin>

        <ProductionAdd
            productionAddShow={productionAddShow}
            productionAddFun={productionAddFun}
            listFun={listFun}
        />

        <StopModal
            stopModalShow={stopModalShow}
            setStopModalShow={setStopModalShow}
            listFun={listFun}
            clickStopId={clickStopId}
        />
        <MoneyModal
            moneyModalShow={moneyModalShow}
            setMoneyModalShow={setMoneyModalShow}
            listFun={listFun}
            clickId={clickId}
        />
    </ProductionAll>
}



export default Production;