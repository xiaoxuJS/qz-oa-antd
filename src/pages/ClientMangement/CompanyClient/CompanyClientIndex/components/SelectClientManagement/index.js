import React, { useCallback, useEffect, useState } from "react";
import {
    getSysUserFindDropUser
} from '../../../../../../Api/communalUrl'
import { Form, Button, Select, Row, Col, message, Space } from "antd";

const { Option } = Select;
/**
 * @author 徐博亚
 * @param {}
 */
const SelectItemManagement = ({ handleChangeList, handleSelectReset }) => {
    const [form] = Form.useForm();
    const { resetFields } = form;
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
            const { code, data, msg } = await getSysUserFindDropUser();
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
            form={form}
        >
            <Row>
                <Col span={8}>
                    <Form.Item
                        label="项目经理"
                        name="pm"
                        rules={[{ required: true, message: "请选择项目经理！" }]}
                    >
                        <Select placeholder="请选择项目经理">
                            {userList
                                ? userList.map((item) => {
                                    return (
                                        <Option
                                            key={item.id}
                                            value={item.id}
                                        >
                                            {item.name}
                                        </Option>
                                    );
                                })
                                : null}
                        </Select>
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Row>
                        <Col span={10}></Col>
                        <Col span={10}>
                            <Form.Item {...tailLayout}>
                                <Space>
                                    <Button onClick={handleReset}>重置</Button>
                                    <Button type="primary" htmlType="submit">
                                        确定
                </Button>
                                </Space>

                            </Form.Item>
                        </Col>
                    </Row>
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
