import React, { useEffect, useCallback, useState } from "react";
//api
import {
    getSysUserFindDropUser,
    getSysMarkFindMark
} from '../../../../../../Api/communalUrl'
import {
    Form,
    Input,
    Select,
    Row,
    Col,
    Typography,
    message,
} from "antd";
const { Option } = Select;
const { Title } = Typography;

const BasicMessage = ({ show }) => {
    const [userList, setUserList] = useState([]); //用户列表
    const [soutceList, setSoutceList] = useState([]); // 来源
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
    const soutceFun = useCallback(
        () => {
            ;(async () => {
                const {code, msg,data} = await getSysMarkFindMark({typeCode: 'RESOURCE'});
                if(code === '20000') {
                    setSoutceList(data);
                }else{
                    message.error(msg);
                }
            })();
        },
        [],
    )
    useEffect(() => {
        userListFun();
        soutceFun();
    }, [userListFun, soutceFun])
    return (
        <>
            <Title level={3}>基本信息</Title>
            <Row key="1">
                <Col span={12}>
                    <Form.Item
                        label="客户名称"
                        name="clientName"
                        rules={[{ required: true, message: "请输入客户名称！" }]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        label="客户类型"
                        name="clientType"
                        rules={[{ required: true, message: "请选择客户类型！" }]}
                    >
                        <Select placeholder="请选择客户类型">
                            <Option
                                value='0'
                            >
                                企业客户
                            </Option>
                            <Option
                                value='1'
                            >
                                合作客户
                            </Option>
                        </Select>
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        label="联系人"
                        name="linkman"
                        rules={[{ required: true, message: "请输入联系人！" }]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        label="手机号"
                        name="mobile"
                        rules={[{ required: true, message: "请输入手机号！" }]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={12}>
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
                <Col span={12}>
                    <Form.Item
                        label="来源"
                        name="resource"
                        rules={[{ required: true, message: "请选择来源！" }]}
                    >
                        <Select placeholder="请选择来源">
                            {soutceList
                                ? soutceList.map((item) => {
                                    return (
                                        <Option
                                            key={item.markValue}
                                            value={item.markValue}
                                        >
                                            {item.markName}
                                        </Option>
                                    );
                                })
                                : null}
                        </Select>
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        label="邮箱"
                        name="email"
                    >
                        <Input />
                    </Form.Item>
                </Col>

                <Col span={12}>
                    <Form.Item
                        label="经营范围"
                        name="marketing"
                    >
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        label="经营地"
                        name="path"
                    >
                        <Input />
                    </Form.Item>
                </Col>

                <Col span={12}>
                    <Form.Item
                        label="信誉度"
                        name="trustrank"
                    >
                        <Input />
                    </Form.Item>
                </Col>
            </Row>
        </>
    )
}

export default BasicMessage;