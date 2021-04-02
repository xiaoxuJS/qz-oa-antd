import React from "react";
import {
    Form,
    Input,
    Select,
    Row,
    Col,
    Radio,
    Typography,
  } from "antd";
//   const { Option } = Select;
  const { Title } = Typography;
  const { TextArea } = Input;

const BasicMessage = () => {
    return (
        <>
            <Title level={3}>基本信息</Title>
            <Row key="1">
                <Col span={12}>
                    <Form.Item
                        label="项目名称"
                        name="taskName"
                        rules={[{ required: true, message: "请输入项目名称！" }]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        label="项目类型"
                        name="taskNo"
                        rules={[{ required: true, message: "请选择项目类型！" }]}
                    >
                        <Select placeholder="请选择项目类型">
                            {/* {depData
                  ? depData.map((item) => {
                      return (
                        <Option
                          key={item.departmentId}
                          value={item.departmentId}
                        >
                          {item.departmentName}
                        </Option>
                      );
                    })
                  : null} */}
                        </Select>
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        label="部署类型"
                        name="taskNo"
                        rules={[{ required: true, message: "请选择部署类型！" }]}
                    >
                        <Select placeholder="请选择部署类型">
                            {/* {depData
                  ? depData.map((item) => {
                      return (
                        <Option
                          key={item.departmentId}
                          value={item.departmentId}
                        >
                          {item.departmentName}
                        </Option>
                      );
                    })
                  : null} */}
                        </Select>
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        label="重要程度"
                        name="zycd"
                        rules={[{ required: true, message: "请选择重要程度！" }]}
                    >
                        <Radio.Group>
                            <Radio value={1}>1</Radio>
                            <Radio value={2}>2</Radio>
                            <Radio value={3}>3</Radio>
                            <Radio value={4}>4</Radio>
                            <Radio value={4}>5</Radio>
                        </Radio.Group>
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        label="项目状态"
                        name="zycd"
                        rules={[{ required: true, message: "请选择项目状态！" }]}
                    >
                        <Radio.Group>
                            <Radio value={1}>储备项目</Radio>
                            <Radio value={2}>进行中项目</Radio>
                        </Radio.Group>
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        label="所属客户"
                        name="taskNo"
                    >
                        <Select placeholder="请选择所属客户">
                            {/* {depData
                  ? depData.map((item) => {
                      return (
                        <Option
                          key={item.departmentId}
                          value={item.departmentId}
                        >
                          {item.departmentName}
                        </Option>
                      );
                    })
                  : null} */}
                        </Select>
                    </Form.Item>
                </Col>
                <Col span={24}>
                    <Form.Item
                        label="项目简介"
                        name="taskNo"
                        {...span24}
                    >
                        <TextArea rows={4} />
                    </Form.Item>
                </Col>
            </Row>
        </>
    )
}

const span24 = {
    labelCol: { span: 3 },
    wrapperCol: { span: 19 },
  };
  

export default BasicMessage;