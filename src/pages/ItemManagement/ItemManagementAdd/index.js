import React, { useState, useEffect, useCallback } from "react";
import { useHistory } from "react-router-dom";
//api
import {
    getSofItemGroupFindItemGroup
} from '../../../Api/communalUrl';
import {
    postSofItemInsertItem
} from '../../../Api/itemUrl';
import {
    ip
} from '../../../Api/http'
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
    Typography,
    message
} from "antd";
import moment from 'moment';
import { UploadOutlined } from '@ant-design/icons';


const { Title } = Typography;


/**
 * @author 徐博亚
 * @returns 
 */
const ReserveItemAdd = () => {
    const history = new useHistory();
    const [fileList, setFileList] = useState([]); //文件列表
    const [fileUrl, setFileUrl] = useState([]); //文件地址
    const [itemGroupList, setItemGroupList] = useState(null);
    const getItemGroupListFun = useCallback(() => {
        ; (async () => {
            const { code, data, msg } = await getSofItemGroupFindItemGroup();
            if (code === '20000') {
                setItemGroupList(data);
            } else {
                message.error(msg)
            }
        })();
    }, [])
    useEffect(() => {
        getItemGroupListFun();
    }, [getItemGroupListFun])
    // 、、form
    const onFinish = (values) => {
        console.log(values)
        //获取项目周期数据和奖金比
        let inputValue = {
            cycleDTOS: [],//项目周期及奖金比例
            memberDTOS: [], //项目成员
            detailedDTOS: [], //项目材料
            costDTO: {}, //项目预算
        };
        //材料厂家处理
        if (values.detailedDTOS) {
            values.detailedDTOS.forEach(element => {
                inputValue.detailedDTOS.push(element);
            });
        }
        itemGroupList.forEach(element => {
            let itemvalue = { //项目周期及奖金比例
                groupId: element.id,
            };
            for (const key in values) {
                if (key === element.id) {
                    itemvalue.startTime = moment(values[key][0]).format('YYYY-MM-DD');
                    itemvalue.endTime = moment(values[key][1]).format('YYYY-MM-DD');
                }
                if (key.substring(0, key.length - 5) === element.id) {
                    itemvalue.proportion = values[key];
                }
                //项目成员
                if (key.substring(0, key.length - 6) === element.id) {
                    values[key] && values[key].forEach(item => {
                        let obj = {
                            groupId: element.id,
                            member: item.name,
                            mobile: item.phone,
                        }
                        inputValue.memberDTOS.push(obj)
                    });
                }
            }
            inputValue.cycleDTOS.push(itemvalue);
        });

        // 项目预算数据处理
        inputValue.costDTO = {
            accuracy: values.accuracy / 100,
            debugging: values.debugging,
            sales: values.sales,
            travel: values.travel,
            working: values.working,
            materials: values.materials,
        };
        //基本信息
        inputValue.itemName = values.itemName; //项目名称
        inputValue.itemType = values.itemType; //项目类型
        inputValue.deploy = values.deploy; //部署类型
        inputValue.level = values.level; //重要程度
        inputValue.itemStatus = values.itemStatus; //项目状态
        inputValue.clientId = values.clientId; //所属客户
        inputValue.synopsis = values.synopsis; //项目简介
        if (fileUrl.length > 0) {
            inputValue.files = fileUrl;
        }
        ; (async () => {
            const { code, msg } = await postSofItemInsertItem(inputValue);
            if (code === '20000') {
                history.go(-1);
                message.success('项目创建成功');
            } else {
                message.error(msg);
            }
        })();
    };
    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
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
                <ItemTime itemGroupList={itemGroupList} />

                {/* 项目奖金 */}
                <ItemMoney itemGroupList={itemGroupList} />
                {/* 项目成员 */}
                <ItemMember itemGroupList={itemGroupList} />
                {/* 项目材料 */}
                <ItemMaterials />
                {/* 项目预算 */}
                <ItemBudget />

                <Title level={3}>技术文件</Title>
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
