import React from 'react';
import { Row, Col, Button } from "antd";
import { Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

const { confirm } = Modal;



const SkillIssue = ({setFlow}) => {
    const hanldeNextStep = () => {
        confirm({
            title: '您确定要接收并下发给智能电气部门吗?',
            icon: <ExclamationCircleOutlined />,
            onOk() {
              setFlow('5')
              console.log('OK');
            },
            onCancel() {
              console.log('Cancel');
            },
          });
    }
    return <>
        <Row>
        <Col span={2}></Col>
            <Col span={3}><Button type = 'primary' onClick = {() => hanldeNextStep()}>接收并下发给智能电气部门</Button></Col>
        </Row>
    </>
}

export default SkillIssue;