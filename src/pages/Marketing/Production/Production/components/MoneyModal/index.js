import React, { useState, useEffect, useCallback } from 'react';
import { putSofPlanFundInsertFund } from '../../../../../../Api/productionUrl';
import { getSysMarkFindMark } from '../../../../../../Api/communalUrl';
import moment from 'moment';
import { Modal, Form, InputNumber, message, Select, DatePicker } from 'antd';
const { Option } = Select;

const MoneyModal = ({ moneyModalShow, setMoneyModalShow, clickId, listFun }) => {
    const [form] = Form.useForm();
    const { validateFields, resetFields } = form;
    const [moneyType, setMoneyType] = useState([]);
    const moneyFun = useCallback(
        () => {
            ; (async () => {
                const { code, msg, data } = await getSysMarkFindMark({ typeCode: 'HKLX' });
                if (code === '20000') {
                    setMoneyType(data);
                } else {
                    message.error(msg);
                }
            })();
        },
        [],
    );
    useEffect(() => {
        moneyFun();
    }, [moneyFun]);
    const handleOk = () => {
        validateFields().then(values => {
            values.plan = clickId;
            values.accountingDate = moment(values.accountingDate).format('YYYY-MM-DD');
            ; (async () => {
                const { code, msg } = await putSofPlanFundInsertFund(values);
                if (code === '20000') {
                    listFun();
                    resetFields();
                    message.success('提交成功！');
                    setMoneyModalShow(false);
                } else {
                    message.error(msg);
                }
            })();
        })

    };

    const handleCancel = () => {
        resetFields();
        setMoneyModalShow(false);
    };
    return <Modal title="终止" visible={moneyModalShow} onOk={handleOk} onCancel={handleCancel}>
        <Form
            {...layout}
            name="basic"
            form={form}
        >
            <Form.Item
                label="款项性质"
                name="moneyType"
                rules={[{ required: true, message: '请选择款项性质!', },
                ]}
            >
                <Select>
                    {
                        moneyType.map(item => <Option key={item.id} value={item.markValue}>{item.markName}</Option>)
                    }
                </Select>
            </Form.Item>
            <Form.Item
                label="到账金额"
                name="money"
                rules={[
                    {
                        required: true,
                        message: '请输入到账金额!',
                    },
                ]}
            >
                <InputNumber />
            </Form.Item>
            <Form.Item
                label="到账日期"
                name="accountingDate"
            >
                <DatePicker />
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

export default MoneyModal;