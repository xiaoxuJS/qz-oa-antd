import React, { useState } from 'react';
import { Row, Col, Button, Upload, message, Modal, Form } from "antd";
import { UploadOutlined } from '@ant-design/icons';

const WarehouseTest = ({setFlow}) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const hanldeNextStep = () => {
        setIsModalVisible(true);
    };
    const handleOk = () => {
        setFlow('11')
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
            <Col span={3}><Button type='primary' onClick={() => hanldeNextStep()}>(仓管)签字并下发供应部</Button></Col>
        </Row>
        <Modal title="上传采购合同" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            <Form
                {...layout}
                name="basic"
                initialValues={{ remember: true }}
            >
                <Form.Item
                    label="上传"
                    name="password"
                    rules={[{ required: true, message: '请上传文件!' }]}
                >
                    <Upload {...props}>
                        <Button icon={<UploadOutlined />}>上传</Button>
                    </Upload>
                </Form.Item>
            </Form>
        </Modal>
    </>
};
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

export default WarehouseTest;