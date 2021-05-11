import React, { useState } from 'react';
import { Row, Col, Button,  Form , DatePicker  } from "antd";
import { Modal } from 'antd';

const ElectricPrincipal = ({setFlow}) => {
    const [form] = Form.useForm();
    const {
        // setFieldsValue, 
        validateFields} = form;
    const [isModalVisible, setIsModalVisible] = useState(false);
    const hanldeNextStep = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        validateFields().then(values => {
            console.log(values);
            setFlow('7');
            setIsModalVisible(false);
        })
        
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    return <>
        <Row>
            <Col span={3}><Button type='primary' onClick={() => hanldeNextStep()}>(电气智能部指定负责人)签收</Button></Col>
        </Row>
        <Modal title="是否确认签收" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            <Form
                {...layout}
                name="basic"
                initialValues={{ remember: true }}
                form = {form}
            >
                <Form.Item
                    label="需完成日期"
                    name="username"
                    rules={[{ required: true, message: '请选择完成日期!' }]}
                >
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

export default ElectricPrincipal;