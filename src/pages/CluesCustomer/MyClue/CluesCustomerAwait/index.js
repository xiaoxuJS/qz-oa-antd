import React, { useState, useEffect, useCallback } from "react";
import { useHistory } from "react-router-dom";
//api
import {
  sofClueFindClue,
  getSofClueUpdateClue,
  getSofClueDeteleClue
} from '../../../../Api/userUrl'
//component
//搜索框组件
import SelectSupervise from "./components/SelectSupervise";
//线索跟进弹框组件
import ClueIngModal from "./components/ClueIngModal";
//css
import { CluesCustomerAwaitAllBox } from "./style";
//antd
import { PageHeader, Button, Table, Space, Popconfirm, message, Modal } from "antd";
import { ExclamationCircleOutlined } from '@ant-design/icons';
const { confirm } = Modal;

/**
 * @author 徐博亚
 * @returns
 */

const CluesCustomerAwait = () => {
  const history = new useHistory();
  const [clueIngModalShow, setClueIngModalShow] = useState(false); //弹框控件显示隐藏
  const [listData, setListData] = useState([]); //列表数据
  const [listTotal, setListTotal] = useState([]); //一共有多少条数据
  const [current, setcCurrent] = useState(1); // 当前页
  const [pageSize, setPageSize] = useState(10); //每页条数
  const [selectValue, setSelectValue] = useState(null); //搜索条件
  //获取列表
  const getListData = useCallback((params) => {
    ; (async () => {
      const { code, data } = await sofClueFindClue(params);
      if (code === '20000') {
        setListData(data.records);
        setListTotal(data.total);
      }
    })();
  }, [])
  useEffect(() => {
    const params = {
      currentPage: 1,
      size: 10,
      status: 0
    }
    getListData(params);
  }, [getListData]);
  //分页函数
  const onShowSizeChange = (current, pageSize) => {
    console.log(current, pageSize);
  };
  const handleChangePage = (page, pageSize) => {
    const params = {
      status: 0,
      currentPage: page,
      size: pageSize,
      clientName: selectValue ? selectValue.clientName : null,
      deploy: selectValue ? selectValue.deploy : null,
      turnover: selectValue ? selectValue.turnover : null
    }
    setcCurrent(page);
    getListData(params);
  }
  //进入添加线索页面
  const handleAddClue = () => {
    history.push("/cluesCustomerAwait/add");
  };
  //进入修改线索页面
  const handleEnterChange = (id) => {
    sessionStorage.setItem('myClueId', id);
    history.push("/cluesCustomerAwait/add");
  };
  //搜索
  const handleChangeList = (values) => {
    const params = {
      status: 0,
      currentPage: 1,
      size: 10,
      clientName: values.clientName,
      deploy: values.deploy,
      turnover: values.turnover
    }
    setSelectValue(values);
    getListData(params);
  };
  //重置搜索
  const handleSelectReset = () => {

    const params = {
      status: 0,
      currentPage: 1,
      size: 10
    }
    setcCurrent(1);
    setPageSize(10);
    setSelectValue(null);
    getListData(params);
  }
  //进入列表详情
  const handleEnterDetails = (id) => {
    sessionStorage.setItem('myClueId', id);
    history.push("/cluesCustomerAwait/details");
  };
  //线索跟进弹框
  const handleClueIngModalShow = (show, id) => {
    if(id) {
      sessionStorage.setItem('myClueId', id);
    }
    setClueIngModalShow(show);
  };
  //转搁置
  const handleShiftLayAside = (id) => {
    const promes = {
      clueId: id,
      status: 3
    }
    ;(async () => {
      const {code, msg } = await getSofClueUpdateClue(promes);
      if(code === '20000'){
        const params = {
          status: 0,
          currentPage: current,
          size: pageSize,
          clientName: selectValue? selectValue.clientName : null,
          deploy:  selectValue? selectValue.deploy: null,
          turnover:  selectValue? selectValue.turnover: null
        }
        getListData(params);
        message.success("当前线索已转到搁置！");
      }else{
        message.error(msg);
      }
    })();
  };
  //删除线索
  const handleMyClueDetele  = (id) => {
    confirm({
      title: '确定要删除当前线索吗?',
      icon: <ExclamationCircleOutlined />,
      onOk() {
        const promse = {
          clueId: id
        }
        ;(async () => {
          const {code } = await getSofClueDeteleClue(promse);
          if(code === '20000'){
            const params = {
              status: 0,
              currentPage: current,
              size: pageSize,
              clientName: selectValue? selectValue.clientName : null,
              deploy:  selectValue? selectValue.deploy: null,
              turnover:  selectValue? selectValue.turnover: null
            }
            getListData(params);
            message.success('删除成功！');
          }
        })();
      },
      onCancel() {
        console.log('Cancel');
      },
    });

  }
  //分页设置
  const pagination = {
    current: current,
    pageSize: pageSize,
    total: listTotal,
    showTotal: total => `共 ${total} 条`,
    onChange: handleChangePage,
    onShowSizeChange: onShowSizeChange
  }
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
        <Button type="link" onClick={() => handleEnterDetails(scoped.id)}>
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
          <Popconfirm
            placement="topRight"
            title={"您确认要转搁置吗？"}
            onConfirm={() => handleShiftLayAside(record.id)}
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
          <Button danger type="text" onClick = {() => handleMyClueDetele(record.id)}>
            删除
          </Button>
        </Space>
      ),
    },
  ];


  return (
    <CluesCustomerAwaitAllBox>
      <PageHeader
        className="site-page-header"
        title="我的线索-待处理"
        extra={[
          <Button key="1" type="primary" onClick={() => handleAddClue()}>
            线索报备
          </Button>,
        ]}
      ></PageHeader>
      <SelectSupervise handleChangeList={handleChangeList} handleSelectReset={handleSelectReset} />
      <Table
        columns={columns}
        dataSource={listData}
        pagination={pagination}
        rowKey='id'
      />
      {/* 弹框组件 */}
      <ClueIngModal
        clueIngModalShow={clueIngModalShow}
        handleClueIngModalShow={handleClueIngModalShow}
      />
    </CluesCustomerAwaitAllBox>
  );
};

export default CluesCustomerAwait;
