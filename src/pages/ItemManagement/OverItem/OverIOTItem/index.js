
import React from "react";
import SelectOverIOTIem from './components/SelectOverIOTIem';
import { OverIOTItemAll } from "./style";
import { PageHeader, Table } from "antd";

const OverIOTItem = () => {
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
    <OverIOTItemAll>
      <PageHeader
        className="site-page-header"
        title="已成交项目-物联网项目"
      ></PageHeader>
      <SelectOverIOTIem />
      <Table dataSource={dataSource} columns={columns} />;
    </OverIOTItemAll>
  );
};
export default OverIOTItem;
