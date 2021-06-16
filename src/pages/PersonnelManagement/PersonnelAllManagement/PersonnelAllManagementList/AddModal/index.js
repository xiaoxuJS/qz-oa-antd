import React, { useState } from 'react';
import {
    sysManuallyUrl
} from '../../../../../Api/fileUrl';
// import {
//     getSysGetCode
// } from '../../../../../Api/loginUrl';
import {
    putSysUserRegisterUser
} from '../../../../../Api/userUrl'
import {
    Modal,
    Form,
    Input,
    Radio,
    Upload,
    message
} from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';

const AddModal = ({ addGroupModalShow, setAddGroupModalShow, addGroupId, addUserIslist }) => {
    const [form] = Form.useForm();
    const { validateFields, resetFields } = form;
    const [imageUrl, setImageUrl] = useState(null);
    const [loading, setLoading] = useState(false);
    // const [timeValue, setTimeValue] = useState(2); //验证码即时
    // const [authCode, setAuthCode] = useState(true); //验证码按钮样式
    // const [mobile, setMobile] = useState(null) //电话号码
    // const [identification, setIdentification] = useState(null); //验证码标识
    const handleOk = () => {
        validateFields().then(values => {
            values.manuallyUid = values.manually.file.response.data
            delete values.manually;
            // values.mark = identification;
            values.department = addGroupId;
            ; (async () => {
                const { code, msg } = await putSysUserRegisterUser(values);
                if (code === '20000') {
                    resetFields();
                    setImageUrl(null);
                    setAddGroupModalShow(false);
                    addUserIslist();
                } else {
                    message.error(msg);
                }
            })();

        })
    };

    const handleCancel = () => {
        resetFields();
        setImageUrl(null);
        setAddGroupModalShow(false);
    };

    // //发送验证码
    // const handleAuthCodeFun = () => {
    //     if (!mobile) {
    //         message.error('请输入手机号');
    //         return;
    //     }
    //     setAuthCode(false);
    //     ; (async () => {
    //         const { code, msg, data } = await getSysGetCode({ mobile });
    //         if (code === '20000') {
    //             setIdentification(data);
    //             let timer = setInterval(() => {
    //                 setTimeValue(timeValue => {
    //                     if (timeValue <= 0) {
    //                         clearInterval(timer);
    //                         setAuthCode(true);
    //                         setTimeValue(60);
    //                     } else {
    //                         return timeValue - 1
    //                     }

    //                 })
    //             }, 1000);
    //         } else {
    //             message.error(msg);
    //         }
    //     })();
    // }
    //上传处理
    const beforeUpload = (file) => {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
            message.error('You can only upload JPG/PNG file!');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            message.error('Image must smaller than 2MB!');
        }
        return isJpgOrPng && isLt2M;
    }
    const handleChange = info => {
        if (info.file.status === 'uploading') {
            setLoading(true)
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, imageUrl => {
                setImageUrl(imageUrl)
                setLoading(false)
            }
            );
        }
    };
    const getBase64 = (img, callback) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    }
    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    );
    return <Modal title="添加组成员" visible={addGroupModalShow} onOk={handleOk} onCancel={handleCancel}>
        <Form
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
            form={form}
        >
            <Form.Item
                label="签名"
                name="manually"
            >
                <Upload
                    listType="picture-card"
                    className="avatar-uploader"
                    showUploadList={false}
                    action={sysManuallyUrl()}
                    beforeUpload={beforeUpload}
                    headers={
                        { authentication: localStorage.getItem("token") }
                    }
                    onChange={handleChange}
                >
                    {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                </Upload>
            </Form.Item>
            <Form.Item
                label="姓名"
                name="name"
                rules={[{ required: true, message: '请输入姓名!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="用户名"
                name="username"
                rules={[{ required: true, message: '请输入用户名!' }]}
            >
                <Input />
            </Form.Item>
            {/* <Form.Item
                label="手机号"
                name="mobile"
                rules={[{ required: true, message: '请输入手机号!' }]}
            >
                <Input value={mobile} onChange={(e) => setMobile(e.target.value)} />
            </Form.Item>
            <Form.Item
                label="验证码"
                name="code"
                rules={[{ required: true, message: '请输入验证码!' }]}
            >
                <Row>
                    <Col span={12}><Input /></Col>
                    <Col span={1}></Col>
                    <Col span={11}>
                        {
                            authCode ? <Button style={{ width: '100%' }} type="primary" onClick={() => handleAuthCodeFun()}>
                                获取验证码
                            </Button> : <Button type="primary" disabled >
                                {timeValue}s后重新发送
                            </Button>
                        }
                    </Col>
                </Row>
            </Form.Item> */}
            <Form.Item
                label="密码"
                name="password"
                rules={[{ required: true, message: '请输入密码!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="是否开启推送"
                name="isNotice"
            >
                <Radio.Group>
                    <Radio value={0}>开启</Radio>
                    <Radio value={1}>关闭</Radio>
                </Radio.Group>
            </Form.Item>
            <Form.Item
                label="邮箱"
                name="email"
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="微信"
                name="weChat"
            >
                <Input />
            </Form.Item>

        </Form>
    </Modal>
}
const layout = {
    labelCol: {
        span: 6,
    },
    wrapperCol: {
        span: 18,
    },
};

export default AddModal;