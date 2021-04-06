import React from "react";
import SelectItemIngIOTIem from './components/SelectItemIngIOTIem';
import { ItemIngIOTItemAll } from "./style";
import { PageHeader, Table } from "antd";

const ItemIngIOTItem = () => {
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
  return (
    <ItemIngIOTItemAll>
      <PageHeader
        className="site-page-header"
        title="进行中项目-物联网项目"
      ></PageHeader>
      <SelectItemIngIOTIem />
      <Table dataSource={dataSource} columns={columns} />;
    </ItemIngIOTItemAll>
  );
};
export default ItemIngIOTItem;
