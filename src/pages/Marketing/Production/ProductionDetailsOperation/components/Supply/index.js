import React, { useState } from 'react';
import { Row, Col, Button,  Form , DatePicker, Radio  } from "antd";
import { Modal } from 'antd';

const Supply = ({setFlow}) => {
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
            setFlow('4')
            setIsModalVisible(false);
        })
        
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    return <>
        <Row>
            {/* 签收的时候填写交货时间 */}
            {/* <Col span={3}><Button type='primary' onClick={() => hanldeNextStep()}>6.1(供应部)签收</Button></Col> */}
            {/* <Col span={3}><Button type='primary' onClick={() => hanldeNextStep()}>6.2(供应部)驳回</Button></Col> */}
            <Col span={3}><Button type='primary' onClick={() => hanldeNextStep()}>7.（供应部）下发 (技术部)</Button></Col>
        </Row>
        <Modal title="是否确认签收" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            <Form
                {...layout}
                name="basic"
                initialValues={{ remember: true }}
                form = {form}
            >
                <Form.Item
                    label="计划需要交货日期"
                    name="username"
                    rules={[{ required: true, message: '请选择计划需要交货日期!' }]}
                >
                    <DatePicker />
                </Form.Item>
                <Form.Item
                    label="是否有外协"
                    name="radio"
                    rules={[{ required: true, message: '请选择是否有外协' }]}
                >
                    <Radio.Group>
                        <Radio value="1">有</Radio>
                        <Radio value="0">没有</Radio>
                    </Radio.Group>
                </Form.Item>
            </Form>
        </Modal>
    </>
}
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

export default Supply;