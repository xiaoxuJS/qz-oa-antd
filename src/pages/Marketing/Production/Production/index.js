import React, { useState } from 'react';
import {
    useHistory
} from 'react-router-dom'
import ProductionAdd from './components/ProductionAdd';
import SelectProduction from './components/SelectProduction'
import {
    ProductionAll
} from './style';
import { PageHeader, Button, Table, Space } from "antd";



const Production = () => {
    const history = new useHistory();
    const [productionAddShow, setProductionAddShow] = useState(false);
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

    const data = [
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            tags: ['nice', 'developer'],
        },
        {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
            tags: ['loser'],
        },
        {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
        },
    ];

    return <ProductionAll>
        <PageHeader
            className="site-page-header"
            title='生产计划'
            extra={[
                <Button
                    key="1"
                    type="primary"
                    onClick={() => productionAddFun(true)}
                >
                    添加生产计划
                </Button>,
            ]}
        ></PageHeader>
        <SelectProduction />
        <Table columns={columns} dataSource={data} />
        <ProductionAdd productionAddShow={productionAddShow} productionAddFun={productionAddFun} />
    </ProductionAll>
}



export default Production;