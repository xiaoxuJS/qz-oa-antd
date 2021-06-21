import React, {useState, useEffect, useCallback} from 'react';
import {postSofPlanFindFinancial} from '../../../../Api/productionUrl'
import { SendADuplicateToAll } from './style';
import { message, PageHeader, Spin, Table, Button } from 'antd';

const SendADuplicateTo = () => {
    const [spinning, setSpinning] = useState(true);
    const [listData, setListData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [size, setSize] = useState(10);
    const [total, setTotal] = useState(0);
    const listFun = useCallback(
        (parames = {
            currentPage: 1,
            size: 10
        }) => {
            ;(async () => {
                const {code , msg, data} = await postSofPlanFindFinancial(parames);
                if(code === '20000') {
                    setListData(data.records);
                    setCurrentPage(parames.currentPage);
                    setSize(parames.size);
                    setTotal(data.total);
                    setSpinning(false);
                }else{
                    setSpinning(false);
                    message.error(msg);
                }
            })();
        },
        [],
    )
    useEffect(() => {
        listFun();
    }, [listFun]);
    //分页
    const pagination = {
        //是否可以改变pagesize//
        showSizeChanger: true,
        //是否可以快速跳转到某页
        showQuickJumper: true,
        //展示一共有多少条数据//
        showTotal: () => `共${total}条`,
        //每页条数
        pageSize: size,
        //当前页数
        current: currentPage,
        //数据总数
        total: total,
        //pageSize 变化的回调
        onShowSizeChange: (current, pageSize) => changePageSize(pageSize, current),
        //页码改变的回调，参数是改变后的页码及每页条数
        onChange: (current) => changePage(current),
    }
    //改变每页条数
    const changePageSize = (pageSizeFun, current) => {
        const parames = {
            currentPage: current,
            pageSize: pageSizeFun
        }
        listFun(parames);
    }
    //改变页数
    const changePage = (current) => {
        const parames = {
            currentPage: current,
            size
        }
        listFun(parames);
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
            title: '状态',
            dataIndex: 'state'
        },
        {
            title: '开始时间',
            dataIndex: 'createDate'
        },
        {
            title: '结束时间',
            dataIndex: 'realDeliveryDate'
        },
        {
            title: '定金金额',
            dataIndex: 'money'
        },
    ];
    return <SendADuplicateToAll>
        <PageHeader
            className="site-page-header"
            title='抄送财务'
        ></PageHeader>
        <Spin tip="Loading..." spinning={spinning}>
            <Table columns={columns} dataSource={listData} rowKey='id' pagination = {pagination} />
        </Spin>
    </SendADuplicateToAll>
}

export default SendADuplicateTo;