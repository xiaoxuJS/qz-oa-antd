import React from "react";
import SelectParkMessage from "./SelectParkingManagement"
import {
    ParkingManagementAll
} from './style';
import {
    PageHeader,
    Table,
    Space,
    Button
} from "antd";

const ParkingManagement = () => {
    const columns = [
        {
            title: '#',
            render: (text, record, index) => <span>{index + 1}</span>,
        },
        {
            title: '车牌号',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: '车身颜色',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: '入场时间',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: '出场时间',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: '总时长（分）',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: '是否在场',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: '入场纪录',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: '操作',
            key: 'action',
            render: (text, record) => (
              <Space size="middle">
                <Button type="link">详情</Button>
                <Button type="link" danger>删除</Button>
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
    return <ParkingManagementAll>
        <PageHeader
            className="site-page-header"
            title="系统管理-停车场信息"
        ></PageHeader>
        <SelectParkMessage />
        <Table columns={columns} dataSource={data} />
    </ParkingManagementAll>
}

export default ParkingManagement;