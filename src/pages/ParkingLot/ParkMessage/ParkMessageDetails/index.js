import React, { } from 'react';
import {
    useHistory
} from 'react-router-dom'
import {
    ParkMessageDetailsAll
} from './style';

import {
    PageHeader,
    Row,
    Col,
    Typography
} from "antd";

const { Title } = Typography;

const ParkMessageDetails = () => {
    const history = new useHistory();
    return (
        <ParkMessageDetailsAll>
            <PageHeader
                className="site-page-header"
                title="停车信息-车辆详情"
                onBack={() => history.go("-1")}
            ></PageHeader>
            <Title level={3}>基本信息</Title>
            <Row key="1">
                <Col span={3}>
                    车主姓名：
                </Col>
                <Col span={21}>
                    项目名称：
                </Col>
                <Col span={3}>
                    车主电话
                </Col>
                <Col span={21}>
                    项目类型：
                </Col>
                <Col span={3}>
                    车辆类型：
                </Col>
                <Col span={21}>
                    同行时间（开始）：
                </Col>
                <Col span={3}>
                同行时间（开始）：
                </Col>
                <Col span={21}>
                    重要程度：
                </Col>
                <Col span={3}>
                同行时间（结束）：
                </Col>
            </Row>
            <Title level={3}>入场纪录</Title>
            <Row key="2">
                <Col span={3}>
                    入场时间:
                </Col>
                <Col span={21}>
                    方案设计周期:
                </Col>
                <Col span={3}>
                    出厂时间:
                </Col>
                <Col span={21}>
                    方案设计周期:
                </Col>
                <Col span={3}>
                    总时长
                </Col>
                <Col span={21}>
                    生产开发周期：
                </Col>
                <Col span={3}>
                    入场图片
                </Col>
                <Col span={21}>
                    项目调试周期：
                </Col>
                <Col span={3}>
                    出场图片：
                </Col>
                <Col span={21}>
                    总体完成周期：
                </Col>
            </Row>
        </ParkMessageDetailsAll>
    )
}

export default ParkMessageDetails;