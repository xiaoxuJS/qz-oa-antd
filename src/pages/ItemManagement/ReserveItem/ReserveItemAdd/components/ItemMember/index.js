import React from 'react';

import {
    Button,
    Form,
    Input,
    Row,
    Col,
    Typography,
} from "antd";
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
const { Title } = Typography;

const ItemMember = () => {
    return (
        <>
            <Title level={3}>项目成员</Title>
            <Row key='3'>
                <Col span={24}>
                    <Form.List
                        name="names1"
                    >
                        {(fields, { add, remove }, { errors }) => (
                            <>
                                {fields.map((field, index) => (
                                    <Form.Item
                                        {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                                        label={index === 0 ? '方案设计组成员' : ''}
                                        required={false}
                                        key={field.key}
                                    >
                                        <Row key={index + 10}>
                                            <Col span="10">
                                                <Form.Item
                                                    label="姓名"
                                                    {...field}
                                                    validateTrigger={['onChange', 'onBlur']}
                                                >
                                                    <Input placeholder="请输入方案设计组成员姓名" style={{ width: '60%' }} />
                                                </Form.Item>
                                            </Col>
                                            <Col span="10">

                                                <Form.Item
                                                    label="联系方式"
                                                    {...field}
                                                    validateTrigger={['onChange', 'onBlur']}
                                                >
                                                    <Input placeholder="请输入方案设计组成员手机号" style={{ width: '60%' }} />
                                                </Form.Item>
                                            </Col>
                                            <Col span="4">
                                                {/* 删除项目人员 */}
                                                <MinusCircleOutlined
                                                    className="dynamic-delete-button"
                                                    onClick={() => remove(field.name)}
                                                />
                                            </Col>
                                        </Row>


                                    </Form.Item>
                                ))}
                                <Form.Item>
                                    <Button
                                        type="dashed"
                                        onClick={() => add()}
                                        style={{ width: '50%', marginLeft: "100px" }}
                                        icon={<PlusOutlined />}
                                    >
                                        添加设计组成员
                  </Button>
                                    <Form.ErrorList errors={errors} />
                                </Form.Item>
                            </>
                        )}
                    </Form.List>
                </Col>
                <Col span={24}>
                    <Form.List
                        name="names2"
                    >
                        {(fields, { add, remove }, { errors }) => (
                            <>
                                {fields.map((field, index) => (
                                    <Form.Item
                                        {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                                        label={index === 0 ? '开发生产组成员' : ''}
                                        required={false}
                                        key={field.key}
                                    >
                                        <Row key={index + 10}>
                                            <Col span="10">
                                                <Form.Item
                                                    label="姓名"
                                                    {...field}
                                                    validateTrigger={['onChange', 'onBlur']}
                                                >
                                                    <Input placeholder="请输入开发生产组成员姓名" style={{ width: '60%' }} />
                                                </Form.Item>
                                            </Col>
                                            <Col span="10">

                                                <Form.Item
                                                    label="联系方式"
                                                    {...field}
                                                    validateTrigger={['onChange', 'onBlur']}
                                                >
                                                    <Input placeholder="请输入方案开发生产组成员手机号" style={{ width: '60%' }} />
                                                </Form.Item>
                                            </Col>
                                            <Col span="4">
                                                {/* 删除项目人员 */}
                                                <MinusCircleOutlined
                                                    className="dynamic-delete-button"
                                                    onClick={() => remove(field.name)}
                                                />
                                            </Col>
                                        </Row>


                                    </Form.Item>
                                ))}
                                <Form.Item>
                                    <Button
                                        type="dashed"
                                        onClick={() => add()}
                                        style={{ width: '50%', marginLeft: "100px" }}
                                        icon={<PlusOutlined />}
                                    >
                                        添加开发生产组成员
                  </Button>
                                    <Form.ErrorList errors={errors} />
                                </Form.Item>
                            </>
                        )}
                    </Form.List>
                </Col>
                <Col span={24}>
                    <Form.List
                        name="names3"
                    >
                        {(fields, { add, remove }, { errors }) => (
                            <>
                                {fields.map((field, index) => (
                                    <Form.Item
                                        {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                                        label={index === 0 ? '安装调试组成员' : ''}
                                        required={false}
                                        key={field.key}
                                    >
                                        <Row key={index + 10}>
                                            <Col span="10">
                                                <Form.Item
                                                    label="姓名"
                                                    {...field}
                                                    validateTrigger={['onChange', 'onBlur']}
                                                >
                                                    <Input placeholder="请输入安装调试组成员姓名" style={{ width: '60%' }} />
                                                </Form.Item>
                                            </Col>
                                            <Col span="10">

                                                <Form.Item
                                                    label="联系方式"
                                                    {...field}
                                                    validateTrigger={['onChange', 'onBlur']}
                                                >
                                                    <Input placeholder="请输入安装调试组成员手机号" style={{ width: '60%' }} />
                                                </Form.Item>
                                            </Col>
                                            <Col span="4">
                                                {/* 删除项目人员 */}
                                                <MinusCircleOutlined
                                                    className="dynamic-delete-button"
                                                    onClick={() => remove(field.name)}
                                                />
                                            </Col>
                                        </Row>


                                    </Form.Item>
                                ))}
                                <Form.Item>
                                    <Button
                                        type="dashed"
                                        onClick={() => add()}
                                        style={{ width: '50%', marginLeft: "100px" }}
                                        icon={<PlusOutlined />}
                                    >
                                        添加安装调试组成员
                  </Button>
                                    <Form.ErrorList errors={errors} />
                                </Form.Item>
                            </>
                        )}
                    </Form.List>
                </Col>
                <Col span={24}>
                    <Form.List
                        name="names4"
                    >
                        {(fields, { add, remove }, { errors }) => (
                            <>
                                {fields.map((field, index) => (
                                    <Form.Item
                                        {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                                        label={index === 0 ? '售后组成员' : ''}
                                        required={false}
                                        key={field.key}
                                    >
                                        <Row key={index + 10}>
                                            <Col span="10">
                                                <Form.Item
                                                    label="姓名"
                                                    {...field}
                                                    validateTrigger={['onChange', 'onBlur']}
                                                >
                                                    <Input placeholder="请输入售后组成员姓名" style={{ width: '60%' }} />
                                                </Form.Item>
                                            </Col>
                                            <Col span="10">

                                                <Form.Item
                                                    label="联系方式"
                                                    {...field}
                                                    validateTrigger={['onChange', 'onBlur']}
                                                >
                                                    <Input placeholder="请输入售后组成员手机号" style={{ width: '60%' }} />
                                                </Form.Item>
                                            </Col>
                                            <Col span="4">
                                                {/* 删除项目人员 */}
                                                <MinusCircleOutlined
                                                    className="dynamic-delete-button"
                                                    onClick={() => remove(field.name)}
                                                />
                                            </Col>
                                        </Row>


                                    </Form.Item>
                                ))}
                                <Form.Item>
                                    <Button
                                        type="dashed"
                                        onClick={() => add()}
                                        style={{ width: '50%', marginLeft: "100px" }}
                                        icon={<PlusOutlined />}
                                    >
                                        添加设计组成员
                  </Button>
                                    <Form.ErrorList errors={errors} />
                                </Form.Item>
                            </>
                        )}
                    </Form.List>
                </Col>
                <Col span={24}>
                    <Form.List
                        name="names5"
                    >
                        {(fields, { add, remove }, { errors }) => (
                            <>
                                {fields.map((field, index) => (
                                    <Form.Item
                                        {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                                        label={index === 0 ? '方案设计组成员' : ''}
                                        required={false}
                                        key={field.key}
                                    >
                                        <Row key={index + 10}>
                                            <Col span="10">
                                                <Form.Item
                                                    label="姓名"
                                                    {...field}
                                                    validateTrigger={['onChange', 'onBlur']}
                                                >
                                                    <Input placeholder="请输入方案设计组成员姓名" style={{ width: '60%' }} />
                                                </Form.Item>
                                            </Col>
                                            <Col span="10">

                                                <Form.Item
                                                    label="联系方式"
                                                    {...field}
                                                    validateTrigger={['onChange', 'onBlur']}
                                                >
                                                    <Input placeholder="请输入方案设计组成员手机号" style={{ width: '60%' }} />
                                                </Form.Item>
                                            </Col>
                                            <Col span="4">
                                                {/* 删除项目人员 */}
                                                <MinusCircleOutlined
                                                    className="dynamic-delete-button"
                                                    onClick={() => remove(field.name)}
                                                />
                                            </Col>
                                        </Row>


                                    </Form.Item>
                                ))}
                                <Form.Item>
                                    <Button
                                        type="dashed"
                                        onClick={() => add()}
                                        style={{ width: '50%', marginLeft: "100px" }}
                                        icon={<PlusOutlined />}
                                    >
                                        添加设计组成员
                                        </Button>
                                    <Form.ErrorList errors={errors} />
                                </Form.Item>
                            </>
                        )}
                    </Form.List>
                </Col>
            </Row>

        </>
    )
}
const formItemLayoutWithOutLabel = {
    wrapperCol: {
        xs: { span: 24, offset: 0 },
        sm: { span: 20, offset: 3 },
    },
};
const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 3 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 20 },
    },
};


export default ItemMember;