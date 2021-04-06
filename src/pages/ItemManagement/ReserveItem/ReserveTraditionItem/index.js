import React from "react";
import {
  useHistory
} from 'react-router-dom';
import SelectReserveIOTIem from './components/SelectReserveTraditionItem';
import { ReserveTraditionItemAll } from "./style";
import { PageHeader, Button, Table } from "antd";

const ReserveTraditionItem = () => {
  const history = new useHistory();
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
  
  const columns = [
    {
      title: '项目名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '项目简介',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '执行天数',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '预算准确率',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '所属客户',
      dataIndex: 'address',
      key: 'address',
    },
  ];
  const handleAddREserveItem = () => {
    history.push('/ReserveItem/add')
  }
  return (
    <ReserveTraditionItemAll>
      <PageHeader
        className="site-page-header"
        title="储备项目-传统项目"
        extra={[
          <Button
            key="1"
            type="primary"
            onClick={() => handleAddREserveItem()}
          >
            项目报备
          </Button>,
        ]}
      ></PageHeader>
      <SelectReserveIOTIem />
      <Table dataSource={dataSource} columns={columns} />;
    </ReserveTraditionItemAll>
  );
};
export default ReserveTraditionItem;
