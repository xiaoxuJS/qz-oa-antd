import React from 'react';

import {
    Form,
    Row,
    Col,
    Typography,
    InputNumber
} from "antd";

const { Title } = Typography;

/**
 * @author 徐博亚
 */
const ItemMoney = ({ itemGroupList }) => {
    return (
        <>
            <Title level={3}>奖金比例</Title>
            <Row key="2">
                {
                    itemGroupList && itemGroupList.map(item => {
                        return <Col span={12} key = {item.id + 'Money'} >
                            <Form.Item
                                label= {item.groupName}
                                name={item.id + 'Money'}
                                rules={[{ required: true, message: `请输入${item.groupName}奖金比` }]}
                            >
                                <InputNumber
                                    min={0}
                                    max={100}
                                    formatter={value => `${value}%`}
                                    parser={value => value.replace('%', '')}
                                />
                            </Form.Item>
                        </Col>
                    })
                }
            </Row>
        </>
    )
}
export default ItemMoney;