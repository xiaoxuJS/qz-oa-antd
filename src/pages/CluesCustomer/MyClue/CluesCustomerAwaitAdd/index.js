import React, { useState, useEffect, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { ip } from '../../../../Api/http'
//获取公用方法
import {
  preProcessData
} from '../../../../assets/comFun'
//api
import {
  getSysMarkFindMark,
  getSysUserFindDropUser
} from '../../../../Api/communalUrl'
import {
  putSofClueInsertClue,
  getSofClueFindDetailClue,
  postSofClueUpdateClue
} from '../../../../Api/userUrl'
import { CluesCustomerAwaitAddAll } from "./style";
import moment from 'moment';
import {
  PageHeader,
  Button,
  Form,
  Input,
  Select,
  Row,
  Col,
  DatePicker,
  message
} from "antd";
import { Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const { Option } = Select;
const { RangePicker } = DatePicker;

const CluesCustomerAwaitAdd = () => {
  const history = new useHistory();
  const [form] = Form.useForm();
  const { setFieldsValue } = form;
  const [deployType, setDeployType] = useState([]); //部署类型
  const [source, setSource] = useState([]); //来源
  const [fileList, setFileList] = useState([]);//上传文件列表
  const [fileUrl, setFileUrl] = useState(null); //上传文件的文件名
  const [sessionMyClueId, setSessionMyClueId] = useState(null); //线索id
  const [userList, setUserList] = useState([]); //用户数据

  const getSysMarkFindMarkFun = useCallback((type) => {
    const val = {
      typeCode: type
    }
    if (type === "DEPLOY") { //部署类型
      ; (async () => {
        const { code, data } = await getSysMarkFindMark(val);
        if (code) {
          setDeployType(data)
        }
      })();
    } else if (type === "RESOURCE") { //线索来源
      ; (async () => {
        const { code, data } = await getSysMarkFindMark(val);
        if (code) {
          setSource(data)
        }
      })();
    }
  }, [])
  //获取用户下拉框
  const getUserList = useCallback(() => {
    ; (async () => {
      const { code, data } = await getSysUserFindDropUser();
      if (code) {
        setUserList(data)
      }
    })();
  }, []);
  //编辑 回显
  const getClueDetails = useCallback((myClueId) => {
    const promes = {
      clueId: myClueId
    }
      ; (async () => {
        const { code, data } = await getSofClueFindDetailClue(promes);
        if (code === '20000') {
          let formData = {
            clientName: data.clientName,
            linkman: data.linkman,
            mobile: data.mobile,
            email: data.email,
            resource: data.resourceVal,
            marketing: data.marketing,
            deploy: data.deployVal,
            site: data.site,
            startEndTime: [
              moment(data.startTime),
              moment(data.endTime)
            ],
            budget: data.budget,
            nextTime:  data.nextTime ? moment(data.nextTime) : undefined,
            turnover: data.turnoverVal+ '',
            pm: data.pmId ? data.pmId + '': undefined
          };
          let files = []
          data.files.forEach(element => {
            files.push({
              uid: element.id,
              name: element.fileName,
              status: 'done',
              url: element.path
            })
          });
          setFileList(files);

          setFieldsValue(formData);
        }
      })();
  },[setFieldsValue]) 


  useEffect(() => {
    getSysMarkFindMarkFun("DEPLOY");
    getSysMarkFindMarkFun("RESOURCE");
    getUserList();
    const myClueId = sessionStorage.getItem('myClueId');
    if (myClueId) {
      getClueDetails(myClueId);
      setSessionMyClueId(myClueId);
    }
  }, [getSysMarkFindMarkFun, getUserList,getClueDetails]);
  // form
  const onFinish = (values) => {
    if (values.startEndTime) {
      values.startTime = moment(values.startEndTime[0]).format('YYYY-MM-DD');
      values.endTime = moment(values.startEndTime[1]).format('YYYY-MM-DD');
      delete values.startEndTime;
    }
    if (values.nextTime) {
      values.nextTime = moment(values.nextTime).format('YYYY-MM-DD');
    }

    values = preProcessData(values);
    if(sessionMyClueId) { //修改
      values.id = sessionMyClueId;
      values.paths = [];
      fileList&&fileList.forEach(element => {
        values.paths.push(element.url)
      });
      ; (async () => {
        const { code, msg } = await postSofClueUpdateClue(values);
        if (code === '20000') {
          history.go('-1');
          message.success('修改成功');
        } else {
          message.error(msg);
        }
      })();
    }else{ //新增
      if (fileUrl) {
        values.paths = fileUrl;
      }
      ; (async () => {
        const { code, msg } = await putSofClueInsertClue(values);
        if (code === '20000') {
          history.go('-1');
          message.success('创建成功');
        } else {
          message.error(msg);
        }
      })();
    }
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
    setFileUrl(fileUrls);
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
  //返回
  const handleGoBack = () => {
    sessionStorage.removeItem('myClueId');
    history.go(-1);
  }
  return (
    <CluesCustomerAwaitAddAll>
      <PageHeader
        className="site-page-header"
        title={sessionMyClueId ? "我的线索-线索修改" : "我的线索-线索报备"}
        onBack={() => handleGoBack()}
      ></PageHeader>
      <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        form={form}
      >
        <Row key="1">
          <Col span={12}>
            <Form.Item
              label="客户名称"
              name="clientName"
              rules={[{ required: true, message: "请输入客户名称！" }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="联系人"
              name="linkman"
              rules={[{ required: true, message: "请输入联系人！" }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="手机号"
              name="mobile"
              rules={[{ required: true, message: "请输入手机号！" }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="邮箱" name="email">
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="resource"
              label="来源"
              hasFeedback
              rules={[{ required: true, message: "请选择来源！" }]}
            >
              <Select placeholder="请选择主办单位">
                {source
                  ? source.map((item) => {
                    return (
                      <Option
                        key={item.markValue}
                        value={item.markValue}
                      >
                        {item.markName}
                      </Option>
                    );
                  })
                  : null}
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="经营范围" name="marketing">
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="部署类型"
              name="deploy"
              rules={[{ required: true, message: "请输入部署类型！" }]}
            >
              <Select placeholder="请选择部署类型">
                {deployType
                  ? deployType.map((item) => {
                    return (
                      <Option
                        key={item.markValue}
                        value={item.markValue}
                      >
                        {item.markName}
                      </Option>
                    );
                  })
                  : null}
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="部署地址" name="site">
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="周期"
              name="startEndTime"
              rules={[{ required: true, message: "请选择周期！" }]}
            >
              <RangePicker />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="预算"
              name="budget"
              rules={[{ required: true, message: "请输入预算！" }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="下次联系时间" name="nextTime">
              <DatePicker />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item label="项目经理" name="pm">
              <Select placeholder="请选择项目经理">
                {userList
                  ? userList.map((item) => {
                    return (
                      <Option
                        key={item.id}
                        value={item.id}
                      >
                        {item.name}
                      </Option>
                    );
                  })
                  : null}
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="turnover"
              label="成交率"
              hasFeedback
              rules={[{ required: true, message: "请选择成交率！" }]}
            >
              <Select placeholder="请选择成交率">
                <Option key="1" value="0.5">
                  50%
                </Option>
                <Option key="2" value="0.65">
                  65%
                </Option>
                <Option key="3" value="0.8">
                  80%
                </Option>
                <Option key="4" value="1">
                  100%
                </Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item label="附件" {...fujian}>
              <Upload {...props} fileList={fileList}>
                <Button icon={<UploadOutlined />}>上传附件</Button>
              </Upload>
            </Form.Item>
          </Col>
        </Row>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            {sessionMyClueId ? '修改': '提交'}
          </Button>
        </Form.Item>
      </Form>
    </CluesCustomerAwaitAddAll>
  );
};
const fujian = {
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

export default CluesCustomerAwaitAdd;
