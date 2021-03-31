import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import { CluerCutomerIngAll } from "./style";
//component
//搜索组件
import SelectSupervise from "./components/SelectSupervise";
//线索跟进弹框组件
import ClueIngModal from "./components/ClueIngModal";

import { PageHeader, Button, Table, Space, Popconfirm, message } from "antd";

const CluerCutomerIng = () => {
  const history = new useHistory();
  const [clueIngModalShow, setClueIngModalShow] = useState(false);
  const data = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["loser"],
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
  ];
  const columns = [
    {
      title: "#",
      render: (text, scoped, index) => <span>{index + 1}</span>,
    },
    {
      title: "客户名称",
      dataIndex: "name",
      key: "name",
      render: (text) => (
        <Button type="link" onClick={() => handleEnterDetails()}>
          {text}
        </Button>
      ),
    },
    {
      title: "部署类型",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "项目预算",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "周期",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "成交率",
      dataIndex: "address",
      key: "address",
    },

    {
      title: "操作",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <Button type="link" onClick={() => handleEnterChange()}>
            编辑
          </Button>
          <Button type="link" onClick={() => handleClueIngModalShow(true)}>
            线索跟进
          </Button>
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
  //转搁置
  const handleShiftLayAside = () => {
    message.info("Clicked on Yes.");
  };
  return (
    <CluerCutomerIngAll>
      <PageHeader
        className="site-page-header"
        title="我的线索-跟进中"
      ></PageHeader>
      <SelectSupervise handleChangeList={handleChangeList} />
      <Table columns={columns} dataSource={data} />
            {/* 弹框组件 */}
      <ClueIngModal
        clueIngModalShow={clueIngModalShow}
        handleClueIngModalShow={handleClueIngModalShow}
      />
    </CluerCutomerIngAll>
  );
};
export default CluerCutomerIng;
