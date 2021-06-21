import React from 'react';
import { postSofPlanExecuteApprove } from '../../../../../Api/productionUrl'
import { Modal, Form, Radio, message } from 'antd';

const ExamineAndApproveModal = ({ examineAndApproveModalShow, setExamineAndApproveModalShow, clickTaskId, clickId, listFun }) => {
    const [form] = Form.useForm();
    const { validateFields, resetFields } = form;
    const handleOk = () => {
        validateFields().then(values => {
            values.id = clickId;
            values.taskId = clickTaskId;
            ; (async () => {
                const { code, msg } = await postSofPlanExecuteApprove(values);
                if (code === '20000') {
                    listFun();
                    resetFields();
                    message.success('审批完成！');
                    setExamineAndApproveModalShow(false);
                } else {
                    message.error(msg);
                }
            })();
        })

    };

    const handleCancel = () => {
        resetFields();
        setExamineAndApproveModalShow(false);
    };
    return <Modal title="审批" visible={examineAndApproveModalShow} onOk={handleOk} onCancel={handleCancel}>
        <Form
            {...layout}
            form={form}
        >
            <Form.Item
                label="审批"
                name="isApprove"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Radio.Group>
                    <Radio value={1}>通过</Radio>
                    <Radio value={0}>不通过</Radio>
                </Radio.Group>
            </Form.Item>
        </Form>
    </Modal>
}

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

export default ExamineAndApproveModal;