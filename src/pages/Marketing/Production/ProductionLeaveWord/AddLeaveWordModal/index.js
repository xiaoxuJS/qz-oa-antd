import React, { useEffect, useState, useCallback } from 'react';
import { getSysDepartmentFindList } from '../../../../../Api/listUrl';
import { putSofPlanInsertLeave } from '../../../../../Api/productionUrl'
import {
    message,
    Modal,
    Input,
    Form,
    Select
} from 'antd';

const { TextArea } = Input;
const { Option } = Select;

const AddLeaveWordModal = ({ addLeaveWordModalShow, setAddLeaveWordModalShow, planId, listFun }) => {
    const [form] = Form.useForm();
    const {validateFields, resetFields} = form;
    const [groupList, setGroupList] = useState([]); // 部门下拉列表
    const groupFun = useCallback(() => {
        ; (async () => {
            const { code, msg, data } = await getSysDepartmentFindList();
            if (code === '20000') {
                setGroupList(data);
            } else {
                message.error(msg);
            }
        })();
    }, []);
    useEffect(() => {
        groupFun();
    }, [groupFun]);
    //modal
    const handleOk = () => {
        validateFields().then(values => {
            values.plan = planId;
            console.log(values)
            ;(async () => {
                const {code, msg} = await putSofPlanInsertLeave(values);
                if(code === '20000') {
                    message.success('留言成功！');
                    resetFields();
                    listFun();
                    setAddLeaveWordModalShow(false)
                }else{
                    message.error(msg);
                }
            })();
        })
    }
    const handleCancel = () => {
        resetFields();
        setAddLeaveWordModalShow(false);
    }
    return <Modal title="留言" visible={addLeaveWordModalShow} onOk={handleOk} onCancel={handleCancel}>
        <Form
            {...layout}
            initialValues={{ remember: true }}
            form = {form}
        >
            <Form.Item
                label="留言部门"
                name="acceptDepartment"
                rules={[{ required: true, message: '请选择留言部门!' }]}
            >
                <Select >
                    {
                        groupList.map(item => <Option key={item.id} value={item.id}>
                            {item.name}
                        </Option>)
                    }
                </Select>
            </Form.Item>
            <Form.Item
                label="留言内容"
                name="message"
                rules={[{ required: true, message: '请输入留言内容!' }]}
            >
                <TextArea />
            </Form.Item>
        </Form>
    </Modal>
}

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

export default AddLeaveWordModal;