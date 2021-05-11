import React, { useState } from 'react';
import { Row, Col, Button, Upload, message, Modal } from "antd";
import { UploadOutlined } from '@ant-design/icons';

const Skill = ({setFlow}) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const hanldeNextStep = () => {
        setIsModalVisible(true);
    };
    const handleOk = () => {
        setFlow('4')
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const props = {
        name: 'file',
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        headers: {
            authorization: 'authorization-text',
        },
        onChange(info) {
            if (info.file.status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (info.file.status === 'done') {
                message.success(`${info.file.name} file uploaded successfully`);
            } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
    };
    return <>
        <Row>
            <Col span={2}></Col>
            <Col span={3}><Button type='primary' onClick={() => hanldeNextStep()}>上传图纸并下发给档案室</Button></Col>
        </Row>
        <Modal title="上传图纸" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            <Upload {...props}>
                <Button icon={<UploadOutlined />}>上传</Button>
            </Upload>
        </Modal>

    </>
}

export default Skill;