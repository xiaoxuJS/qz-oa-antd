import React, { useState } from "react";
//搜索组件
import SelectAtaitClue from './components/SelectAtaitClue';
//分配弹框组件
import ClueAllotModal from './components/ClueAllotModal'
import { ClueAllAlreadyAll } from "./style";
//antd
import { PageHeader, Table, Space, Button, Popconfirm, Modal  } from "antd";
import { ExclamationCircleOutlined } from '@ant-design/icons';
const { confirm } = Modal;
/**
 * @author 徐博亚
 * @returns a
 */
const ClueAllAlready = () => {
  const [clueAllotModalShow, setClueAllotModalShow] = useState(false)
  // 序号、客户名称、部署类型、项目预算、周期、成交率、报备人(报备时间)
  const columns = [
    {
      title: '#',
      render: (text, record, index) => <span>{index + 1}</span>,
    },
    {
      title: '客户名称',
      dataIndex: 'name',
      key: 'name',
      render: text =>  <Button type="link">{text}</Button>,
    },
    {
      title: '部署类型',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '项目预算',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '周期',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '成交率',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '报备人（宝贝时间）',
      dataIndex: 'address',
      key: 'address',
    },

    {
      title: '操作',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <Button type="link" onClick = {() => handleClueAllotModalShow(true)}>分配</Button>
          <Popconfirm
            placement="topRight"
            title={"您确认要转搁置吗？"}
            onConfirm={handleShiftLayAside}
            okText="确定"
            cancelText="取消"
          >
            <Button danger type="text">
              转搁置
            </Button>
          </Popconfirm>
          <Button danger type="text" onClick = {() => handleDeleteClue()}>
              删除
          </Button>
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
  //分配弹框显示
  const handleClueAllotModalShow = (show) => {
    setClueAllotModalShow(show);
  }
  //转搁置
  const handleShiftLayAside = () => {

  }
  //删除当前线索
  const handleDeleteClue = () => {
    confirm({
      title: '确认删除本条线索吗？',
      icon: <ExclamationCircleOutlined />,
      onOk() {
        console.log('OK');
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }
  return (
    <ClueAllAlreadyAll>
      <PageHeader
        className="site-page-header"
        title="线索池-已分配"
      ></PageHeader>
      <SelectAtaitClue />
      <Table columns={columns} dataSource={data} />
      <ClueAllotModal showHide = {clueAllotModalShow} handleClueAllotModalShow = {handleClueAllotModalShow} />
    </ClueAllAlreadyAll>
  );
};

export default ClueAllAlready;
