
import React, {useState, useEffect, useCallback} from 'react';
import {postSofPlanFindSuspend, getSofPlanDeletePlan, postSofPlanSuOrAc} from '../../../../Api/productionUrl';
import {message, PageHeader, Spin, Table, Button, Space, Modal} from 'antd';
import {WaitingStartProductionAll} from './style';
import { ExclamationCircleOutlined } from '@ant-design/icons';

const { confirm } = Modal;

const WaitingStartProduction = () => {
    const [listData, setListData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [size, setSize] = useState(10);
    const [total, setTotal] = useState(0);
    const [spinning, setSpinning] = useState(false);
    const listFun = useCallback(
        (parames = {
            currentPage: 1,
            size: 10,
            state: 1
        }) => {
            ;(async ()=> {
                const {code, msg, data} = await postSofPlanFindSuspend(parames);
                if(code === '20000') {
                    setListData(data.records);
                    setTotal(data.total);
                    setCurrentPage(parames.currentPage);
                    setSize(parames.size);
                    setSpinning(false);
                }else{
                    message.error(msg);
                }
            })();
        },
        [],
    );
    useEffect(() => {
        setSpinning(true);
        listFun();
    }, [listFun]);
    //激活
    const handleExamineAndApprove = id => {
        confirm({
            title: '你确定要激活当前任务吗?',
            icon: <ExclamationCircleOutlined />,
            onOk() {
                ; (async () => {
                    const { code, msg } = await postSofPlanSuOrAc({ businessId: id, isSuOrAc: false});
                    if (code === '20000') {
                        listFun();
                        message.success('激活成功！')
                    } else {
                        message.error(msg);
                    }
                })();
            }
        });
    }
    //删除
    const handleDelete = id => {
        confirm({
            title: '确定要删除当前生产计划吗?',
            icon: <ExclamationCircleOutlined />,
            onOk() {
                ; (async () => {
                    const { code, msg } = await getSofPlanDeletePlan({ id });
                    if (code === '20000') {
                        listFun();
                        message.success('删除成功！')
                    } else {
                        message.error(msg);
                    }
                })();
            }
        });
    }
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
            title: '当前步骤',
            render: (text, record )=> <>
             {
                record.tasks.map(item => <span key = {item}>
                    {item}
                </span>)
            }
            </>
        },
        {
            title: '终止天数',
            render: (text, record) => <span>{record.suspend.suspendDays}</span>
        },
        {
            title: '终止原因',
            render: (text, record) => <span>{record.suspend.suspend}</span>
        },
        {
            title: '备注',
            render: (text, record) => <span>{record.suspend.remark}</span>
        },
        {
            title: '终止时间',
            render: (text, record) => <span>{record.suspend.suspendTime}</span>
        },

        {
            title: '操作',
            render: (text, record) => (
                <Space size="middle">
                    <Button type='link' onClick={() => handleExamineAndApprove(record.id)} >激活</Button>
                    <Button type='link' onClick={() => handleDelete(record.id)}  danger>删除</Button>
                </Space>
            ),
        },
    ];
    return <WaitingStartProductionAll>
            <PageHeader
            className="site-page-header"
            title='审批通过'
        ></PageHeader>
        <Spin tip="Loading..." spinning={spinning}>
            <Table columns={columns} dataSource={listData} rowKey='id' pagination = {pagination} />
        </Spin>
    </WaitingStartProductionAll>
}

export default WaitingStartProduction;