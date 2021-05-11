import React from 'react';
import { Row, Col, Button } from "antd";
import { Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

const { confirm } = Modal;



const Marketing = ({setFlow}) => {
    const hanldeNextStep = () => {
        confirm({
            title: '您确定要将流程单发往技术部吗?',
            icon: <ExclamationCircleOutlined />,
            onOk() {
              setFlow('2');
              console.log('OK');
            },
            onCancel() {
              console.log('Cancel');
            },
          });
    }
    return <>
        <Row>
            <Col span={3}><Button type = 'primary' onClick = {() => hanldeNextStep()}>下发技术部</Button></Col>
        </Row>
    </>
}

export default Marketing;