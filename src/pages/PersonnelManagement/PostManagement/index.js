import React, { useState, useEffect, useCallback } from 'react';
import {
    postSysDepartmentFindDepartment
} from '../../../Api/setUrl';
import ChangeModal from './components/ChangeModal'
import {
    PostManagementAll
} from './style';
import {
    PageHeader,
    Button,
    message,
    Table,
    Space
} from 'antd';

const PostManagement = () => {
    const [listData, setListData] = useState([]);
    const [addModalShow, setAddModalShow] = useState(false);
    const [clickCode, setClickCode] = useState(null);

    //搜索
    const listFun = useCallback(
        (parames = {
            currentPage: 1,
            size: 10
        }) => {
            ; (async () => {
                const { code, msg, data } = await postSysDepartmentFindDepartment(parames);
                if (code === '20000') {
                    setListData(data.records)
                } else {
                    message.error(msg);
                }
            })();
        },
        [],
    )

    useEffect(() => {
        listFun();
    }, [listFun ]);
    //修改
    const handleChangeModal = (code) => {
        setClickCode(code)
        setAddModalShow(true)
    }

    const columns = [
        // {
        //     title: '部门编号',
        //     dataIndex: 'code'
        // },
        {
            title: '部门主管',
            dataIndex: 'competentName'
        },
        {
            title: '部门说明',
            dataIndex: 'explain'
        },
        {
            title: '部门名称',
            dataIndex: 'name'
        },
        {
            title: '操作',
            render: (text, recode) => (
                <Space>
                    <Button type='primary' onClick={() => handleChangeModal(recode.codeEnum.code)}>设置负责人</Button>
                </Space>
            )
        },
    ];
    return <PostManagementAll>
        <PageHeader
            className="site-page-header"
            title="岗位管理"
        ></PageHeader>
        <Table columns={columns} dataSource={listData} rowKey = 'id'/>
        <ChangeModal 
            setAddModalShow = {setAddModalShow}
            addModalShow = {addModalShow}
            setClickCode = {setClickCode}
            clickCode = {clickCode}
            listFun = {listFun}
        />
    </PostManagementAll>
}

export default PostManagement;