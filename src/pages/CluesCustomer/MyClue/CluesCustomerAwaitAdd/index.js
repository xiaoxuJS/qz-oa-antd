import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { CluesCustomerAwaitAddAll } from "./style";
import {
  PageHeader,
  Button,
  Form,
  Input,
  Select,
  Row,
  Col,
  Upload,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
const { Option } = Select;

const CluesCustomerAwaitAdd = () => {
  const history = new useHistory();
  const [fileList] = useState([
    {
      uid: "-1",
      name: "xxx.png",
      status: "done",
      url:
        "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
      thumbUrl:
        "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
    {
      uid: "-2",
      name: "yyy.png",
      status: "done",
    },
  ]);
  // 、、form
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <CluesCustomerAwaitAddAll>
      <PageHeader
        className="site-page-header"
        title="我的线索-线索报备"
        onBack={() => history.go(-1)}
      ></PageHeader>
      <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Row key="1">
          <Col span={12}>
            <Form.Item
              label="客户名称"
              name="taskName"
              rules={[{ required: true, message: "请输入客户名称！" }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="联系人"
              name="taskNo"
              rules={[{ required: true, message: "请输入联系人！" }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="手机号"
              name="taskNo"
              rules={[{ required: true, message: "请输入手机号！" }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="邮箱" name="taskNo">
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="organizer"
              label="来源"
              hasFeedback
              rules={[{ required: true, message: "请选择来源！" }]}
            >
              <Select placeholder="请选择主办单位">
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
            <Form.Item label="经营范围" name="taskNo">
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="部署类型"
              name="taskNo"
              rules={[{ required: true, message: "请输入部署类型！" }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="地址" name="taskNo">
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="周期"
              name="taskNo"
              rules={[{ required: true, message: "请输入周期！" }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="预算"
              name="taskNo"
              rules={[{ required: true, message: "请输入预算！" }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="下次联系时间" name="taskNo">
              <Input />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item label="项目经理" name="taskNo">
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="chengjiaolv"
              label="成交率"
              hasFeedback
              rules={[{ required: true, message: "请选择来源！" }]}
            >
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
            <Form.Item label="附件" {...fujian}>
              <Upload
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                listType="picture"
                defaultFileList={[...fileList]}
              >
                <Button icon={<UploadOutlined />}>Upload</Button>
              </Upload>
              {/* <UploadFile onChange={onChange} upTitle="附件上传" /> */}
            </Form.Item>
          </Col>
        </Row>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </Form.Item>
      </Form>
    </CluesCustomerAwaitAddAll>
  );
};
const fujian = {
  labelCol: { span: 3 },
  wrapperCol: { span: 19 },
};

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 22, span: 2 },
};

export default CluesCustomerAwaitAdd;
