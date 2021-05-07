import React, {useState} from 'react';
import {
    useHistory
} from 'react-router-dom'
import SelectClientManagement from './components/SelectClientManagement';
import AllocationModal from '../../../../components/AllocationModal'
import {
    CompanyClientIndexAll
} from './style';
import { PageHeader, Button, Table, Space} from "antd";


const CompanyClientIndex = () => {
    const history = useHistory();
    const [modalShow, setModalShow] = useState(false);
    const [
        listTotal, 
        // setListTotal
    ] = useState(2); //一共有多少条数据
    const [current
        // , setcCurrent
    ] = useState(1); // 当前页
    const [pageSize, 
        // setPageSize
    ] = useState(10); //每页条数
    const dataSource = [
        {
            id: '1',
            name: '胡彦斌',
            age: 32,
            address: '西湖区湖底公园1号',
        },
        {
            id: '2',
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
    };
    //分配责任人
    const handleAllocationPeople = (show) => {
        setModalShow(show)
    }

    const columns = [
        {
            title: '客户名称',
            dataIndex: 'name',
            key: 'name',
            render: text => <Button type = 'link' onClick = {() => handleEnterClientDetailsPage()}>{text}</Button>
        },
        {
            title: '客户类型',
            dataIndex: 'age',
            key: 'age',
        },
        // {
        //     title: '客户电话',
        //     dataIndex: 'address',
        //     key: 'address',
        // },
        // {
        //     title: '客户邮箱',
        //     dataIndex: 'address',
        //     key: 'address',
        // },
        {
            title: '联系人',
            dataIndex: 'address',
            key: 'address',
        },
        // {
        //     title: '联系人职位',
        //     dataIndex: 'address',
        //     key: 'address',
        // },
        // {
        //     title: '联系人电话',
        //     dataIndex: 'address',
        //     key: 'address',
        // },
        {
            title: '来源',
            dataIndex: 'address',
            key: 'address',
        },
        // {
        //     title: '信用值',
        //     dataIndex: 'address',
        //     key: 'address',
        // },
        {
            title: '经营地',
            dataIndex: 'address',
            key: 'address',
        },
        // {
        //     title: '经营范围',
        //     dataIndex: 'address',
        //     key: 'address',
        // },
        // {
        //     title: '附件',
        //     dataIndex: 'address',
        //     key: 'address',
        // },
        {
            title: '操作',
            key: 'action',
            render: (text, record) => (
              <Space size="middle">
                <Button type = 'link' onClick = {() => handleAllocationPeople(true)} >分配责任人</Button>
                {/* <Button type = 'link' >标记客户</Button> */}
                <Button type = 'link' danger>删除</Button>
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
            //     clientId: selectValue.clientId, //所属客户
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
        pagination={pagination} 
        rowKey = 'id' 
        />
        <AllocationModal modalShow = {modalShow} handlePeople = {handleAllocationPeople}/>
    </CompanyClientIndexAll>
}

export default CompanyClientIndex;