

import React from "react";
import SelectQualityTraditionItem from './components/SelectQualitySoftwareItem';
import { QualitySoftwareItemAll } from "./style";
import { PageHeader, Table } from "antd";

const QualitySoftwareItem = () => {
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
    <QualitySoftwareItemAll>
      <PageHeader
        className="site-page-header"
        title="质保段项目-软件项目"
      ></PageHeader>
      <SelectQualityTraditionItem />
      <Table dataSource={dataSource} columns={columns} />;
    </QualitySoftwareItemAll>
  );
};
export default QualitySoftwareItem;
