import React from 'react';
import {
    useHistory
} from 'react-router-dom'
import SelectClientManagement from './components/SelectClientManagement';
import {
    CompanyClientIndexAll
} from './style';
import { PageHeader, Button, Table} from "antd";


const CompanyClientIndex = () => {
    const history = useHistory();
    const dataSource = [
        {
            key: '1',
            name: '胡彦斌',
            age: 32,
            address: '西湖区湖底公园1号',
        },
        {
            key: '2',
            name: '胡彦祖',
            age: 42,
            address: '西湖区湖底公园1号',
        },
    ];
    //添加页面
    const handleAddClient = () => {
        history.push('/company/client/add');
    };
    //详情page
    const handleEnterClientDetailsPage = () => {
        history.push('/company/client/details');
    }

    const columns = [
        {
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
            render: text => <Button type = 'link' onClick = {() => handleEnterClientDetailsPage()}>{text}</Button>
        },
        {
            title: '年龄',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: '住址',
            dataIndex: 'address',
            key: 'address',
        },
    ];

    return <CompanyClientIndexAll>
        <PageHeader
            className="site-page-header"
            title='企业客户'
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
        // handleChangeList={handleChangeList} 
        // handleSelectReset={handleSelectReset} 
        />
        <Table
            dataSource={dataSource}
            columns={columns}
        // pagination={pagination} 
        // rowKey = 'id' 
        />
    </CompanyClientIndexAll>
}

export default CompanyClientIndex;