import React from 'react';
import { Form, Input, Button, Space, Row, Col, Typography } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
const { Title } = Typography;


const ItemBudget = () => {
    return (
        <>
            <Title level={3}>项目预算</Title>
            <Row key="6">
                <Col span={24}>
                    <Form.List name="sights">
                        {(fields, { add, remove }) => (
                            <>
                                {fields.map(field => (
                                    <Space key={field.key} align="baseline">
                                        <Row className="item-materials-row">
                                            <Col span={12}>
                                                <Form.Item
                                                    {...field}
                                                    label="材料费"
                                                    name={[field.name, 'price']}
                                                    fieldKey={[field.fieldKey, 'price']}
                                                    rules={[{ required: true, message: '请填写材料费！' }]}
                                                >
                                                    <Input />
                                                </Form.Item>
                                            </Col>
                                            <Col span={12}>
                                                <Form.Item
                                                    {...field}
                                                    label="工时费"
                                                    name={[field.name, 'price']}
                                                    fieldKey={[field.fieldKey, 'price']}
                                                    rules={[{ required: true, message: '请填写工时费！' }]}
                                                >
                                                    <Input />
                                                </Form.Item>
                                            </Col>
                                            <Col span={12}>
                                                <Form.Item
                                                    {...field}
                                                    label="相关差旅费"
                                                    name={[field.name, 'price']}
                                                    fieldKey={[field.fieldKey, 'price']}
                                                    rules={[{ required: true, message: '请填写差旅费！' }]}
                                                >
                                                    <Input />
                                                </Form.Item>
                                            </Col>
                                            <Col span={12}>
                                                <Form.Item
                                                    {...field}
                                                    label="售后服务费"
                                                    name={[field.name, 'price']}
                                                    fieldKey={[field.fieldKey, 'price']}
                                                    rules={[{ required: true, message: '请填写售后服务费！' }]}
                                                >
                                                    <Input />
                                                </Form.Item>
                                            </Col>
                                            <Col span={12}>
                                                <Form.Item
                                                    {...field}
                                                    label="安装调试费"
                                                    name={[field.name, 'price']}
                                                    fieldKey={[field.fieldKey, 'price']}
                                                    rules={[{ required: true, message: '请填写安装调试费！' }]}
                                                >
                                                    <Input />
                                                </Form.Item>
                                            </Col>
                                            <Col span={12}>
                                                <Form.Item
                                                    {...field}
                                                    label="准确率"
                                                    name={[field.name, 'price']}
                                                    fieldKey={[field.fieldKey, 'price']}
                                                    rules={[{ required: true, message: '请填写准确率！' }]}
                                                >
                                                    <Input />
                                                </Form.Item>
                                            </Col>
                                            <Col span={12}>
                                                <Form.Item
                                                    {...field}
                                                    label="总计"
                                                    name={[field.name, 'price']}
                                                    fieldKey={[field.fieldKey, 'price']}
                                                    rules={[{ required: true, message: '请填写总计！' }]}
                                                >
                                                    <Input />
                                                </Form.Item>
                                            </Col>
                                        </Row>
                                        <MinusCircleOutlined onClick={() => remove(field.name)} />
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
                    {/* <Form.Item label="附件" {...span24}>
                        <Upload
                            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                            listType="picture"
                            defaultFileList={[...fileList]}
                        >
                            <Button icon={<UploadOutlined />}>Upload</Button>
                                注：  材料费、工时费、相关差旅费、售后服务费、安装调试费、准确率、总计
                            </Upload>
                    </Form.Item> */}
                </Col>
            </Row>
        </>
    )
}

const tailLayout = {
    wrapperCol: { offset: 0, span: 24 },
};

export default ItemBudget;