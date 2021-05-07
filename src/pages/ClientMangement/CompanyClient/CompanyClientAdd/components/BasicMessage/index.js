import React, { useEffect, useCallback, useState } from "react";
//api
import {
    getSysUserFindDropUser
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

const BasicMessage = ( {show} ) => {
    const [userList, setUserList] = useState([]); //用户列表
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
    }, [])
    useEffect(() => {
        userListFun();
    }, [ userListFun])
    return (
        <>
            <Title level={3}>基本信息</Title>
            <Row key="1">
                <Col span={12}>
                    <Form.Item
                        label="客户名称"
                        name="itemName"
                        rules={[{ required: true, message: "请输入客户名称！" }]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        label="联系人"
                        name="itemType"
                    >
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        label="手机号"
                        name="itemType"
                    >
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        label="邮箱"
                        name="itemType"
                    >
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        label="来源"
                        name="deploy"
                        rules={[{ required: true, message: "请选择来源！" }]}
                    >
                        <Select placeholder="请选择部署类型">
                            {/* {deployType
                                ? deployType.map((item) => {
                                    return (
                                        <Option
                                            key={item.markValue}
                                            value={item.markValue}
                                        >
                                            {item.markName}
                                        </Option>
                                    );
                                })
                                : null} */}
                        </Select>
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        label="经营范围"
                        name="level"
                    >
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        label="经营地"
                        name="level"
                    >
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        label="项目经理"
                        name="pm"
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
                        label="信誉度"
                        name="add"
                        rules={[{ required: true, message: "请输入信誉度！" }]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
            </Row>
        </>
    )
}

export default BasicMessage;