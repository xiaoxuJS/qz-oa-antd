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
const ItemMoney = () => {
    return (
        <>
            <Title level={3}>奖金比例</Title>
            <Row key="1">
                <Col span={12}>
                    <Form.Item
                        label="方案设计组"
                        name="taskName"
                    >
                        <InputNumber
                            min={0}
                            max={100}
                            formatter={value => `${value}%`}
                            parser={value => value.replace('%', '')}
                        />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        label="开发生产组"
                        name="taskName"
                    >
                        <InputNumber
                            min={0}
                            max={100}
                            formatter={value => `${value}%`}
                            parser={value => value.replace('%', '')}
                        />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        label="安装调试组"
                        name="taskName"
                    >
                        <InputNumber
                            min={0}
                            max={100}
                            formatter={value => `${value}%`}
                            parser={value => value.replace('%', '')}
                        />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        label="售后组"
                        name="taskName"
                    >
                        <InputNumber
                            min={0}
                            max={100}
                            formatter={value => `${value}%`}
                            parser={value => value.replace('%', '')}
                        />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        label="其他成员"
                        name="taskName"
                    >
                        <InputNumber
                            min={0}
                            max={100}
                            formatter={value => `${value}%`}
                            parser={value => value.replace('%', '')}
                        />
                    </Form.Item>
                </Col>
            </Row>
        </>
    )
}
export default ItemMoney;