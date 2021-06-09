import React, { useState, useEffect, useCallback } from 'react';
import {
    useHistory
} from 'react-router-dom';
import {
    postSofPlanFindPlan,
    getSofPlanDeletePlan
} from '../../../../Api/productionUrl';
import ProductionAdd from './components/ProductionAdd';
import SelectProduction from './components/SelectProduction'
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
            title: '操作',
            render: (text, record) => (
                <Space size="middle">
                    <Button type='link' onClick={() => handleEnterDetails('operation', record.id, record.taskId, record.taskName)} >操作</Button>
                    <Button type='link' onClick={() => handleEnterDetails('details', record.id, record.taskId, record.taskName)}>查看</Button>
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
        </Spin>,

        <ProductionAdd
            productionAddShow={productionAddShow}
            productionAddFun={productionAddFun}
            listFun={listFun}
        />
    </ProductionAll>
}



export default Production;