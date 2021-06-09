import React, { useState, useEffect, useCallback } from "react";
import {
    getSysMarkFindMark
} from '../../../../../../Api/communalUrl'
import { Form, Input, Button, Select, Row, Col, message } from "antd";

const { Option } = Select;
/**
 * @author 徐博亚
 * @param {}
 */
const SelectAtaitClue = ({ handleChangeList, handleListgReset }) => {
    const [form] = Form.useForm();
    const {resetFields} = form;
    const [deployList, setDeployList] = useState([]); //部署类型
    const deployFun = useCallback(
        () => {
            ; (async () => {
                const { code, msg, data } = await getSysMarkFindMark({
                    typeCode: 'DEPLOY'
                });
                if (code === '20000') {
                    setDeployList(data)
                } else {
                    message.error(msg);
                }
            })();
        },
        [],
    )
    useEffect(() => {
        deployFun();
    }, [deployFun])
    //搜索
    const onFinish = (values) => {
        handleChangeList(values)
    };
    //重置
    const handleReset = () => {
        resetFields();
        handleListgReset();
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
                    <Form.Item name="clientName" label="客户名称" placeholder="请输入客户名称" >
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item name="deploy" label="部署类型" hasFeedback>
                        <Select placeholder="请选择部署类型">
                            {
                                deployList.map(item => <Option key={item.markValue} value={item.markValue}>
                                    {item.markName}
                                </Option>)
                            }
                        </Select>
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item name="turnover" label="成交率" hasFeedback>
                        <Select placeholder="请选择成交率">
                            <Option key="1" value="0.5">
                                50%
              </Option>
                            <Option key="2" value="0.65">
                                65%
              </Option>
                            <Option key="3" value="0.8">
                                80%
              </Option>
                            <Option key="4" value="1">
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
                        <Button onClick = {() => handleReset()}>重置</Button>
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
