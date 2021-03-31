import React from "react";
import { useHistory } from "react-router-dom";
import { CluesCustomerAwaitAddAll } from "./style";
import { PageHeader, Typography, Row, Col,BackTop, Timeline } from "antd";

const { Title } = Typography;

const CluesCustomerAwaitDetails = () => {
  const history = new useHistory();
  return (
    <CluesCustomerAwaitAddAll>
      <PageHeader
        className="site-page-header"
        title="我的线索-线索详情"
        onBack={() => history.go(-1)}
      ></PageHeader>
      <Typography>
        <Title level={3}>基本信息</Title>
        <Row>
          <Col span={3}>客户名称:</Col>
          <Col span={21}>col</Col>
          <Col span={3}>地址:</Col>
          <Col span={21}>col</Col>
          <Col span={3}>经营范围:</Col>
          <Col span={21}>col</Col>
          <Col span={3}>部署类型:</Col>
          <Col span={21}>col</Col>
          <Col span={3}>来源:</Col>
          <Col span={21}>col</Col>
          <Col span={3}>预算:</Col>
          <Col span={21}>col</Col>
          <Col span={3}>周期:</Col>
          <Col span={21}>col</Col>
          <Col span={3}>下次联系时间:</Col>
          <Col span={21}>col</Col>
          <Col span={3}>成交率:</Col>
          <Col span={21}>col</Col>
        </Row>
        <Title level={3}>联系人信息</Title>
        <Row>
          <Col span={3}>客户名称:</Col>
          <Col span={21}>col</Col>
          <Col span={3}>地址:</Col>
          <Col span={21}>col</Col>
          <Col span={3}>经营范围:</Col>
          <Col span={21}>col</Col>
        </Row>
        <Title level={3}>跟踪记录</Title>
        <Timeline>
          <Timeline.Item color="red">
            <p>时间： 2015-09-01</p>
            <p>事项：Solve initial network problems </p>
            <p>内容： Solve initial network problemsSolve initial network problemsSolve initial network problemsSolve initial network problemsSolve initial network problems </p>
          </Timeline.Item>
        </Timeline>
      </Typography>
      <BackTop />
    </CluesCustomerAwaitAddAll>
  );
};

export default CluesCustomerAwaitDetails;
