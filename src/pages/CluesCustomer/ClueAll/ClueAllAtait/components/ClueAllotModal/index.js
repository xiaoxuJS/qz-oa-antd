import React, { useEffect, useState, useCallback } from "react";
import {
    getSysUserFindDropUser
} from '../../../../../../Api/listUrl';
import {
    getSofClueDistributionClue
} from '../../../../../../Api/cluesUrl'
import { Modal, Form, Input, Select, message } from "antd";
const { Option } = Select;

/**
 * @author 徐博亚
 * @param {bool} showHide(控制当前组件是否显示)
 * @param {Fun} handleClueAllotModalShow(控制当前组件是否显示的函数)
 */
const ClueAllotModal = ({ showHide, handleClueAllotModalShow, fenpeiClickData, listFun, setClickId, clickId }) => {
    const [form] = Form.useForm();
    const { resetFields, validateFields, setFieldsValue } = form;
    const [userList, setUserList] = useState([]);
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
        userFun();
    }, [userFun])
    const handleClueAllotModalOk = () => {
        validateFields().then((values) => {
            values.clueId = clickId;
            delete values.username;
            ; (async () => {
                const { code, msg } = await getSofClueDistributionClue(values);
                if (code === '20000') {
                    listFun();
                    message.success('分配成功！')
                    resetFields();
                    setClickId(null);
                    handleClueAllotModalShow(false)
                } else {
                    message.error(msg);
                }
            })();
        })

    };
    const handleCancel = () => {
        resetFields();
        handleClueAllotModalShow(false)
    };

    useEffect(() => {
        if (fenpeiClickData) {
            setFieldsValue(fenpeiClickData)
        }
    }, [showHide, fenpeiClickData, setFieldsValue])
    return (
        <Modal
            title="分配线索"
            visible={showHide}
            onOk={handleClueAllotModalOk}
            onCancel={handleCancel}
        >
            <Form
                {...layout}
                initialValues={{ remember: true }}
                form={form}
            >
                <Form.Item
                    label="客户名称"
                    name="username"
                >
                    <Input disabled />
                </Form.Item>
                <Form.Item
                    label="项目经理"
                    name="userId"
                >
                    <Select>
                        {
                            userList.map(item => <Option key={item.id} value={item.id}>{item.name}</Option>)
                        }
                    </Select>
                </Form.Item>
            </Form>
        </Modal>
    );
};

const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 16 },
};
export default ClueAllotModal;
