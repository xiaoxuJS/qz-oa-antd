import React, { useEffect, useState } from "react";
import {
  getSysMarkFindMark
} from '../../../../../../Api/communalUrl'
import { Form, Input, Button, Select, Row, Col } from "antd";
import { DatePicker } from 'antd';
const { RangePicker } = DatePicker;

const { Option } = Select;
/**
 * @author 徐博亚
 * @param {}
 */
const SelectProduction = ({ handleChangeList, handleSelectReset }) => {
  const [form] = Form.useForm();
  const {resetFields} = form;
  const [deployType, setDeployType] = useState([]);
  useEffect(() => {
    const params = {
      typeCode: 'DEPLOY'
    }
      ; (async () => {
        const { code, data } = await getSysMarkFindMark(params);
        if (code === '20000') {
          setDeployType(data)
        }
      })();
  }, [])
  //搜索
  const onFinish = (values) => {
    handleChangeList(values)
  };
  //重置
  const handleReset = () => {
    resetFields();
    // handleSelectReset();
  }
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
          <Form.Item label="客户名称" placeholder="请输入客户名称" name="clientName">
            <Input />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item name="deploy" label="销售人员" hasFeedback>
            <Select placeholder="请选择成交率">
              {
                deployType && deployType.map(item => {
                  return <Option key={item.markValue} value={item.markValue}>
                    {item.markName}
                  </Option>
                })
              }
            </Select>
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item name="turnover" label="交货日期" hasFeedback>
          <RangePicker />
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

export default SelectProduction;
