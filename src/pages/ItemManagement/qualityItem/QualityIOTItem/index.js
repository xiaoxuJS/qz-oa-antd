
import React from "react";
import SelectReserveIOTIem from './components/SelectQualityIOTIem';
import { QualityIOTItemAll } from "./style";
import { PageHeader, Table } from "antd";

const QualityIOTItem = () => {
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
    <QualityIOTItemAll>
      <PageHeader
        className="site-page-header"
        title="质保段项目-物联网项目"
      ></PageHeader>
      <SelectReserveIOTIem />
      <Table dataSource={dataSource} columns={columns} />;
    </QualityIOTItemAll>
  );
};
export default QualityIOTItem;
