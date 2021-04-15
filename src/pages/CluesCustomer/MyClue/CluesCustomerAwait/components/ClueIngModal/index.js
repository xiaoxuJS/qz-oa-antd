import React, {useEffect} from "react";
//antd
import { Modal, Form, Input, DatePicker  } from "antd";
const { TextArea } = Input;

/**
 * @author 徐博亚
 * @param { booler } clueIngModalShow (控制当前组件显示隐藏)
 * @param { Fun } handleClueIngModalShow (控制当前组件显示隐藏的函数)
 */
const ClueIngModal = ({ clueIngModalShow, handleClueIngModalShow }) => {
  const [form] = Form.useForm();
  const { resetFields, validateFields }  = form;
  const handleClueIngModalOk = () => {
    validateFields().then((values) => {
      console.log(values)
      handleClueIngModalShow(false)
    })

  };
  const handleCancel = () => {
    handleClueIngModalShow(false)
  };

  useEffect(() => {
    resetFields();
  }, [clueIngModalShow, resetFields])
  return (
    <Modal
      title="线索跟进"
      visible={clueIngModalShow}
      onOk={handleClueIngModalOk}
      onCancel={handleCancel}
      forceRender = {true}
    >
    <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      form = {form}
    >
      <Form.Item
        label="洽谈事项"
        name="username"
        rules={[{ required: true, message: '请输入洽谈事项!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="洽谈内容"
        name="neirog"
        rules={[{ required: true, message: '请输入洽谈内容!' }]}
      >
        <TextArea rows={4} />
      </Form.Item>
      <Form.Item name="shijian" label="洽谈时间">
        <DatePicker />
      </Form.Item>
      <Form.Item name="shijian01" label="下次联系时间">
        <DatePicker />
      </Form.Item>
    </Form>
    </Modal>
  );
};
const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 16 },
};
export default ClueIngModal;
