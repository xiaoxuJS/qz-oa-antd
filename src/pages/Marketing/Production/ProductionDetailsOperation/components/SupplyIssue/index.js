import React, { useState } from 'react';
import { Row, Col, Button,  Form , DatePicker, Modal, Input   } from "antd";
import {  } from 'antd';

const { TextArea } = Input;

const SupplyIssue = ({setFlow}) => {
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
            setFlow('13')
            setIsModalVisible(false);
        })
        
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    return <>
        <Row>
            <Col span={3}><Button type='primary' onClick={() => hanldeNextStep()}>下发（生产部）</Button></Col>
        </Row>
        <Modal title="下发给生产部" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            <Form
                {...layout}
                name="basic"
                initialValues={{ remember: true }}
                form = {form}
            >
                <Form.Item
                    label="实际到货日期"
                    name="username"
                    rules={[{ required: true, message: '请选择实际到货日期!' }]}
                >
                    <DatePicker />
                </Form.Item>
                <Form.Item
                    label="情况说明"
                    name="us11ername"
                >
                    <TextArea maxLength={100}/>
                </Form.Item>
            </Form>
        </Modal>
    </>
}
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

export default SupplyIssue;