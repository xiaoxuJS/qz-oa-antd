import React, { useState } from 'react';
import { Form, Input, Button, Space, Row, Col, Typography, InputNumber } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';


const { Title } = Typography;


const ItemMaterials = (materialPrice) => {
    const [allMoney, setAllMoney] = useState([]);
    const [allMoneyData, setAllMoneyData] = useState([]);
    //获取单价
    const handlePrice = (value, key) => {
        console.log(key)
        let newArray = [...allMoneyData];
        let allMoneyNewArray = [...allMoney];
        if(!newArray[key]) {
            newArray[key] = {
                price: value,
                number: 0,
                freight:0
            }
        }
        newArray[key].price = value;
        allMoneyNewArray[key] = value * newArray[key].number + newArray[key].freight;
        setAllMoney(allMoneyNewArray);
        setAllMoneyData(newArray);
    };
    //获取数量
    const handleNumber = (value, key) => {
        let newArray = [...allMoneyData];
        let allMoneyNewArray = [...allMoney];
        if(!newArray[key]) {
            newArray[key] = {
                price: 0,
                number: value,
                freight:0
            }
        }
        newArray[key].number = value;
        allMoneyNewArray[key] = value * newArray[key].price + newArray[key].freight;
        setAllMoney(allMoneyNewArray);
        setAllMoneyData(newArray);
    };
    //获取运费
    const handleFreight =(value, key) => {
        let newArray = [...allMoneyData];
        let allMoneyNewArray = [...allMoney];
        if(!newArray[key]) {
            newArray[key] = {
                price: 0,
                number: 0,
                freight:value
            }
        }
        newArray[key].freight = value;
        allMoneyNewArray[key] = newArray[key].number * newArray[key].price + value;
        setAllMoney(allMoneyNewArray);
        setAllMoneyData(newArray);
    };
    return (
        <>
            <Title level={3}>项目材料</Title>
            <Row key="5">
                <Col span={24}>
                    <Form.List name="detailedDTOS">
                        {(fields, { add, remove }) => (
                            <>
                                {fields.map(({ key, name, fieldKey, ...restField }, index) => (
                                    <Space key={key} align="baseline">
                                        <Row className="item-materials-row">
                                            <Col span={12}>
                                                <Form.Item
                                                    label="厂家"
                                                    name={[name, 'manufactor']}
                                                    fieldKey={[fieldKey, 'manufactor']}
                                                    rules={[{ required: true, message: '请填写厂家！' }]}
                                                >
                                                    <Input />
                                                </Form.Item>
                                            </Col>
                                            <Col span={12}>
                                                <Form.Item
                                                    label="功能"
                                                    name={[name, 'function']}
                                                    fieldKey={[fieldKey, 'function']}
                                                    rules={[{ required: true, message: '请填写功能！' }]}
                                                >
                                                    <Input />
                                                </Form.Item>
                                            </Col>
                                            <Col span={12}>
                                                <Form.Item
                                                    label="材料名称"
                                                    name={[name, 'materialName']}
                                                    fieldKey={[fieldKey, 'materialName']}
                                                    rules={[{ required: true, message: '请填写材料名称！' }]}
                                                >
                                                    <Input />
                                                </Form.Item>
                                            </Col>
                                            <Col span={12}>
                                                <Form.Item
                                                    label="型号规格"
                                                    name={[name, 'model']}
                                                    fieldKey={[fieldKey, 'model']}
                                                    rules={[{ required: true, message: '请填写型号规格！' }]}
                                                >
                                                    <Input />
                                                </Form.Item>
                                            </Col>
                                            <Col span={12}>
                                                <Form.Item
                                                    label="单价（元）"
                                                    name={[name, 'price']}
                                                    fieldKey={[fieldKey, 'price']}
                                                    rules={[{ required: true, message: '请填写单价！' }]}
                                                >
                                                    <InputNumber  onChange={value => handlePrice(value, key)} />
                                                </Form.Item>
                                            </Col>
                                            <Col span={12}>
                                                <Form.Item
                                                    label="数量"
                                                    name={[name, 'number']}
                                                    fieldKey={[fieldKey, 'number']}
                                                    rules={[{ required: true, message: '请填写数量！' }]}
                                                >
                                                    <InputNumber onChange={value => handleNumber(value, key)} />
                                                </Form.Item>
                                            </Col>
                                            <Col span={12}>
                                                <Form.Item
                                                    label="运费（元）"
                                                    name={[name, 'freight']}
                                                    fieldKey={[fieldKey, 'freight']}
                                                    rules={[{ required: true, message: '请填写运费！' }]}
                                                >
                                                    <InputNumber onChange={value => handleFreight(value, key)} />
                                                </Form.Item>
                                            </Col>
                                            <Col span={12}>
                                                <Form.Item
                                                    label="总价（元）"
                                                >
                                                    <InputNumber value={allMoney[key]} disabled />
                                                </Form.Item>
                                            </Col>
                                            <Col span={12}>
                                                <Form.Item
                                                    label="厂家联系方式"
                                                    name={[name, 'mobile']}
                                                    fieldKey={[fieldKey, 'mobile']}
                                                    rules={[{ required: true, message: '请填写厂家联系方式！' }]}
                                                >
                                                    <Input />
                                                </Form.Item>
                                            </Col>
                                            <Col span={12}>
                                                <Form.Item
                                                    label="配料清单"
                                                    name={[name, 'detailed']}
                                                    fieldKey={[fieldKey, 'detailed']}
                                                    rules={[{ required: true, message: '请填写配料清单！' }]}
                                                >
                                                    <Input />
                                                </Form.Item>
                                            </Col>
                                        </Row>
                                        <MinusCircleOutlined onClick={() => remove(name)} />
                                    </Space>
                                ))}

                                <Form.Item {...tailLayout} className="item-materials-button">
                                    <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                        Add sights
                                    </Button>
                                </Form.Item>
                            </>
                        )}
                    </Form.List>
                </Col>
            </Row>
        </>
    )
}

const tailLayout = {
    wrapperCol: { offset: 0, span: 24 },
};

export default ItemMaterials;