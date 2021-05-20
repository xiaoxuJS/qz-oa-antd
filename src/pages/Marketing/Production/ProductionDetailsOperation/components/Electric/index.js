import React, { useState } from 'react';
import { Row, Col, Button, Form, DatePicker, Radio, Select, Upload, message } from "antd";
import { Modal } from 'antd';
import { UploadOutlined, ExclamationCircleOutlined } from '@ant-design/icons';

const { Option } = Select;
const { confirm } = Modal;

const Production = ({ setFlow }) => {
    const [form] = Form.useForm();
    const [formFile] = Form.useForm();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [fileVisible, setFileVisible] = useState(false); //图纸上传、材料表上传
    const hanldeNextStep = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        form.validateFields().then(values => {
            console.log(values);
            setFlow('1');
            setIsModalVisible(false);
        })

    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    //上传
    const fileVisibleFun = () => {
        setFileVisible(true)
    }
    const handleFileOk = () => {
        formFile.validateFields().then(values => {
            console.log(values);
            setFlow('5');
            setFileVisible(false);
        })

    };
    const handleFileCancel = () => {
        setFileVisible(false);
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
    //下发供应科
    const hanldeNextStepSupply = () => {
        confirm({
            title: '您确定要将流程单发往供应部吗?',
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
            {/* 签收的时候指定图纸负责人 */}
            {/* <Col span={3}><Button type='primary' onClick={() => hanldeNextStep()}>（电气智能部）3.签收</Button></Col> */}
            {/* <Col span={3}><Button type='primary' onClick={() => fileVisibleFun()}>4. 图纸上传、材料表上传</Button></Col> */}
            <Col span={3}><Button type='primary' onClick={() => hanldeNextStepSupply()}>5. 下发（供应科）</Button></Col>
        </Row>
        <Modal title="是否确认签收" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            <Form
                {...layout}
                name="basic"
                initialValues={{ remember: true }}
                form={form}
            >
                <Form.Item
                    label="图纸负责人"
                    name="user"
                    rules={[{ required: true, message: '请选择图纸负责人!' }]}
                >
                    <Select>
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>
                        <Option value="Yiminghe">yiminghe</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    label="图纸完成日期"
                    name="username"
                    rules={[{ required: true, message: '请选择图纸完成日期!' }]}
                >
                    <DatePicker />
                </Form.Item>
            </Form>
        </Modal>
        <Modal title="上传" visible={fileVisible} onOk={handleFileOk} onCancel={handleFileCancel}>
            <Form
                {...layout}
                name="basic"
                initialValues={{ remember: true }}
                form={formFile}
            >
                <Form.Item
                    label="上传图纸"
                    name="tuzhi"
                    rules={[{ required: true, message: '请选择图纸负责人!' }]}
                >
                    <Upload {...props}>
                        <Button icon={<UploadOutlined />}>Click to Upload</Button>
                    </Upload>
                </Form.Item>
                <Form.Item
                    label="上传材料表"
                    name="cailiaobiao"
                    rules={[{ required: true, message: '请选择图纸完成日期!' }]}
                >
                                        <Upload {...props}>
                        <Button icon={<UploadOutlined />}>Click to Upload</Button>
                    </Upload>
                </Form.Item>
            </Form>
        </Modal>
    </>
}
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

export default Production;