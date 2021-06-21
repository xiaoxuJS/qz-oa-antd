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
            <Table columns={columns} dataSource={listData} rowKey='id' />
        </Spin>
    </SendADuplicateToAll>
}

export default SendADuplicateTo;