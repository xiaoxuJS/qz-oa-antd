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

const ItemMember = ({ itemGroupList }) => {
    return (
        <>
            <Title level={3}>项目成员</Title>
            <Row key='3'>
                {
                    itemGroupList && itemGroupList.map(item => {
                        return <Col span={24} key = {item.id + 'member'}>
                            <Form.List
                                name={item.id + 'member'}
                                key ={item.id + 'member'}
                            >
                                {(fields, { add, remove }, { errors }) => (
                                    <>
                                        {fields.map(({ key, name, fieldKey, ...restField }, index) => (
                                            <Form.Item
                                                {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                                                label={index === 0 ? `${item.groupName}成员` : ''}
                                                required={false}
                                                key={key}
                                            >
                                                <Row key={index + 10}>
                                                    <Col span="10">
                                                        <Form.Item
                                                            label="姓名"
                                                            name={[name, 'name']}
                                                            validateTrigger={['onChange', 'onBlur']}
                                                        >
                                                            <Input placeholder="请输入方案设计组成员姓名" style={{ width: '60%' }} />
                                                        </Form.Item>
                                                    </Col>
                                                    <Col span="10">

                                                        <Form.Item
                                                            label="联系方式"
                                                            name={[name, 'phone']}
                                                            validateTrigger={['onChange', 'onBlur']}
                                                        >
                                                            <Input placeholder="请输入方案设计组成员手机号" style={{ width: '60%' }} />
                                                        </Form.Item>
                                                    </Col>
                                                    <Col span="4">
                                                        {/* 删除项目人员 */}
                                                        <MinusCircleOutlined
                                                            className="dynamic-delete-button"
                                                            onClick={() => remove(name)}
                                                        />
                                                    </Col>
                                                </Row>


                                            </Form.Item>
                                        )
                                        )}
                                        <Form.Item>
                                            <Button
                                                type="dashed"
                                                onClick={() => add()}
                                                style={{ width: '50%', marginLeft: "100px" }}
                                                icon={<PlusOutlined />}
                                            >
                                                添加{item.groupName}成员
                                        </Button>
                                            <Form.ErrorList errors={errors} />
                                        </Form.Item>
                                    </>
                                )}
                            </Form.List>
                        </Col>
                    })
                }
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