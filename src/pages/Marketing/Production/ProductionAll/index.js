import React, { useState, useEffect, useCallback } from 'react';
import {
    useHistory
} from 'react-router-dom';
import {
    postSofPlanFindAllPlan
} from '../../../../Api/productionUrl';
import ProductionAdd from './components/ProductionAdd';
import SelectProduction from './components/SelectProduction'
import {
    ProductionAllAll
} from './style';
import { PageHeader, Button, Table, Space, message, Spin } from "antd";

const ProductionAll = () => {
    const history = new useHistory();
    const [productionAddShow, setProductionAddShow] = useState(false);
    const [listData, setListData] = useState([]); //生产计划列表
    const [spinning, setSpinning] = useState(true);
    const listFun = useCallback(
        (parames = {
            currentPage: 1,
            queryIsSucceed: false,
            size: 10
        }) => {
            ; (async () => {
                const { code, msg, data } = await postSofPlanFindAllPlan(parames);
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
    //进入留言页面
    const handleLeaveWord = id => {
        history.push({ pathname: '/production/leaveWord', state: { planId: id } });
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
            title: '留言',
            dataIndex: 'unreadCount',
            render: (text, record) => {
                if (text > 0) {
                    return <span>未读{text}条</span>
                } else {
                    return <span>已读</span>
                }
            }
        },
        {
            title: '当前步骤',
            render: (text, record) => <>
                {
                    record.tasks.map(item => <span>
                        {item}
                    </span>)
                }
            </>
        },
        {
            title: '操作',
            render: (text, record) => (
                <Space size="middle">
                    <Button type='link' onClick={() => handleEnterDetails('details', record.id)}>查看</Button>
                    <Button type='link' onClick={() => handleLeaveWord(record.id)}>留言</Button>
                </Space>
            ),
        },
    ];

    return <ProductionAllAll>
        <PageHeader
            className="site-page-header"
            title='浏览计划'
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
    </ProductionAllAll>
}



export default ProductionAll;