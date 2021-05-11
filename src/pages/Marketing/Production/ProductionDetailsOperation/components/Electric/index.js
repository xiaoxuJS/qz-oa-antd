import React, { useState } from 'react';
import { Row, Col, Button, Form , Select } from "antd";
import { Modal } from 'antd';
const { Option } = Select;

const Electric = ({setFlow}) => {
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
            setFlow('6');
            setIsModalVisible(false);
        })

    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    return <>
        <Row>
            <Col span={3}><Button type='primary' onClick={() => hanldeNextStep()}>(电气智能部)签收</Button></Col>
        </Row>
        <Modal title="是否确认签收" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            <Form
                {...layout}
                name="basic"
                initialValues={{ remember: true }}
                form={form}
            >
                <Form.Item name="gender" label="负责人" rules={[{ required: true }]}>
                    <Select
                        placeholder="请选择负责人"
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

export default Electric;