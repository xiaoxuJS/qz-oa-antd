import React, { useState } from 'react';
import { Row, Col, Button, Form, DatePicker, Radio, Select, Upload, message } from "antd";
import { Modal } from 'antd';
import { UploadOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
const { Option } = Select;

const { confirm } = Modal;


const Skill = ({ setFlow }) => {
    const [formFile] = Form.useForm();
    const [form] = Form.useForm();
    const [formQualified] = Form.useForm();

    const [isModalVisible, setIsModalVisible] = useState(false); //签收弹框是否显示
    const [fileVisible, setFileVisible] = useState(false); //图纸上传、材料表上传
    const [qualifiedVisible, setQualifiedVisible] = useState(false); //图纸上传、材料表上传
    //签收
    const hanldeNextStep = () => {
        setIsModalVisible(true);
    };
    const handleOk = () => {
        form.validateFields().then(values => {
            console.log(values);
            setFlow('4');
            setIsModalVisible(false);
        })

    };
    const handleCancel = () => {
        setIsModalVisible(false);
    };
    //下发智能部
    const hanldeNextStepElectric = () => {
        confirm({
            title: '您确定要将流程单下发给电气智能部门吗?',
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
    //质检
    const qualifiedVisibleFun = () => {
        setQualifiedVisible(true)
    }
    return <>
        <Row>
            {/* 签收的时候判断是否有智能部 */}
            {/* <Col span={3}><Button type='primary' onClick={() => hanldeNextStep()}>（技术部）2.签收</Button></Col> */}
            {/* <Col span={3}><Button type='primary' onClick={() => hanldeNextStepElectric()}>（技术部）2.1下发（智能部）</Button></Col> */}
            {/* <Col span={3}><Button type='primary' onClick={() => fileVisibleFun()}>4 图纸上传、材料表上传</Button></Col> */}
                        <Col span={3}><Button type='primary' onClick={() => hanldeNextStep()}>8. （技术部）下发（营销中心）</Button></Col>
            {/* <Col span={3}><Button type='primary' onClick={() => hanldeNextStep()}>5. （技术部）下发（供应科）</Button></Col> */}

            <Col span={3}><Button type='primary' onClick={() => qualifiedVisibleFun()}>11. （技术部）质检（营销部）</Button></Col>
        </Row>
        {/* 签收 */}
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
                <Form.Item
                    label="是否需要智能部出图纸"
                    name="dd"
                    rules={[{ required: true, message: '请选择!' }]}
                >
                    <Radio.Group>
                        <Radio value={1}>需要</Radio>
                        <Radio value={2}>不需要</Radio>
                    </Radio.Group>
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
        <Modal title="质检" visible={qualifiedVisible} onOk={handleFileOk} onCancel={handleFileCancel}>
            <Form
                {...layout}
                name="basic"
                initialValues={{ remember: true }}
                form={formQualified}
            >
                <Form.Item
                    label="检测是否合格"
                    name="dd"
                    rules={[{ required: true, message: '请选择!' }]}
                >
                    <Radio.Group>
                        <Radio value={1}>是</Radio>
                        <Radio value={2}>否</Radio>
                    </Radio.Group>
                </Form.Item>
            </Form>
        </Modal>
    </>
}
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

export default Skill;