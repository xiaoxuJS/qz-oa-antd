import React, { useEffect, useCallback, useState } from 'react';
import {
    getSysUserFindDropUser
} from '../../../../../Api/listUrl';
import {
    postSysDepartmentUpdateDepartment
} from '../../../../../Api/setUrl'
import {
    Modal,
    Form,
    message,
    Select
} from 'antd';

const { Option } = Select;

const ChangeModal = ({ setAddModalShow, addModalShow, clickCode, setClickCode , listFun}) => {
    const [form] = Form.useForm();
    const { validateFields, resetFields } = form;
    const [userList, setUserList] = useState([]);

    //用户列表
    const userListFun = useCallback(
        () => {
            ; (async () => {
                const { code, msg, data } = await getSysUserFindDropUser();
                if (code === '20000') {
                    setUserList(data)
                } else {
                    message.error(msg);
                }
            })()
        },
        [],
    )
    useEffect(() => {
        userListFun();
    }, [ userListFun])

    const handleOk = () => {
        validateFields().then(values => {
            values.code = clickCode;
            ; (async () => {
                const { code, msg } = await postSysDepartmentUpdateDepartment(values);
                if (code === '20000') {
                    message.success('修改成功！');
                    resetFields();
                    setClickCode(null);
                    listFun();
                    setAddModalShow(false);
                } else {
                    message.error(msg);
                }
            })();
        })
    };

    const handleCancel = () => {
        resetFields();
        setClickCode(null);
        setAddModalShow(false);
    };

    return <Modal title="修改部门主管" visible={addModalShow} onOk={handleOk} onCancel={handleCancel}>
        <Form
            {...layout}
            initialValues={{ remember: true }}
            form={form}
        >
            <Form.Item
                label="部门主管"
                name="competent"
            >
                <Select>
                    {
                        userList.map(item => <Option value={item.id}>{item.name}</Option>)
                    }
                </Select>
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

export default ChangeModal;