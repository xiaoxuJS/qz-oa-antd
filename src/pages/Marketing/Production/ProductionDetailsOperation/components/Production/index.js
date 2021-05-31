import React, { useState } from 'react';
import { Row, Col, Button,  Form , DatePicker  } from "antd";
import { Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
const {confirm} = Modal;

const Production = ({setFlow, flow}) => {
    const [form] = Form.useForm();
    const {
        // setFieldsValue, 
        validateFields} = form;
    const [isModalVisible, setIsModalVisible] = useState(false);
    const hanldeNextStep = () => {
        setIsModalVisible(true);
    };
    //签收
    const handleOk = () => {
        validateFields().then(values => {
            console.log(values);
            setFlow('9');
            setIsModalVisible(false);
        })
        
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    //下发技术部
    const hanldeNextStepSkill = () => {
        confirm({
            title: '您确定要将流程单发往技术部吗?',
            icon: <ExclamationCircleOutlined />,
            onOk() {
                setFlow('10');
                console.log('OK');
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    }
    const buttonShow = () => {
        switch (flow) {
          case '8':
            return <Col span={3}><Button type='primary' onClick={() => hanldeNextStep()}>（生产制造部）8.签收</Button></Col>;
          case '9':
            return <Col span={3}><Button type='primary' onClick={() => hanldeNextStepSkill()}>9. （生产制造部制作完成）下发（技术部）</Button></Col>;
          default:
            break;
        }
      }
    return <>
        <Row>
            {/* 签收的时候会填写计划生产时间 */}
            {buttonShow()}
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