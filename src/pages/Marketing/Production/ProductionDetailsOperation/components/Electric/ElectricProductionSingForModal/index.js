import React, { useState } from 'react';
import {
    useHistory
} from 'react-router-dom';
import {
    putSofPlanDetailSignTask
} from '../../../../../../../Api/productionUrl';
import {
    Modal,
    Form,
    Radio,
    message,
    DatePicker
} from 'antd';
import moment from 'moment';

const ElectricProductionSingForModal = ({ electricProductionSingForModalShow, setElectricProductionSingForModalShow, taskId, id, taskName }) => {
    const [form] = Form.useForm();
    const { validateFields, resetFields } = form;
    const history = new useHistory();
    const [confirmLoading, setConfirmLoading] = useState(false)
    const handleOk = () => {
        
        validateFields().then(values => {
            setConfirmLoading(true)
            if (values.url) {
                const arrayImgUrl = [];
                values.url.fileList.forEach(element => {
                    arrayImgUrl.push(element.response.data);
                });
                values.url = arrayImgUrl;
            }
            values.id = id;
            values.taskId = taskId;
            values.nape = 7;
            values.taskName = taskName;
            values.targetDate = moment(values.targetDate).format('YYYY-MM-DD');
            ; (async () => {
                const { code, msg } = await putSofPlanDetailSignTask(values);
                if (code === '20000') {
                    message.success('签收成功！');
                    resetFields();
                    setConfirmLoading(false)
                    history.go('-1');
                } else {
                    message.error(msg);
                }
            })();
        })
    };

    const handleCancel = () => {
        resetFields();
        setConfirmLoading(false)
        setElectricProductionSingForModalShow(false);
    };

    return <Modal title="签收" visible={electricProductionSingForModalShow} onOk={handleOk} onCancel={handleCancel} confirmLoading={confirmLoading}>
        <Form
            {...layout}
            initialValues={{ remember: true }}
            form={form}
        >
            <Form.Item
                label="是否签收"
                name="isSignMake"
                rules={[{ required: true, message: '请选择是否签收!' }]}
            >
                <Radio.Group>
                    <Radio value={true}>是</Radio>
                    <Radio value={false}>否</Radio>
                </Radio.Group>
            </Form.Item>
            <Form.Item
                label="预计完成时间"
                name="targetDate"
                rules={[{ required: true, message: '请选择预计完成时间!' }]}
            >
                <DatePicker />
            </Form.Item>
        </Form>
    </Modal>
}
const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18 },
};

export default ElectricProductionSingForModal;