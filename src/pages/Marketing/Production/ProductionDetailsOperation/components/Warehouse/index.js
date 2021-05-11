import React, { useState } from 'react';
import { Row, Col, Button,  Form , DatePicker  } from "antd";
import { Modal } from 'antd';

const Wanufacture = ({setFlow}) => {
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
            console.log(values)
            setFlow('9')
            setIsModalVisible(false);
        })
        
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    return <>
        <Row>
            <Col span={3}><Button type='primary' onClick={() => hanldeNextStep()}>签收(仓管)</Button></Col>
        </Row>
        <Modal title="签收" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            <Form
                {...layout}
                name="basic"
                initialValues={{ remember: true }}
                form = {form}
            >
                <Form.Item
                    label="计划交货日期"
                    name="username"
                    rules={[{ required: true, message: '请选择计划交货日期!' }]}
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

export default Wanufacture;