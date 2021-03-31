import React, {useEffect } from "react";
import { Modal, Form, Input, Select  } from "antd";
const { Option } = Select;

/**
 * @author 徐博亚
 * @param {bool} showHide(控制当前组件是否显示)
 * @param {Fun} handleClueAllotModalShow(控制当前组件是否显示的函数)
 */
const ClueAllotModal = ({ showHide, handleClueAllotModalShow }) => {
  const [form] = Form.useForm();
  const { resetFields, validateFields }  = form;
  const handleClueAllotModalOk = () => {
    validateFields().then((values) => {
      console.log(values)
      handleClueAllotModalShow(false)
    })

  };
  const handleCancel = () => {
    handleClueAllotModalShow(false)
  };

  useEffect(() => {
    resetFields();
  }, [showHide, resetFields])
  return (
    <Modal
      title="分配线索"
      visible={showHide}
      onOk={handleClueAllotModalOk}
      onCancel={handleCancel}
    >
      <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        form = {form}
      >
        <Form.Item
          label="线索名称"
          name="username"
        >
          <Input disabled/>
        </Form.Item>

        <Form.Item
          label="成交量"
          name="password"
        >
          <Input disabled/>
        </Form.Item>
        <Form.Item
          label="项目经理"
          name="xiaxoujs"
        >
        <Select>
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="disabled" disabled>
            Disabled
          </Option>
          <Option value="Yiminghe">yiminghe</Option>
        </Select>
        </Form.Item>
      </Form>
    </Modal>
  );
};

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 16 },
};
export default ClueAllotModal;
