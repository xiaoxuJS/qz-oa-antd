import React, {useState} from "react";
import { useHistory } from "react-router-dom";
//基本信息模块
import BasicMessage from './components/BasicMessage';
//项目周期模块
import ItemTime from './components/ItemTime';
//项目成员模块
import ItemMember from './components/ItemMember';
//项目奖金
import ItemMoney from './components/ItemMoney';

import { ReserveItemAddAll } from "./style";
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


/**
 * @author 徐博亚
 * @returns 
 */
const ReserveItemAdd = () => {
    const history = new useHistory();
    const [fileList] = useState([
    //   {
    //     uid: "-1",
    //     name: "xxx.png",
    //     status: "done",
    //     url:
    //       "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    //     thumbUrl:
    //       "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    //   },
    //   {
    //     uid: "-2",
    //     name: "yyy.png",
    //     status: "done",
    //   },
    ]);
    // 、、form
    const onFinish = (values) => {
        console.log("Success:", values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };
    return (
        <ReserveItemAddAll>
            <PageHeader
                className="site-page-header"
                title="项目储备-添加项目储备"
                onBack={() => history.go(-1)}
            ></PageHeader>
            <Form
                {...layout}
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                {/* 基本信息 */}
                <BasicMessage />
                {/* 项目周期 */}
                <ItemTime />
                {/* 项目成员 */}
                <ItemMember />
                {/* 项目奖金 */}
                <ItemMoney />
                <Title level={3}>项目材料</Title>
                <Row key="5">
                    <Col span={24}>
                        <Form.Item label="附件" {...span24}>
                            <Upload
                                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                listType="picture"
                                defaultFileList={[...fileList]}
                            >
                                <Button icon={<UploadOutlined />}>Upload</Button>
                                注：文件中需要包含厂家、功能、材料名称、型号规格、单价(含税)、数量、运费、总价、厂家联系方式、配料清单（配料清单）
                            </Upload>
                            {/* <UploadFile onChange={onChange} upTitle="附件上传" /> */}
                        </Form.Item>
                    </Col>
                </Row>
                <Title level={3}>项目预算</Title>
                <Row key="5">
                    <Col span={24}>
                        <Form.Item label="附件" {...span24}>
                            <Upload
                                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                listType="picture"
                                defaultFileList={[...fileList]}
                            >
                                <Button icon={<UploadOutlined />}>Upload</Button>
                                注：  材料费、工时费、相关差旅费、售后服务费、安装调试费、准确率、总计
                            </Upload>
                            {/* <UploadFile onChange={onChange} upTitle="附件上传" /> */}
                        </Form.Item>
                    </Col>
                </Row>
                <Title level={3}>其他附件</Title>
                <Row key="5">
                    <Col span={24}>
                        <Form.Item label="附件" {...span24}>
                            <Upload
                                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                listType="picture"
                                defaultFileList={[...fileList]}
                            >
                                <Button icon={<UploadOutlined />}>Upload</Button>
                                注：  标书、技术文档、现场平面图..
                            </Upload>
                            {/* <UploadFile onChange={onChange} upTitle="附件上传" /> */}
                        </Form.Item>
                    </Col>
                </Row>
                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        提交
                    </Button>
                </Form.Item>
            </Form>
        </ReserveItemAddAll>
    );
};

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

export default ReserveItemAdd;
