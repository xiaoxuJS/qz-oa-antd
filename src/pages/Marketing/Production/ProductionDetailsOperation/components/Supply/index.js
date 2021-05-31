import React, { useState } from 'react';
import { Row, Col, Button, Form, DatePicker, Radio } from "antd";
import { Modal } from 'antd';

import { ExclamationCircleOutlined } from '@ant-design/icons';

const {confirm} = Modal;

const Supply = ({ setFlow , flow}) => {
    const [form] = Form.useForm();
    const {
        // setFieldsValue, 
        validateFields } = form;
    const [isModalVisible, setIsModalVisible] = useState(false);
    //签收
    const hanldeNextStep = () => {
        setIsModalVisible(true);
    };
    //签收Modal
    const handleOk = () => {
        validateFields().then(values => {
            setFlow('4')
            setIsModalVisible(false);
        })

    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    //供应部物品整理完成返回给技术中心
    const hanldeNextStepSkill = () => {
        confirm({
            title: '您确定要下发到生产制造部门吗?',
            icon: <ExclamationCircleOutlined />,
            onOk() {
                setFlow('8');
                console.log('OK');
            },
            onCancel() {
                console.log('Cancel');
            },
        });
        setFlow('5')
    }
    //根据状态选择按钮的显示
    const buttonShow = () => {
        switch (flow) {
            case '3':
                return <Col span={3}><Button type='primary' onClick={() => hanldeNextStep()}>3.(供应部)签收</Button></Col>;
            case '4':
                return <Col span={3}><Button type='primary' onClick={() => hanldeNextStepSkill()}>4.（供应部）下发 (技术部)</Button></Col>;
            default:
                break;
        }
    }
    return <>
        <Row>
            {/* 签收的时候填写交货时间 */}
            {buttonShow()}
            {/* <Col span={3}><Button type='primary' onClick={() => hanldeNextStep()}>6.1(供应部)签收</Button></Col> */}
            {/* <Col span={3}><Button type='primary' onClick={() => hanldeNextStep()}>6.2(供应部)驳回</Button></Col> */}
            {/* <Col span={3}><Button type='primary' onClick={() => hanldeNextStep()}>7.（供应部）下发 (技术部)</Button></Col> */}
        </Row>
        <Modal title="是否确认签收" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            <Form
                {...layout}
                name="basic"
                initialValues={{ remember: true }}
                form={form}
            >
                <Form.Item
                    label="计划需要交货日期"
                    name="username"
                    rules={[{ required: true, message: '请选择计划需要交货日期!' }]}
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

export default Supply;