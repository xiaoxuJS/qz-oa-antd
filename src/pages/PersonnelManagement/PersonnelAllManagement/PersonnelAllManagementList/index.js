import React, { useState, useCallback, useEffect } from 'react';
import { getSysDepartmentFindList, postSysUserFindPage } from '../../../../Api/listUrl';
import {getSysUserDeleteUser} from '../../../../Api/userUrl'
import AddModal from './AddModal';
import ChangeModal from './ChangeModal'
import {
    PersonnelAllManagementListAll
} from './style';
import { PageHeader, Table, Space, Button, message, Modal } from 'antd';
import { Collapse } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

const { confirm } = Modal;
const { Panel } = Collapse;

const PersonnelAllManagementList = () => {
    const [departmentList, setDepartmentList] = useState([]);
    const [addGroupId, setAddGroupId] = useState(null);
    const [addGroupModalShow, setAddGroupModalShow] = useState(false);
    const [userList, setUserList] = useState([]);
    const [groupId, setGroupId] = useState(null);
    //分页数据
    const [pageSize, setPageSize] = useState(10);
    const [total, setTotal] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [changeModal, setChangeModal] = useState(false); // 修改人员信息modal
    const [changeClickId, setChangeClickId] = useState(null); //修改点击的id
    const departmentFun = useCallback(
        () => {
            ; (async () => {
                const { code, msg, data } = await getSysDepartmentFindList();
                if (code === '20000') {
                    setDepartmentList(data);
                } else {
                    message.error(msg);
                }
            })();
        },
        [],
    )
    //用户列表
    const userFun = useCallback(
        (parames) => {
            ; (async () => {
                const { code, msg, data } = await postSysUserFindPage(parames);
                if (code === '20000') {
                    setUserList(data.records)
                    setTotal(data.total)
                    setCurrentPage(parames.currentPage)
                    setPageSize(parames.pageSize)
                } else {
                    message.error(msg);
                }
            })();
        },
        [],
    )
    useEffect(() => {
        departmentFun();
    }, [departmentFun]);
    // 修改用户信息
    const handleChangeModal = (id) => {
        setChangeClickId(id);
        setChangeModal(true);
    }


    //打开关闭折叠面板
    const callback = (key) => {
        setGroupId(key);
        if (key) {
            const parames = {
                currentPage: 1,
                size: 10,
                department: key
            }
            userFun(parames)
        }
    }
    //添加组成员
    const handleAddGroupMember = (event, id) => {
        event.stopPropagation();
        setAddGroupId(id);
        setAddGroupModalShow(true)
        console.log()
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
        pageSize: pageSize,
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
        userFun(parames)
    }
    //改变页数
    const changePage = (current) => {
        const parames = {
            currentPage: current,
            pageSize
        }
        userFun(parames)
    }
    //添加用户完成是否更新列表
    const addUserIslist = () => {
        if (groupId) {
            const parames = {
                currentPage: 1,
                size: 10,
                department: groupId
            }
            userFun(parames)
        }
    }
    //删除用户
    const handleDelete = (id) => {
        confirm({
            title: '确定要删除当前人员吗?',
            icon: <ExclamationCircleOutlined />,
            onOk() {
                ;(async () => {
                    const {code, msg} = await getSysUserDeleteUser({id});
                    if(code === '20000'){
                        addUserIslist();
                        message.success('删除成功！')
                    }else{
                        message.error(msg);
                    }
                })();
            }
        });
    }
    const columns = [
        {
            title: '编号',
            render: (text, recode, index) => <span>{index + 1}</span>,
        },
        {
            title: '姓名',
            dataIndex: 'name',
            render: text => <span>{text}</span>,
        },
        {
            title: '用户名',
            dataIndex: 'username'
        },
        {
            title: '邮箱',
            dataIndex: 'email'
        },
        {
            title: '最近登录时间',
            dataIndex: 'lastTime'
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <Space size="middle">
                    <Button type='primary' onClick={() => handleChangeModal(record.id)}> 编辑</Button>
                    <Button type='primary' danger onClick={() => handleDelete(record.id)}> 删除</Button>
                </Space>
            ),
        },
    ];
    const genExtra = (id) => (
        <Button type='primary' onClick={event => handleAddGroupMember(event, id)}>添加组成员</Button>
    );

    return <PersonnelAllManagementListAll>
        <PageHeader
            className="site-page-header"
            title="人员管理"
        ></PageHeader>
        <Collapse
            onChange={callback}
            accordion
            expandIconPosition='right'
        >
            {
                departmentList.map(item => <Panel header={item.name} key={item.id} extra={genExtra(item.id)}>
                    <Table
                        columns={columns}
                        dataSource={userList}
                        pagination={pagination}
                        rowKey='id'
                        size='small'
                        bordered
                    />
                </Panel>)
            }
        </Collapse>
        <AddModal
            addGroupModalShow={addGroupModalShow}
            setAddGroupModalShow={setAddGroupModalShow}
            addGroupId={addGroupId}
            addUserIslist={addUserIslist}
        />
        {/* /修改弹框/ */}
        <ChangeModal
            changeModal={changeModal}
            setChangeModal={setChangeModal}
            changeClickId={changeClickId}
            addUserIslist={addUserIslist}
            setChangeClickId={setChangeClickId}
        />
    </PersonnelAllManagementListAll>
}

export default PersonnelAllManagementList;