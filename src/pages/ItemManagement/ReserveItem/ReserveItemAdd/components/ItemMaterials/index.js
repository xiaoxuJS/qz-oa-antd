import React from 'react';
import { Form, Input, Button, Space, Row, Col, Typography } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';


const { Title } = Typography;


const ItemMaterials = () => {
    return (
        <>
            <Title level={3}>项目材料</Title>
            <Row key="5">
                <Col span={24}>
                    <Form.List name="sights">
                        {(fields, { add, remove }) => (
                            <>
                                {fields.map(field => (
                                    <Space key={field.key} align="baseline">
                                        <Row className = "item-materials-row">
                                            <Col span={12}>
                                                <Form.Item
                                                    {...field}
                                                    label="厂家"
                                                    name={[field.name, 'price']}
                                                    fieldKey={[field.fieldKey, 'price']}
                                                    rules={[{ required: true, message: '请填写厂家！' }]}
                                                >
                                                    <Input />
                                                </Form.Item>
                                            </Col>
                                            <Col span={12}>
                                                <Form.Item
                                                    {...field}
                                                    label="功能"
                                                    name={[field.name, 'price']}
                                                    fieldKey={[field.fieldKey, 'price']}
                                                    rules={[{ required: true, message: '请填写功能！' }]}
                                                >
                                                    <Input />
                                                </Form.Item>
                                            </Col>
                                            <Col span={12}>
                                                <Form.Item
                                                    {...field}
                                                    label="材料名称"
                                                    name={[field.name, 'price']}
                                                    fieldKey={[field.fieldKey, 'price']}
                                                    rules={[{ required: true, message: '请填写材料名称！' }]}
                                                >
                                                    <Input />
                                                </Form.Item>
                                            </Col>
                                            <Col span={12}>
                                                <Form.Item
                                                    {...field}
                                                    label="型号规格"
                                                    name={[field.name, 'price']}
                                                    fieldKey={[field.fieldKey, 'price']}
                                                    rules={[{ required: true, message: '请填写型号规格！' }]}
                                                >
                                                    <Input />
                                                </Form.Item>
                                            </Col>
                                            <Col span={12}>
                                                <Form.Item
                                                    {...field}
                                                    label="单价"
                                                    name={[field.name, 'price']}
                                                    fieldKey={[field.fieldKey, 'price']}
                                                    rules={[{ required: true, message: '请填写单价！' }]}
                                                >
                                                    <Input />
                                                </Form.Item>
                                            </Col>
                                            <Col span={12}>
                                                <Form.Item
                                                    {...field}
                                                    label="数量"
                                                    name={[field.name, 'price']}
                                                    fieldKey={[field.fieldKey, 'price']}
                                                    rules={[{ required: true, message: '请填写数量！' }]}
                                                >
                                                    <Input />
                                                </Form.Item>
                                            </Col>
                                            <Col span={12}>
                                                <Form.Item
                                                    {...field}
                                                    label="运费"
                                                    name={[field.name, 'price']}
                                                    fieldKey={[field.fieldKey, 'price']}
                                                    rules={[{ required: true, message: '请填写运费！' }]}
                                                >
                                                    <Input />
                                                </Form.Item>
                                            </Col>
                                            <Col span={12}>
                                                <Form.Item
                                                    {...field}
                                                    label="总价"
                                                    name={[field.name, 'price']}
                                                    fieldKey={[field.fieldKey, 'price']}
                                                    rules={[{ required: true, message: '请填写总价！' }]}
                                                >
                                                    <Input />
                                                </Form.Item>
                                            </Col>
                                            <Col span={12}>
                                                <Form.Item
                                                    {...field}
                                                    label="厂家联系方式"
                                                    name={[field.name, 'price']}
                                                    fieldKey={[field.fieldKey, 'price']}
                                                    rules={[{ required: true, message: '请填写厂家联系方式！' }]}
                                                >
                                                    <Input />
                                                </Form.Item>
                                            </Col>
                                            <Col span={12}>
                                                <Form.Item
                                                    {...field}
                                                    label="配料清单"
                                                    name={[field.name, 'price']}
                                                    fieldKey={[field.fieldKey, 'price']}
                                                    rules={[{ required: true, message: '请填写配料清单！' }]}
                                                >
                                                    <Input />
                                                </Form.Item>
                                            </Col>
                                        </Row>
                                        <MinusCircleOutlined onClick={() => remove(field.name)} />
                                    </Space>
                                ))}

                                <Form.Item {...tailLayout} className = "item-materials-button">
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