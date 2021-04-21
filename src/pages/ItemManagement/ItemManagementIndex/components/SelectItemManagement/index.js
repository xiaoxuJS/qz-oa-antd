import React, { useCallback, useEffect, useState } from "react";
import {
  getSofClientFindDropClient
} from '../../../../../Api/communalUrl'
import { Form, Button, Select, Row, Col, message, Input } from "antd";

const { Option } = Select;
/**
 * @author 徐博亚
 * @param {}
 */
const SelectItemManagement = ({ handleChangeList, handleSelectReset }) => {
  const [form] = Form.useForm();
  const {resetFields} = form;
  const [userList, setUserList] = useState([]);
  //搜索
  const onFinish = (values) => {
    handleChangeList(values)
  };
  //重置
  const handleReset = () => {
    resetFields();
    handleSelectReset();
  }
  //获取用户列表
  const userListFun = useCallback(() => {
    ; (async () => {
      const { code, data, msg } = await getSofClientFindDropClient();
      if (code === '20000') {
        setUserList(data)
      } else {
        message.error(msg)
      }
    })();
  }, []);
  useEffect(() => {
    userListFun();
  }, [userListFun])
  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      form = {form}
    >
      <Row>
        <Col span={8}>
          <Form.Item name="clientId" label="所属客户" hasFeedback>
            <Select placeholder="请选择客户">
              {
                userList.map(item => {
                  return               <Option key= {item.id} value={item.id}>
                  {item.clientName}
                </Option>
                })
              }
            </Select>
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item name="pm" label="项目经理">
            <Input />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item name="process" label="当前流程" hasFeedback>
            <Select placeholder="请选择当前流程">
              <Option key="0" value="0">
                未开始
              </Option>
              <Option key="1" value="1">
                方案设计
              </Option>
              <Option key="2" value="2">
                开发生产
              </Option>
              <Option key="3" value="3">
                调试
              </Option>
              <Option key="4" value="4">
                部署安装
              </Option>
              <Option key="5" value="5">
                交付
              </Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={20}></Col>
        <Col span={4}>
          <Form.Item {...tailLayout}>
            <Button onClick = {handleReset}>重置</Button>
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

export default SelectItemManagement;
