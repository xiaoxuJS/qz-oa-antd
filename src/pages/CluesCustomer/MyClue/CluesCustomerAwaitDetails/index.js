import React, { useEffect, useState } from "react";
import {
  getSofClueFindDetailClue
} from '../../../../Api/userUrl';
import { useHistory } from "react-router-dom";
import { CluesCustomerAwaitAddAll } from "./style";
import { PageHeader, Typography, Row, Col, BackTop, Timeline, Spin,Empty  } from "antd";

const { Title } = Typography;

const CluesCustomerAwaitDetails = () => {
  const history = new useHistory();
  const [myClueData, setMyClueData] = useState({});
  const [spinning, setSpinning] = useState(true);
  useEffect(() => {
    const myClueId = sessionStorage.getItem('myClueId');
    const promes = {
      clueId: myClueId
    }
      ; (async () => {
        const { code, data } = await getSofClueFindDetailClue(promes);
        if (code === '20000') {
          setMyClueData(data);
          setSpinning(false);
        }
      })();
  }, []);
  //返回
  const handleGoBack = () => {
    sessionStorage.removeItem('myClueId');
    history.go(-1);
  }
  return (
    <CluesCustomerAwaitAddAll>
      <Spin spinning={spinning}>
        <PageHeader
          className="site-page-header"
          title="我的线索-线索详情"
          onBack={() => handleGoBack()}
        ></PageHeader>
        <Typography>
          <Title level={3}>基本信息</Title>
          <Row>
            <Col span={3}>客户名称:</Col>
            <Col span={21}>{myClueData.clientName}</Col>
            <Col span={3}>部署地址:</Col>
            <Col span={21}>{myClueData.site}</Col>
            <Col span={3}>经营范围:</Col>
            <Col span={21}>{myClueData.marketing}</Col>
            <Col span={3}>部署类型:</Col>
            <Col span={21}>{myClueData.deploy}</Col>
            <Col span={3}>来源:</Col>
            <Col span={21}>{myClueData.resource}</Col>
            <Col span={3}>预算:</Col>
            <Col span={21}>{myClueData.budget}</Col>
            <Col span={3}>周期:</Col>
            <Col span={21}>{myClueData.startTime} - {myClueData.endTime}</Col>
            <Col span={3}>下次联系时间:</Col>
            <Col span={21}>{myClueData.nextTime}</Col>
            <Col span={3}>成交率:</Col>
            <Col span={21}>{myClueData.turnover}</Col>
          </Row>
          <Title level={3}>联系人信息</Title>
          <Row>
            <Col span={3}>联系人:</Col>
            <Col span={21}>{myClueData.linkman}</Col>
            <Col span={3}>手机号:</Col>
            <Col span={21}>{myClueData.mobile}</Col>
            <Col span={3}>邮箱:</Col>
            <Col span={21}>{myClueData.marketing}</Col>
          </Row>
          <Title level={3}>跟踪记录</Title>
          <Timeline>
            {
              myClueData.recordDTOS && myClueData.recordDTOS.length > 0 
              ? 
              myClueData.recordDTOS.map(item => {
                return <Timeline.Item key={item.id} color="red">
                  <p>时间： {item.negotiationTime}</p>
                  <p>事项：{item.matter} </p>
                  <p>内容： {item.content} </p>
                </Timeline.Item>
              }) 
              :
              <Empty />
            }

          </Timeline>
        </Typography>
        <BackTop />
      </Spin>
    </CluesCustomerAwaitAddAll>
  );
};

export default CluesCustomerAwaitDetails;
