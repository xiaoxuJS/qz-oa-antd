import React from 'react';
import { 
    Modal,Form, Input, Select, DatePicker
} from 'antd';

const { Option } = Select;

const ProductionAdd = ({ productionAddShow, productionAddFun }) => {
    const [form] = Form.useForm();
    const {
        // setFieldsValue, 
        validateFields} = form;

    const handleOk = () => {
        validateFields().then(values => {
            console.log(values)
        })
    };

    const handleCancel = () => {
        productionAddFun(false);
    };

    //from
    const onFinish = (values) => {
        console.log('Success:', values);
    };
    return <Modal title="添加生产计划" visible={productionAddShow} onOk={handleOk} onCancel={handleCancel}>
        <Form
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            form = {form}
        >
            <Form.Item
                label="客户名称"
                name="username"
                rules={[{ required: true, message: '请输入客户名称!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="企业性质及评估"
                name="type"
                rules={[{ required: true, message: '企业性质及评估!' }]}
            >
                <Select defaultValue="lucy" >
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="Yiminghe">yiminghe</Option>
                </Select>
            </Form.Item>
            <Form.Item
                label="合同编号"
                name="num"
                rules={[{ required: true, message: '请输入合同编号!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="销售人员"
                name="user"
            >
                <Select defaultValue="lucy" >
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="Yiminghe">yiminghe</Option>
                </Select>
            </Form.Item>
            <Form.Item
                label="产品型号"
                name="xinghao"
                rules={[{ required: true, message: '请输入产品型号!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="订单数量"
                name="dingdanshuliang"
                rules={[{ required: true, message: '请输入订单数量!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="合同总价"
                name="hetongzongjia"
                rules={[{ required: true, message: '请输入合同总价!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="交货日期"
                name="jiaohuoriqi"
                rules={[{ required: true, message: '请选择交货日期!' }]}
            >
                <DatePicker style = {{width: '100%'}}/>
            </Form.Item>
            <Form.Item
                label="下发日期"
                name="xiafariqi"
                rules={[{ required: true, message: '请选择下发日期!' }]}
            >
                <DatePicker style = {{width: '100%'}}/>
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