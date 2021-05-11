import React, { useState } from 'react';
import { Row, Col, Button, Form, DatePicker, Modal } from "antd";

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
            <Col span={3}><Button type='primary' onClick={() => hanldeNextStep()}>(营销部)发货</Button></Col>
        </Row>
        <Modal title="发货" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            <Form
                {...layout}
                name="basic"
                initialValues={{ remember: true }}
                form={form}
            >
                <Form.Item name="gender" label="发货时间" rules={[{ required: true }]}>
                    <DatePicker />
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