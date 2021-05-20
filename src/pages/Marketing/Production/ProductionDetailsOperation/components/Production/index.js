import React, { useState } from 'react';
import { Row, Col, Button,  Form , DatePicker  } from "antd";
import { Modal } from 'antd';

const Production = ({setFlow}) => {
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
            setFlow('1');
            setIsModalVisible(false);
        })
        
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    return <>
        <Row>
            {/* 签收的时候会填写计划生产时间 */}
            <Col span={3}><Button type='primary' onClick={() => hanldeNextStep()}>（生产制造部）9.签收</Button></Col>

            {/* <Col span={3}><Button type='primary' onClick={() => hanldeNextStep()}>10. （生产制造部制作完成）下发（技术部）</Button></Col> */}
        </Row>
        <Modal title="是否确认签收" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            <Form
                {...layout}
                name="basic"
                initialValues={{ remember: true }}
                form = {form}
            >
                <Form.Item
                    label="计划完成日期"
                    name="username"
                    rules={[{ required: true, message: '请选择计划完成日期!' }]}
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

export default Production;