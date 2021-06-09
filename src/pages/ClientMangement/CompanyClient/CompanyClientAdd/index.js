import React, {useEffect, useState} from 'react';
import {
    useHistory,
    useLocation
} from 'react-router-dom';
import {
    sysUploadUrl
} from '../../../../Api/fileUrl';
import {
    putSofClientInsertClient,
    getSofClientEchoClient,
    postSofClientUpdateClient
} from '../../../../Api/clientUrl'
import BasicMessage from './components/BasicMessage';
import {
    CompanyClientAddAll
} from './style';
import {
    PageHeader,
    Button,
    Form,
    Upload,
    Typography,
    message
} from "antd";
import { UploadOutlined } from '@ant-design/icons';

const { Title } = Typography;


const CompanyClientAdd = () => {
    const history = new useHistory();
    const location = new useLocation();
    const  [form]  = Form.useForm();
    const {setFieldsValue} = form;
    const [fileList , setFileList ] = useState([]);
    useEffect(() => {
        if(location.state.clientId) {
            ;(async () => {
                const {code, msg, data} = await getSofClientEchoClient({clientId: location.state.clientId});
                if(code === '20000') {
                    let arr = []
                    data.files.forEach(element => {
                        arr.push(    {
                            uid: element.path,
                            name: element.fileName,
                            status: 'done',
                            url: element.path,
                          },)
                    });
                    setFileList(arr);
                    delete data.paths;
                    setFieldsValue(data);
                }else{
                    message.error(msg);
                }
            })();
        }
    }, [location.state, setFieldsValue])
    const onFinish = (values) => {
        
        if (values.paths) {
            const arrayImgUrl = [];
            values.paths.fileList.forEach(element => {
                arrayImgUrl.push(element.url);
            });
            values.paths = arrayImgUrl;
        }
        if(!values.paths && fileList.length > 0) {
            const arrayImgUrl = [];
            fileList.forEach(element => {
                arrayImgUrl.push(element.url);
            });
            values.paths = arrayImgUrl;
        }
        console.log(values)
        if(location.state.clientId) {
            values.id = location.state.clientId
            ;(async () => {
                const {code, msg} = await postSofClientUpdateClient(values);
                if(code === '20000') {
                    message.success('修改成功！');
                    history.go('-1');
                }else{
                    message.error(msg);
                }
            })();

        }else{
            ;(async () => {
                const {code, msg} = await putSofClientInsertClient(values);
                if(code === '20000') {
                    message.success('新增成功！');
                    history.go('-1');
                }else{
                    message.error(msg);
                }
            })();
        }

    };
    //上传附件
    const props = {
        name: 'file',
        action: sysUploadUrl(),
        fileList:fileList,
        headers: {
            authentication: localStorage.getItem("token")
        },
        data: {
            folder: '/client'
        },
        onChange(info) {
            let fileList = [...info.fileList];
            fileList = fileList.slice(-3);
            fileList = fileList.map(file => {
              if (file.response) {
                file.url = file.response.data;
              }
              return file;
            });
            setFileList(fileList);
        },
    };
    return <CompanyClientAddAll>
        <PageHeader
            className="site-page-header"
            title={`客户管理-${location.state.clientId ? "修改": "添加"}客户`}
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
            <Form.Item 
                label="附件"
                name="paths" {...span24}>
                <Upload {...props}>
                    <Button icon={<UploadOutlined />}>上传附件</Button>
                </Upload>
            </Form.Item>
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