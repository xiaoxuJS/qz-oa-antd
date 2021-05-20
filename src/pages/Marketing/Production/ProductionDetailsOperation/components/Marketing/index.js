import React, { useState } from 'react';
import { Row, Col, Button, Form, DatePicker, Radio, Select, Upload, message } from "antd";
import { Modal } from 'antd';
import { UploadOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
const { Option } = Select;

const { confirm } = Modal;



const Marketing = ({ setFlow, flow }) => {
  const [form] = Form.useForm();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const hanldeNextStep = () => {
    confirm({
      title: '您确定要将流程单发往技术部吗?',
      icon: <ExclamationCircleOutlined />,
      onOk() {
        setFlow('2');
        console.log('OK');
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }
  const hanldeNextStepFahuo = () => {
    setIsModalVisible(true)
  }
  const handleOk = () => {
    form.validateFields().then(values => {
      console.log(values);
      setFlow('1');
      setIsModalVisible(false);
    })

  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const buttonShow = () => {
    switch (flow) {
      case '1':
        return <Col span={3}><Button type='primary' onClick={() => hanldeNextStep()}>1.（营销部）下发技术部</Button></Col>;
      case '8':
        return <Col span={3}><Button type='primary' onClick={() => hanldeNextStep()}>8. （营销部）下发（生产制造部）</Button></Col>;
      case '12':
        return <Col span={3}><Button type = 'primary' onClick = {() => hanldeNextStepFahuo()}>12.（营销部）发货</Button></Col>;
    
      default:
        break;
    }
  }
  return <>
    <Row>
      {buttonShow()}
    </Row>
    <Modal title="是否确认签收" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
      <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        form={form}
      >

        <Form.Item
          label="发货时间"
          name="time"
          rules={[{ required: true, message: '请选择发货时间!' }]}
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

export default Marketing;