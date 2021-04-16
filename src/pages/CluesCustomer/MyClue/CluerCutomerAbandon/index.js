import React, { useState, useEffect, useCallback } from "react";
import { useHistory } from "react-router-dom";
//api
import {
  sofClueFindClue
} from '../../../../Api/userUrl'
import { CluerCutomerAbandonAll } from "./style";
//component
//搜索组件
import SelectSupervise from "./components/SelectSupervise";
//线索跟进弹框组件
import ClueIngModal from "./components/ClueIngModal";

import { PageHeader, Button, Table, Space } from "antd";

const CluerCutomerAbandon = () => {
  const history = new useHistory();
  const [clueIngModalShow, setClueIngModalShow] = useState(false); //弹框显示
  const [listData, setListData] = useState([]); //列表数据
  // const [listTotal, setListTotal] = useState([]); //一共有多少条数据
  //获取列表
  const getListData = useCallback((params) => {
    ; (async () => {
      const { code, data } = await sofClueFindClue(params);
      if (code === '20000') {
        setListData(data.records);
        // setListTotal(data.total);
      }
    })();
  }, [])
  useEffect(() => {
    const params = {
      currentPage: 1,
      size: 10,
      status: 3
    };
    getListData(params);
  }, [getListData])

  const columns = [
    {
      title: "#",
      render: (text, scoped, index) => <span>{index + 1}</span>,
    },
    {
      title: "客户名称",
      dataIndex: "clientName",
      key: "clientName",
      render: (text, scoped) => (
        <Button
          type="link"
          onClick={() => handleEnterDetails(scoped.id)}
        >
          {text}
        </Button>
      ),
    },
    {
      title: "部署类型",
      dataIndex: "deploy",
      key: "deploy",
    },
    {
      title: "项目预算（元）",
      dataIndex: "budget",
      key: "budget",
    },
    {
      title: "周期（开始时间）",
      dataIndex: "startTime",
      key: "startTime",
    },
    {
      title: "周期（结束时间）",
      dataIndex: "endTime",
      key: "endTime",
    },
    {
      title: "成交率",
      dataIndex: "turnover",
      key: "turnover",
    },

    {
      title: "操作",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <Button type="link" onClick={() => handleEnterChange(record.id)}>
            编辑
          </Button>
          <Button type="link" onClick={() => handleClueIngModalShow(true, record.id)}>
            线索跟进
          </Button>
          <Button danger type="text">
            转客户
          </Button>
          <Button danger type="text">
            删除
          </Button>
        </Space>
      ),
    },
  ];
  //进入修改线索页面
  const handleEnterChange = () => {
    history.push("/cluesCustomerAwait/add");
  };
  //修改列表数据
  const handleChangeList = (values) => {
    console.log(values);
  };
  //进入列表详情
  const handleEnterDetails = () => {
    history.push("/cluesCustomerAwait/details");
  };
  //线索跟进弹框
  const handleClueIngModalShow = (show) => {
    setClueIngModalShow(show);
  };
  return (
    <CluerCutomerAbandonAll>
      <PageHeader
        className="site-page-header"
        title="我的线索-已搁置"
      ></PageHeader>
      <SelectSupervise handleChangeList={handleChangeList} />
      <Table columns={columns} dataSource={listData} rowKey = 'id' />
      {/* 弹框组件 */}
      <ClueIngModal
        clueIngModalShow={clueIngModalShow}
        handleClueIngModalShow={handleClueIngModalShow}
      />
    </CluerCutomerAbandonAll>
  );
};
export default CluerCutomerAbandon;
