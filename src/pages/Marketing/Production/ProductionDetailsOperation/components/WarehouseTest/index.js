import React, { useState } from 'react';
import { Row, Col, Button,  Form , DatePicker, Radio  } from "antd";
import { Modal } from 'antd';

const WanufactureTest = ({setFlow}) => {
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
            setFlow('10');
            setIsModalVisible(false);
        })
        
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    return <>
        <Row>
            <Col span={3}><Button type='primary' onClick={() => hanldeNextStep()}>验收（仓管）</Button></Col>
        </Row>
        <Modal 
            title="检验" 
            visible={isModalVisible} 
            onOk={handleOk} 
            onCancel={handleCancel}
        >
            <Form
                {...layout}
                name="basic"
                initialValues={{ remember: true }}
                form = {form}
            >
                <Form.Item
                    label="实际入库日期"
                    name="username"
                    rules={[{ required: true, message: '请选择实际入库日期!' }]}
                >
                    <DatePicker />
                </Form.Item>
                <Form.Item
                    label="是否合格"
                    name="radio"
                    rules={[{ required: true, message: '请选择是否合格' }]}
                >
                    <Radio.Group>
                        <Radio value="1">合格</Radio>
                        <Radio value="0">不合格</Radio>
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

export default WanufactureTest;