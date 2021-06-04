import React, { useState, useEffect, useCallback } from 'react';
import {
    getSofClientFindDropClient,
    getSysUserFindDropUser
} from '../../../../../../Api/listUrl';
import {
    sysUploadUrl
} from '../../../../../../Api/fileUrl';
import {
    putSofPlanInsertPlan
} from '../../../../../../Api/productionUrl'
import {
    Modal, Form, Input, Select, DatePicker, Upload, message, Button
} from 'antd';
import moment from 'moment';
import { UploadOutlined } from '@ant-design/icons';
const { Option } = Select;

const ProductionAdd = ({ productionAddShow, productionAddFun }) => {
    const [form] = Form.useForm();
    const [clientList, setClientList] = useState([]); // 客户下拉
    const [userList, setUserList] = useState([]); // 用户下拉
    const clientFun = useCallback( //获取客户列表
        () => {
            ; (async () => {
                const { code, msg, data } = await getSofClientFindDropClient();
                if (code === '20000') {
                    setClientList(data);
                } else {
                    message.error(msg);
                }
            })();
        },
        [],
    )
    const userFun = useCallback(
        () => {
            ; (async () => {
                const { code, msg, data } = await getSysUserFindDropUser();
                if (code === '20000') {
                    setUserList(data);
                } else {
                    message.error(msg);
                }
            })();
        },
        [],
    )
    useEffect(() => {
        clientFun();
        userFun();
    }, [clientFun, userFun])
    const {
        // setFieldsValue, 
        validateFields } = form;

    const handleOk = () => {
        validateFields().then(values => {
            let arr = [];
            values.url.fileList.forEach(element => {
                arr.push(element.response.data)
            });
            values.url = arr;
            values.deliveryDate = moment(values.deliveryDate).format('YYYY-MM-DD')
            ;(async () => {
                const {code, msg } = await putSofPlanInsertPlan(values);
                if(code === '20000') {
                    message.success('添加成功！');
                    productionAddFun(false);
                }else{
                    message.error(msg);
                }
            })();
            console.log(values)
        })
    };

    const handleCancel = () => {
        productionAddFun(false);
    };
    //上传
    const props = {
        name: 'file',
        action: sysUploadUrl(),
        headers: {
            authentication: localStorage.getItem("token")
        },
        data:{ folder: '/contract' },
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
    return <Modal title="添加生产计划" visible={productionAddShow} onOk={handleOk} onCancel={handleCancel}>
        <Form
            {...layout}
            initialValues={{ remember: true }}
            form={form}
        >
            <Form.Item
                label="客户"
                name="client"
                rules={[{ required: true, message: '请输入客户名称!' }]}
            >
                <Select>
                    {
                        clientList.map(item => <Option key={item.id} value={item.id}>{item.clientName}</Option>)
                    }
                </Select>
            </Form.Item>
            <Form.Item
                label="合同编号"
                name="contractNo"
                rules={[{ required: true, message: '请输入合同编号!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="合同总价"
                name="contractPrice"
                rules={[{ required: true, message: '请输入合同总价!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="预计交货日期"
                name="deliveryDate"
                rules={[{ required: true, message: '请选择预计交货日期!' }]}
            >
                <DatePicker style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item
                label="产品型号"
                name="model"
                rules={[{ required: true, message: '请输入产品型号!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="企业性质及评估"
                name="type"
                rules={[{ required: true, message: '企业性质及评估!' }]}
            >
                {/* 0:国有企业,1:联营企业,2:三资企业,4:私营企业 */}
                <Select>
                    <Option value="0">国有企业</Option>
                    <Option value="1">联营企业</Option>
                    <Option value="2">三资企业</Option>
                    <Option value="4">私营企业</Option>
                </Select>
            </Form.Item>
            <Form.Item
                label="订单数量"
                name="orderSize"
                rules={[{ required: true, message: '请输入订单数量!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="销售人员"
                name="sell"
            >
                <Select>
                    {
                        userList.map(item => <Option key={item.id} value={item.id}>{item.name}</Option>)
                    }
                </Select>
            </Form.Item>
            <Form.Item
                label="上传合同"
                name="url"
                rules={[{ required: true, message: '请选择下发日期!' }]}
            >
                <Upload {...props}>
                    <Button icon={<UploadOutlined />}>请上传合同</Button>
                </Upload>
            </Form.Item>
        </Form>
    </Modal>
}

const layout = {
    labelCol: {
        span: 6,
    },
    wrapperCol: {
        span: 16,
    },
};

export default ProductionAdd;