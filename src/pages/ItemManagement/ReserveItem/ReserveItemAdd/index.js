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
//项目材料
import ItemMaterials from './components/ItemMaterials';
//项目预算
import ItemBudget from './components/ItemBudget'

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
                {/* 项目材料 */}
                <ItemMaterials />
                {/* 项目预算 */}
                <ItemBudget />

                <Title level={3}>其他附件</Title>
                <Row key="7">
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
