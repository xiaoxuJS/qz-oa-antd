import React from 'react';
import {
  Form,
  Row,
  Col,
  Typography,
  DatePicker
} from "antd";
const { Title } = Typography;
const { RangePicker } = DatePicker

const ItemTime = ({itemGroupList}) => {
    return (
        <>
            <Title level={3}>项目周期</Title>
            <Row key='2'>
                {
                    itemGroupList && itemGroupList.map(item => {
                        return <Col span={12} key = {item.id}>
                        <Form.Item
                            label={`${item.groupName}周期`}
                            name= {item.id}
                            rules={[{ required: true, message: `请选择${item.groupName}周期` }]}
                        >
                            <RangePicker />
                        </Form.Item>
                    </Col>
                    })
                }
            </Row>
        </>
    )
}

export default ItemTime;