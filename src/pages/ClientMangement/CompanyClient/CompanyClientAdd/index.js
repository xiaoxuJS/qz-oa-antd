import React, { useState } from 'react';
import {
    useHistory
} from 'react-router-dom';
import {
    ip
} from '../../../../Api/http';
import BasicMessage from './components/BasicMessage'
import {
    CompanyClientAddAll
} from './style';
import {
    PageHeader,
    Button,
    Form,
    Row,
    Col,
    Upload,
    Typography
} from "antd";
import { UploadOutlined } from '@ant-design/icons';

const { Title } = Typography;


const CompanyClientAdd = () => {
    const history = useHistory();
    const { form } = Form.useForm();
    const [fileList, setFileList] = useState([]); //文件列表
    // const [fileUrl, setFileUrl] = useState([]); //文件地址
    const onFinish = (values) => {
        console.log(values);
    };
    const handleChangeFile = info => {
        let fileList = [...info.fileList];
        fileList = fileList.slice(-3);
        let fileUrls = [];
        fileList = fileList.map(file => {
            if (file.response) {
                file.url = file.response.data;
                if (file.response.code === "20000") {
                    fileUrls.push(file.response.data);
                }
            }
            return file;
        });
        setFileList(fileList);
        // setFileUrl(fileUrls);
    }
    //上传附件
    const props = {
        action: `${ip}/file/upload`,
        multiple: true,
        data: {
            folder: '/clue'
        },
        onChange: handleChangeFile
    };
    return <CompanyClientAddAll>
        <PageHeader
            className="site-page-header"
            title="客户管理-添加客户"
            onBack={() => history.go(-1)}
        ></PageHeader>
        <Form
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            form={form}
        >
            {/* //基本信息 */}
            <BasicMessage />
            <Title level={3}>客户附件</Title>
            <Row key="7">
                <Col span={24}>
                    <Form.Item label="附件" {...span24}>
                        <Upload {...props} fileList={fileList}>
                            <Button icon={<UploadOutlined />}>上传附件</Button>
                        </Upload>
                    </Form.Item>
                </Col>
            </Row>
            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                    提交
                    </Button>
            </Form.Item>
        </Form>
    </CompanyClientAddAll>
}
const span24 = {
    labelCol: { span: 3 },
    wrapperCol: { span: 19 },
};
const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 22, span: 2 },
};
export default CompanyClientAdd;