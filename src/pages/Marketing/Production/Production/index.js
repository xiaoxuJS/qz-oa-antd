import React, { useState, useEffect, useCallback } from 'react';
import {
    useHistory
} from 'react-router-dom';
import {
    postSofPlanFindPlan
} from '../../../../Api/productionUrl';
import ProductionAdd from './components/ProductionAdd';
import SelectProduction from './components/SelectProduction'
import {
    ProductionAll
} from './style';
import { PageHeader, Button, Table, Space, message } from "antd";



const Production = () => {
    const history = new useHistory();
    const [productionAddShow, setProductionAddShow] = useState(false);
    const [addProduction, setAddProduction] = useState(false); // 生产计划权限管理
    const [listData, setListData] = useState([]); //生产计划列表
    const listFun = useCallback(
        (parames = {
            currentPage: 1,
            size: 10
        }) => {
            ;(async () => {
                const {code, msg, data} = await postSofPlanFindPlan(parames);
                if(code === '20000') {
                    setListData(data.records);
                }else{
                    message.error(msg);
                }
            })();
        },
        [],
    )
    useEffect(() => {
        const viewPer = JSON.parse(sessionStorage.getItem('viewPer')) ;
        if (viewPer.indexOf('TEST') > -1) {
            setAddProduction(true)
        }
        listFun();
    }, [listFun])
    //弹框显示隐藏
    const productionAddFun = (show) => {
        setProductionAddShow(show)
    };
    //进入详情
    const handleEnterDetails = (type) => {
        history.push({ pathname: '/production/detailsoperation', state: { type } })
    }
    const columns = [
        {
            title: '编号',
            render: (text, record, index) => <span>{index + 1}</span>,
        },
        {
            title: '客户名称',
            dataIndex: 'name',
            key: 'name',
            render: text => <Button type='link'>{text}</Button>,
        },
        {
            title: '合同编号',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: '订单数量',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: '销售人员',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: '交货日期',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: '下发日期',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <Space size="middle">
                    <Button type='link' onClick={() => handleEnterDetails('operation')} >操作</Button>
                    <Button type='link' onClick={() => handleEnterDetails('details')}>查看</Button>
                </Space>
            ),
        },
    ];

    return <ProductionAll>
        <PageHeader
            className="site-page-header"
            title='生产计划'
            extra={
                addProduction ? [
                    <Button
                        key="1"
                        type="primary"
                        onClick={() => productionAddFun(true)}
                    >
                        添加生产计划
                    </Button>,
                ] : null

            }
        ></PageHeader>
        <SelectProduction />
        <Table columns={columns} dataSource={listData} />
        <ProductionAdd productionAddShow={productionAddShow} productionAddFun={productionAddFun} />
    </ProductionAll>
}



export default Production;