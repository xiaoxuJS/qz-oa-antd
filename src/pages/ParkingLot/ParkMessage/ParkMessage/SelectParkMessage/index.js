import React from "react";
import { Form, Input, Button, Select, Row, Col } from "antd";

const { Option } = Select;
/**
 * @author 徐博亚
 * @param {}
 */
const SelectParkMessage = ({ handleChangeList }) => {
    //搜索
    const onFinish = (values) => {
        handleChangeList(values)
    };
    return (
        <Form
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
        >
            <Row>
                <Col span={8}>
                    <Form.Item label="车牌号" placeholder="请输入车牌号" name="username">
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item name="select" label="是否在场" hasFeedback>
                        <Select placeholder="请选择是否在场">
                            <Option key="1" value="1">
                                在场
                            </Option>
                            <Option key="2" value="2">
                                离场
                            </Option>
                        </Select>
                    </Form.Item>
                </Col>
                <Col span={4}>
                    <Form.Item {...tailLayout}>
                        <Button>重置</Button>
                        <Button type="primary" htmlType="submit">
                        确定
                        </Button>
                    </Form.Item>
                </Col>
            </Row>
        </Form>
    );
};

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

export default SelectParkMessage;
