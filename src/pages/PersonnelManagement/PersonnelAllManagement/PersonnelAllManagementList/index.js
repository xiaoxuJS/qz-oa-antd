import React from 'react';
import {
    PersonnelAllManagementListAll
} from './style';
import {
    PageHeader,
    Table, Space, Button
} from 'antd';
import { Collapse } from 'antd';

const { Panel } = Collapse;

const PersonnelAllManagementList = () => {
    const columns = [
        {
            title: '编号',
            render: (text, recode, index) => <span>{index + 1}</span>,
        },
        {
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
            render: text => <span>{text}</span>,
        },
        {
            title: '职位',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: '手机号',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <Space size="middle">
                    <Button type = 'link'> 删除</Button>
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
    const callback = (key) => {
        console.log(key);
    }
    const genExtra = () => (
        <Button type = 'primary'>添加组成员</Button>
    );

    return <PersonnelAllManagementListAll>
        <PageHeader
            className="site-page-header"
            title="人员管理"
        ></PageHeader>
        <Collapse
            defaultActiveKey={['1']}
            onChange={callback}
            accordion
            expandIconPosition='right'
        >
            <Panel header="营销部" key="1" extra={genExtra()}>
                <Table columns={columns} dataSource={data} />
            </Panel>
            <Panel header="智能部" key="2" extra={genExtra()}>
                <Table columns={columns} dataSource={data} />
            </Panel>
            <Panel header="技术部" key="3" extra={genExtra()}>
                <Table columns={columns} dataSource={data} />
            </Panel>
            <Panel header="企管部" key="4" extra={genExtra()}>
                <Table columns={columns} dataSource={data} />
            </Panel>
            <Panel header="行政中心" key="5" extra={genExtra()}>
                <Table columns={columns} dataSource={data} />
            </Panel>
            <Panel header="采购部" key="6" extra={genExtra()}>
                <Table columns={columns} dataSource={data} />
            </Panel>
            <Panel header="仓储部" key="7" extra={genExtra()}>
                <Table columns={columns} dataSource={data} />
            </Panel>
            <Panel header="生产中心" key="8" extra={genExtra()}>
                <Table columns={columns} dataSource={data} />
            </Panel>
            <Panel header="营销中心" key="9" extra={genExtra()}>
                <Table columns={columns} dataSource={data} />
            </Panel>
        </Collapse>
    </PersonnelAllManagementListAll>
}

export default PersonnelAllManagementList;