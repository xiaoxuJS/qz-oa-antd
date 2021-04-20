import React, {useState} from 'react';
import { Form,Row, Col, Typography, InputNumber } from 'antd';
const { Title } = Typography;


const ItemBudget = () => {
    const [bugValueDate, setBugValueDate] = useState({});
    const [bugValue, setBugValue] = useState(0);
    const handleBudgetTotal = (value, name) => {
        const newArray = {...bugValueDate};
        let num  = 0;
        newArray[name] = value;
        for (const key in newArray) {
            num += newArray[key];
        }
        setBugValueDate(newArray);
        setBugValue(num);
    }
     return (
        <>
            <Title level={3}>项目预算(元)</Title>
            <Row key="6">
                <Col span={12}>
                    <Form.Item
                        label="材料费"
                        name="materials"
                        rules={[{ required: true, message: "请输入材料费！" }]}
                    >
                        <InputNumber onChange = {value => handleBudgetTotal(value, 'materials')} />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        label="工时费"
                        name="working"
                        rules={[{ required: true, message: "请输入工时费！" }]}
                    >
                        <InputNumber onChange = {value => handleBudgetTotal(value, 'working')} />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        label="相关差旅费"
                        name="travel"
                        rules={[{ required: true, message: "请输入相关差旅费！" }]}
                    >
                        <InputNumber onChange = {value => handleBudgetTotal(value, 'travel')}/>
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        label="售后服务费"
                        name="sales"
                        rules={[{ required: true, message: "请输入售后服务费！" }]}
                    >
                        <InputNumber onChange = {value => handleBudgetTotal(value, 'sales')}/>
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        label="安装调试费"
                        name="debugging"
                        rules={[{ required: true, message: "请输入安装调试费！" }]}
                    >
                        <InputNumber onChange = {value => handleBudgetTotal(value, 'debugging')}/>
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        label="总计"
                    >
                        <InputNumber value = {bugValue} disabled />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        label="准确率"
                        name="accuracy"
                        rules={[{ required: true, message: "请输入准确率！" }]}
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

export default ItemBudget;