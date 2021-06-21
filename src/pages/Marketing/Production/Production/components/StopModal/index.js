import React from 'react';
import {postSofPlanSuOrAc} from '../../../../../../Api/productionUrl'
import { Modal, Form, Input, message } from 'antd';

const { TextArea } = Input;

const StopModal = ({ stopModalShow, setStopModalShow, clickStopId, listFun }) => {
    const [form] = Form.useForm();
    const { validateFields, resetFields } = form;
    const handleOk = () => {
        validateFields().then(values => {
            values.businessId = clickStopId;
            values.isSuOrAc = true;
            console.log(values)
            ;(async () => {
                const {code, msg} = await postSofPlanSuOrAc(values);
                if(code === '20000') {
                    listFun();
                    resetFields();
                    message.success('终止成功！');
                    setStopModalShow(false);
                }else{
                    message.error(msg);
                }
            })();
        })
        
    };

    const handleCancel = () => {
        resetFields();
        setStopModalShow(false);
    };
    return <Modal title="终止" visible={stopModalShow} onOk={handleOk} onCancel={handleCancel}>
        <Form
            {...layout}
            name="basic"
            form={form}
        >
            <Form.Item
                label="终止原因"
                name="suspend"
                rules={[
                    {
                        required: true,
                        message: '请输入终止原因!',
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="备注"
                name="remark"
            >
                <TextArea/>
            </Form.Item>
        </Form>
    </Modal>
}
const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};

export default StopModal;