import React, { useEffect, useCallback, useState } from "react";
//api
import {
    getSysMarkFindMark,
    getSysUserFindDropUser,
    getSofClientFindDropClient
} from '../../../../../Api/communalUrl'
import {
    Form,
    Input,
    Select,
    Row,
    Col,
    Radio,
    Typography,
    message,
} from "antd";
const { Option } = Select;
const { Title } = Typography;
const { TextArea } = Input;

const BasicMessage = ( {show} ) => {
    const [deployType, setDeployType] = useState([]); //部署类型
    const [itemType, setItemType] = useState([]); //项目类型
    const [userList, setUserList] = useState([]); //用户列表
    const [clientList, setClientList] = useState([]); //客户列表

    //获取字典项
    const dictionariesFun = useCallback((parame) => {
        ; (async () => {
            const { code, data } = await getSysMarkFindMark(parame);
            if (code === '20000') {
                if (parame.typeCode === 'DEPLOY') {
                    setDeployType(data);
                } else if (parame.typeCode === 'ITEMTYPE') {
                    setItemType(data);
                }

            }
        })();
    }, []);
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
    //获取客户列表
    const clientListFun = useCallback(() => {
        ; (async () => {
            const { code, data, msg } = await getSofClientFindDropClient();
            if (code === '20000') {
                setClientList(data)
            } else {
                message.error(msg)
            }
        })();
    }, [])
    useEffect(() => {
        const deployTypeParame = { //部署类型
            typeCode: 'DEPLOY'

        }
        const itemTypeParame = { //项目类型
            typeCode: 'ITEMTYPE'
        }

        dictionariesFun(deployTypeParame);
        dictionariesFun(itemTypeParame);
        userListFun();
        clientListFun();
    }, [dictionariesFun, userListFun, clientListFun])
    return (
        <>
            <Title level={3}>基本信息</Title>
            <Row key="1">
                <Col span={12}>
                    <Form.Item
                        label="项目名称"
                        name="itemName"
                        rules={[{ required: true, message: "请输入项目名称！" }]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        label="项目类型"
                        name="itemType"
                        rules={[{ required: true, message: "请选择项目类型！" }]}
                    >
                        <Select placeholder="请选择项目类型">
                            {itemType
                                ? itemType.map((item) => {
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
                        label="部署类型"
                        name="deploy"
                        rules={[{ required: true, message: "请输入部署类型！" }]}
                    >
                        <Select placeholder="请选择部署类型">
                            {deployType
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
                                : null}
                        </Select>
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        label="重要程度"
                        name="level"
                        rules={[{ required: true, message: "请选择重要程度！" }]}
                    >
                        <Radio.Group>
                            <Radio value={1}>1</Radio>
                            <Radio value={2}>2</Radio>
                            <Radio value={3}>3</Radio>
                            <Radio value={4}>4</Radio>
                            <Radio value={5}>5</Radio>
                        </Radio.Group>
                    </Form.Item>
                </Col>
                {
                    show ? <Col span={12}>
                    <Form.Item
                        label="项目状态"
                        name="itemStatus"
                        rules={[{ required: true, message: "请选择项目状态！" }]}
                    >
                        {/* 0:储备项目,1:进行中项目,2:质保段项目,3:已成交项目 */}
                        <Radio.Group>
                            <Radio value={0}>储备项目</Radio>
                            <Radio value={1}>进行中项目</Radio>
                            <Radio value={2}>质保段项目</Radio>
                            <Radio value={3}>已成交项目</Radio>
                        </Radio.Group>
                    </Form.Item>
                </Col> : null
                }
                
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
                        label="所属客户"
                        name="clientId"
                    >
                        <Select placeholder="请选择所属客户">
                            {clientList
                                ? clientList.map((item) => {
                                    return (
                                        <Option
                                            key={item.id}
                                            value={item.id}
                                        >
                                            {item.clientName}
                                        </Option>
                                    );
                                })
                                : null}
                        </Select>
                    </Form.Item>
                </Col>
                <Col span={24}>
                    <Form.Item
                        label="项目简介"
                        name="synopsis"
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