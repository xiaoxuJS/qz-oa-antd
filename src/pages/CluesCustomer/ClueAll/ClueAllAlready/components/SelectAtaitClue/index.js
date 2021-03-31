import React from "react";
import { Form, Input, Button, Select, Row, Col } from "antd";

const { Option } = Select;
/**
 * @author 徐博亚
 * @param {}
 */
const SelectAtaitClue = ({handleChangeList}) => {
  //搜索
  const onFinish = (values) => {
    handleChangeList(values)
  };
  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Row>
        <Col span={8}>
          <Form.Item label="客户名称" placeholder="请输入客户名称" name="username">
            <Input />
          </Form.Item>
        </Col>
        <Col span={8}>
        <Form.Item name="select" label="部署类型" hasFeedback>
            <Select placeholder="请选择成交率">
              <Option key="1" value="50%">
                50%
              </Option>
              <Option key="2" value="65%">
                65%
              </Option>
              <Option key="3" value="80%">
                80%
              </Option>
              <Option key="4" value="100%">
                100%
              </Option>
            </Select>
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item name="select1" label="成交率" hasFeedback>
            <Select placeholder="请选择成交率">
              <Option key="1" value="50%">
                50%
              </Option>
              <Option key="2" value="65%">
                65%
              </Option>
              <Option key="3" value="80%">
                80%
              </Option>
              <Option key="4" value="100%">
                100%
              </Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={20}></Col>
        <Col span={4}>
          <Form.Item {...tailLayout}>
            <Button>重置</Button>
            <Button type="primary" htmlType="submit">
              确定
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

export default SelectAtaitClue;
