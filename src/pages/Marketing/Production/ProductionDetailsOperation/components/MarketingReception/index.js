import React, { useState } from 'react';
import { Row, Col, Button, Form, Select } from "antd";
import { Modal } from 'antd';
const { Option } = Select;

const MarketingReception = ({ setFlow }) => {
    const [form] = Form.useForm();
    const {
        // setFieldsValue, 
        validateFields } = form;
    const [isModalVisible, setIsModalVisible] = useState(false);
    const hanldeNextStep = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        validateFields().then(values => {
            console.log(values);
            setFlow('17');
            setIsModalVisible(false);
        })

    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    return <>
        <Row>
            <Col span={3}><Button type='primary' onClick={() => hanldeNextStep()}>(营销部)签收</Button></Col>
        </Row>
        <Modal title="是否确认签收" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            <Form
                {...layout}
                name="basic"
                initialValues={{ remember: true }}
                form={form}
            >
                <Form.Item name="gender" label="发货人" rules={[{ required: true }]}>
                    <Select
                        placeholder="请选择发货人"
                        allowClear
                    >
                        <Option value="male">male</Option>
                        <Option value="female">female</Option>
                        <Option value="other">other</Option>
                    </Select>
                </Form.Item>
            </Form>
        </Modal>
    </>
}
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

export default MarketingReception;