import React, { } from 'react';
import {
    ReserveItemDetailsAll
} from './style';

import {
    PageHeader,
    Row,
    Col,
    Typography,
    Timeline,
    List
} from "antd";

const { Title } = Typography;

const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
];

const ReserveItemDetails = () => {
    return (
        <ReserveItemDetailsAll>
            <PageHeader
                className="site-page-header"
                title="储备项目-项目详情"
                
            ></PageHeader>
            <Title level={3}>基本信息</Title>
            <Row key="1">
                <Col span={3}>
                    项目名称：
                </Col>
                <Col span={21}>
                    项目名称：
                </Col>
                <Col span={3}>
                    项目类型：
                </Col>
                <Col span={21}>
                    项目类型：
                </Col>
                <Col span={3}>
                    部署类型：
                </Col>
                <Col span={21}>
                    部署类型：
                </Col>
                <Col span={3}>
                    重要程度：
                </Col>
                <Col span={21}>
                    重要程度：
                </Col>
                <Col span={3}>
                    项目状态：
                </Col>
                <Col span={21}>
                    项目状态：
                </Col>
                <Col span={3}>
                    项目简介：
                </Col>
                <Col span={21}>
                    项目简介：
                </Col>
                <Col span={3}>
                    所属客户：
                </Col>
                <Col span={21}>
                    所属客户:
                </Col>
            </Row>
            <Title level={3}>项目周期</Title>
            <Row key="2">
                <Col span={3}>
                    方案设计周期:
                </Col>
                <Col span={21}>
                    方案设计周期:
                </Col>
                <Col span={3}>
                    方案设计周期:
                </Col>
                <Col span={21}>
                    方案设计周期:
                </Col>
                <Col span={3}>
                    生产开发周期：
                </Col>
                <Col span={21}>
                    生产开发周期：
                </Col>
                <Col span={3}>
                    项目调试周期：
                </Col>
                <Col span={21}>
                    项目调试周期：
                </Col>
                <Col span={3}>
                    总体完成周期：
                </Col>
                <Col span={21}>
                    总体完成周期：
                </Col>
            </Row>
            <Title level={3}>项目动态</Title>
            <Timeline>
                <Timeline.Item color="red">
                    <p>时间： 2015-09-01</p>
                    <p>事项：Solve initial network problems </p>
                    <p>内容： Solve initial network problemsSolve initial network problemsSolve initial network problemsSolve initial network problemsSolve initial network problems </p>
                </Timeline.Item>
            </Timeline>
            <Title level={3}>项目成员</Title>
            <List
                size="small"
                header={<div>方案设计组：</div>}
                footer={<div>Footer</div>}
                bordered
                dataSource={data}
                renderItem={item => <List.Item>{item}</List.Item>}
            />
            <List
                size="small"
                header={<div>开发生产组：</div>}
                footer={<div>Footer</div>}
                bordered
                dataSource={data}
                renderItem={item => <List.Item>{item}</List.Item>}
            />
            <List
                size="small"
                header={<div>安装调试组：</div>}
                footer={<div>Footer</div>}
                bordered
                dataSource={data}
                renderItem={item => <List.Item>{item}</List.Item>}
            />
            <List
                size="small"
                header={<div>售后组：</div>}
                footer={<div>Footer</div>}
                bordered
                dataSource={data}
                renderItem={item => <List.Item>{item}</List.Item>}
            />
            <List
                size="small"
                header={<div>其他成员：</div>}
                footer={<div>Footer</div>}
                bordered
                dataSource={data}
                renderItem={item => <List.Item>{item}</List.Item>}
            />
            <Title level={3}>项目材料</Title>
            <Title level={3}>项目预算</Title>
            <Title level={3}>技术文件</Title>
        </ReserveItemDetailsAll>
    )
}

export default ReserveItemDetails;