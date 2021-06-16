import React, {useState} from 'react';
import {
    useHistory
} from 'react-router-dom'
import {
    sysUploadUrl
} from '../../../../../../../Api/fileUrl';
import {
    postSofPlanDetailCompleteTask
} from '../../../../../../../Api/productionUrl'
import {
    Modal,
    Form,
    Input,
    Radio,
    message,
    Upload,
    Button
} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
const { TextArea } = Input;

const IssueSkillModal = ({ issueSkillModalShow, setIssueSkillModalShow, taskId , id}) => {
    const [form] = Form.useForm();
    const { validateFields, resetFields } = form;
    const history = new useHistory();
    const [confirmLoading, setConfirmLoading] = useState(false);
    const handleOk = () => {
        validateFields().then(values => {
            setConfirmLoading(true)
            values.id = id;
            values.taskId = taskId;
            values.nape  = 2;
            const arrayImgUrl = [];
            if(values.url) {
                values.url.fileList.forEach(element => {
                    arrayImgUrl.push(element.response.data);
                });
                values.url = arrayImgUrl;
            }

            console.log(values)
            ;(async () => {
                const {code, msg} = await postSofPlanDetailCompleteTask(values);
                if(code === '20000') {
                    message.success('下发成功！');
                    resetFields();
                    history.go('-1');
                }else{
                    setConfirmLoading(true)
                    message.error(msg);
                }
            })();
        })
        // setOneIssonShow(false);
    };

    const handleCancel = () => {
        resetFields();
        setIssueSkillModalShow(false);
    };
    //文件上传
    const props = {
        name: 'file',
        action: sysUploadUrl(),
        headers: {
            authentication:localStorage.getItem("token")
        },
        data: {
            folder: '/plan'
        },
        onChange(info) {
          if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
          }
          if (info.file.status === 'done') {
            message.success(`${info.file.name} 上传成功`);
          } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
          }
        },
      };
    return <Modal title="技术部下发" visible={issueSkillModalShow} onOk={handleOk} onCancel={handleCancel} confirmLoading = {confirmLoading}>
        <Form
            {...layout}
            initialValues={{ remember: true }}
            form={form}
        >
            <Form.Item
                label="是否需要智能部"
                name="isNeed"
                rules={[{ required: true, message: '请选择是否需要智能部!' }]}
            >
                <Radio.Group>
                    <Radio value={true}>是</Radio>
                    <Radio value={false}>否</Radio>
                </Radio.Group>
            </Form.Item>
            <Form.Item
                label="批注"
                name="comment"
            >
                <TextArea rows={4} />
            </Form.Item>
            <Form.Item
                label="附件"
                name="url"
            >
                <Upload {...props}>
                    <Button icon={<UploadOutlined />}>上传附件</Button>
                </Upload>
            </Form.Item>
        </Form>
    </Modal>
}
const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18 },
};

export default IssueSkillModal;