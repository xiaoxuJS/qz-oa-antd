import React, { useState, useEffect, useCallback } from 'react';
import {
    getSysDepartmentFindList
} from '../../../../../Api/listUrl';
import {
    sysUploadUrl
} from '../../../../../Api/fileUrl';
import {
    getSysUserUpdMaterial,
    postSysUserUpdMaterial
} from '../../../../../Api/userUrl'
import {
    Modal,
    Input,
    Form,
    message,
    Select,
    Upload,
    Radio
} from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
const { Option } = Select;

const ChangeModal = ({ changeModal, setChangeModal, changeClickId, setChangeClickId, addUserIslist }) => {
    const [form] = Form.useForm();
    const { setFieldsValue, validateFields } = form;
    const [groupList, setGroupList] = useState([]); // 部门list
    //头像
    const [imageUrl, setImageUrl] = useState(null);
    const [loading, setLoading] = useState(false);
    //获取部门list
    const groupFun = useCallback(
        () => {
            ; (async () => {
                const { code, msg, data } = await getSysDepartmentFindList();
                if (code === '20000') {
                    setGroupList(data);
                } else {
                    message.error(msg);
                }
            })()
        },
        [],
    )
    //获取个人修改回显
    const personalFun = useCallback(
        () => {
            if (changeClickId) {
                ; (async () => {
                    const { code, msg, data } = await getSysUserUpdMaterial({ id: changeClickId });
                    if (code === '20000') {
                        setImageUrl(data.headImg);
                        setFieldsValue(data);
                    } else {
                        message.error(msg);
                    }
                })();
            }

        },
        [changeClickId, setFieldsValue],
    )
    useEffect(() => {
        groupFun();
        personalFun();
    }, [groupFun, personalFun])
    const handleOk = () => {
        validateFields().then(values => {
            if (values.headImg) {
                if (typeof values.headImg !== 'string') {
                    values.headImg = values.headImg.file.response.data;
                }
            }
            values.id = changeClickId;
            ;(async () => {
                const {code, msg} = await postSysUserUpdMaterial(values);
                if(code === '20000') {
                    message.success('修改完成')
                    setImageUrl(null);
                    setChangeClickId(null);
                    addUserIslist();
                    setChangeModal(false);
                }else{
                    message.error(msg);
                }
            })();
        });
    };

    const handleCancel = () => {
        setChangeClickId(null);
        setChangeModal(false);
    };
    const getBase64 = (img, callback) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    }
    //上传头像
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
    //上传头像限制
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
    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    );
    return <Modal title="修改信息" visible={changeModal} onOk={handleOk} onCancel={handleCancel}>
        <Form
            {...layout}
            initialValues={{ remember: true }}
            form={form}
        >
            <Form.Item
                label="头像"
                name="headImg"
            >
                <Upload
                    listType="picture-card"
                    className="avatar-uploader"
                    showUploadList={false}
                    action={sysUploadUrl()}
                    beforeUpload={beforeUpload}
                    headers={
                        { authentication: localStorage.getItem("token") }
                    }
                    onChange={handleChange}
                    data={{ folder: '/head' }}
                >
                    {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                </Upload>
            </Form.Item>
            <Form.Item
                label="部门"
                name="department"
                rules={[{ required: true, message: '请选择部门!' }]}
            >
                <Select>
                    {
                        groupList.map(item => <Option value={item.id} key={item.id}>{item.name}</Option>)
                    }
                </Select>
            </Form.Item>
            <Form.Item
                label="用户名"
                name="username"
                rules={[{ required: true, message: '请输入用户名!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="姓名"
                name="name"
                rules={[{ required: true, message: '请输入姓名!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="邮箱"
                name="email"
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="性别"
                name="gender"
            >
                <Radio.Group>
                    <Radio value={0}>女</Radio>
                    <Radio value={1}>男</Radio>
                </Radio.Group>
            </Form.Item>
            <Form.Item
                label="是否通知"
                name="isNotice"
            >
                <Radio.Group>
                    <Radio value={0}>开启</Radio>
                    <Radio value={1}>关闭</Radio>
                </Radio.Group>
            </Form.Item>
        </Form>
    </Modal>
}
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

export default ChangeModal;