import React, { useState } from "react";
import {
    useHistory
} from 'react-router-dom'
//筛选组件
import SelectParkMessage from "./SelectParkMessage";
import DeleteParkMessage from "./DeleteParkMessage"
import {
    ParkMessageAll
} from './style';
import {
    PageHeader,
    Table,
    Space,
    Button
} from "antd";

const ParkMessage = () => {
    const history = new useHistory();
    const [deleteParkMessageShow, setDeleteParkMessageShow] = useState(false);
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
                <Button type="link" onClick = {() => history.push("/parkMessage/details")}>详情</Button>
                <Button type="link" danger onClick = {() => handleChangeDeleteShow()}>删除</Button>
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
    //删除选项确定
    const deleteParkMessageOk = () => {
        setDeleteParkMessageShow(false)
    }
    //删除组件取消
    const deleteParkMessageCancel = () => {
        setDeleteParkMessageShow(false)
    }
    const handleChangeDeleteShow = () => {
        setDeleteParkMessageShow(true)
    }
    
    return <ParkMessageAll>
        <PageHeader
            className="site-page-header"
            title="停车场管理-车辆信息"
        ></PageHeader>
        <SelectParkMessage />
        <Table columns={columns} dataSource={data} />
        {/* 删除组件 */}
        <DeleteParkMessage 
            deleteParkMessageShow = {deleteParkMessageShow} 
            deleteParkMessageOk = {deleteParkMessageOk}
            deleteParkMessageCancel = {deleteParkMessageCancel}
        />
    </ParkMessageAll>
}

export default ParkMessage;