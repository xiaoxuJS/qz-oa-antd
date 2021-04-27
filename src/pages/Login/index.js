import React from 'react';
import { useHistory } from 'react-router-dom'
import {
  LoginAll,
  LoginBox
} from './style'
//antd
import { Button, Form, Input, Card } from 'antd';


const Login = () => {
  const history = new useHistory();
  const handleEnterPage = () => {
    sessionStorage.setItem('token', "登录成功");
    history.push('/');
  };
  return (
    <LoginAll>
      <LoginBox>
        <Card title="祺智传媒OA系统登录"
          extra={<Button type = 'link'>More</Button>}
          style={{ width: 300 }}
        >
          <Form
            {...layout}
            name="basic"
            initialValues={{
              remember: true,
            }}
            onFinish={handleEnterPage}
          >
            <Form.Item
              label="账号"
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Please input your username!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="密码"
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
            {/* <Form.Item {...tailLayout} name="remember" valuePropName="checked">
              <Checkbox>Remember me</Checkbox>
            </Form.Item> */}
            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                登录
              </Button>
            </Form.Item>
          </Form>
        </Card>

      </LoginBox>
      <Button onClick={() => handleEnterPage()}></Button>
    </LoginAll>
  )
};
const layout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};
export default Login;