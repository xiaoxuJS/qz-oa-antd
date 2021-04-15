import React, { useState, useEffect, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { ip } from '../../../../Api/http'
//获取公用方法
import {
  preProcessData
} from '../../../../assets/comFun'
import moment from 'moment';
//api
import {
  getSysMarkFindMark
} from '../../../../Api/communalUrl'
import {
  putSofClueInsertClue
} from '../../../../Api/userUrl'
import { CluesCustomerAwaitAddAll } from "./style";
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
  const [deployType, setDeployType] = useState([]); //部署类型
  const [source, setSource] = useState([]); //来源
  const [fileList, setFileList] = useState([]);//上传文件列表
  const [fileUrl, setFileUrl] = useState(null); //上传文件的文件名
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


  useEffect(() => {
    getSysMarkFindMarkFun("DEPLOY");
    getSysMarkFindMarkFun("RESOURCE");
  }, [getSysMarkFindMarkFun]);
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
    if (fileUrl) {
      values.paths = fileUrl;
    }
    values = preProcessData(values);
    ; (async () => {
      const {code, msg} = await putSofClueInsertClue(values);
      if(code === '20000'){
        history.go('-1');
        message.success('创建成功');
      }else{
        message.error(msg);
      }
    })();
  };
  const handleChangeFile = info => {
    let fileList = [...info.fileList];
    fileList = fileList.slice(-3);
    let fileUrls = [];
    fileList = fileList.map(file => {
      if (file.response) {
        file.url = file.response.data;
        if(file.response.code === "20000"){
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
    data:{
      folder:'/clue'
    },
    onChange: handleChangeFile
  };
  return (
    <CluesCustomerAwaitAddAll>
      <PageHeader
        className="site-page-header"
        title="我的线索-线索报备"
        onBack={() => history.go(-1)}
      ></PageHeader>
      <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
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
                        key={item.id}
                        value={item.id}
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
              <Input />
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
                <Option key="1" value="50">
                  50%
                </Option>
                <Option key="2" value="65">
                  65%
                </Option>
                <Option key="3" value="80">
                  80%
                </Option>
                <Option key="4" value="100">
                  100%
                </Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="status"
              label="线索类型"
              hasFeedback
              rules={[{ required: true, message: "请选择线索类型！" }]}
            >
              <Select placeholder="请选择线索类型">
                <Option key="1" value="0">
                  待处理
                </Option>
                <Option key="2" value="1">
                  跟进中
                </Option>
                <Option key="3" value="2">
                  已转客户
                </Option>
                <Option key="4" value="3">
                  已搁置
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
            提交
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
