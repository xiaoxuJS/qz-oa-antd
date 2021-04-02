import React from 'react';
import {
  Form,
  Row,
  Col,
  Typography,
  DatePicker
} from "antd";
const { Title } = Typography;
const { RangePicker } = DatePicker

const ItemTime = () => {
    return (
        <>
            <Title level={3}>项目周期</Title>
            <Row key='2'>
                <Col span={12}>
                    <Form.Item
                        label="方案设计周期"
                        name="zq"
                        rules={[{ required: true, message: "请选择方案设计周期！" }]}
                    >
                        <RangePicker />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        label="生产开发周期"
                        name="zq"
                        rules={[{ required: true, message: "请选择生产开发周期！" }]}
                    >
                        <RangePicker />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        label="项目调试周期"
                        name="zq"
                        rules={[{ required: true, message: "请选择项目调试周期！" }]}
                    >
                        <RangePicker />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        label="总体完成周期"
                        name="zq"
                        rules={[{ required: true, message: "请选择总体完成周期！" }]}
                    >
                        <RangePicker />
                    </Form.Item>
                </Col>
            </Row>
        </>
    )
}

export default ItemTime;