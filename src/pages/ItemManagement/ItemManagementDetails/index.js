import React, { useEffect, useCallback, useState, useContext } from 'react';
import {
    useHistory,
    useLocation
} from 'react-router-dom';
import { getSofItemFindDetailsItem } from '../../../Api/itemUrl';
import {
    ReserveItemDetailsAll
} from './style';
//公共数据
import {
    myContext
  } from '../../../reducer';

import {
    PageHeader,
    Row,
    Col,
    Typography,
    Timeline,
    List,
    message,
    Table
} from "antd";

const { Title } = Typography;

const ReserveItemDetails = () => {
    const history = useHistory();
    const location = useLocation();
    const {state} = useContext(myContext);
    const { itemStatus, itemType } = state;
    const [itemData, setItemData] = useState({});
    const getItemData = useCallback(() => {
        ; (async () => {
            const { code, data, msg } = await getSofItemFindDetailsItem({ itemId: location.state.id });
            if (code === '20000') {
                setItemData(data);
            } else {
                message.error(msg);
            }
        })();
    }, [location.state]);
    useEffect(() => {
        getItemData();
    }, [getItemData])
    const itemTypeLeft = {
        0:'储备项目',1:'进行中项目',2:'质保段项目',3:'已成交项目'
    }
    const itemTypeRight = {
        1:'物联网项目',2:'传统项目',3:'软件项目'
    }
    const columns = [
        {
            title: '配料清单',
            dataIndex: 'detailed',
        },
        {
            title: '运费',
            dataIndex: 'freight',
        },
        {
            title: '功能',
            dataIndex: 'function',
        },
        {
            title: '厂家',
            dataIndex: 'manufactor',
        },
        {
            title: '材料名称',
            dataIndex: 'materialName',
        },
        {
            title: '厂家联系方式',
            dataIndex: 'mobile',
        },
        {
            title: '型号规格',
            dataIndex: 'model',
        },
        {
            title: '数量',
            dataIndex: 'number',
        },
        {
            title: '单价',
            dataIndex: 'price',
        },
    ];
    return (
        <ReserveItemDetailsAll>
            <PageHeader
                className="site-page-header"
                title={`${itemTypeLeft[itemStatus]} - ${itemTypeRight[itemType]}`}
                onBack={() => history.go(-1)}
            ></PageHeader>
            <Title level={3}>基本信息</Title>
            <Row key="1">
                <Col span={3}>项目名称：</Col>
                <Col span={21}>{itemData.itemName}</Col>
                <Col span={3}>项目类型：</Col>
                <Col span={21}>{itemData.itemType}</Col>
                <Col span={3}>部署类型：</Col>
                <Col span={21}>{itemData.deploy}</Col>
                <Col span={3}>重要程度：</Col>
                <Col span={21}>{itemData.level} 级</Col>
                <Col span={3}>项目状态：</Col>
                <Col span={21}>{itemData.itemStatus}</Col>
                <Col span={3}> 项目简介：</Col>
                <Col span={21}>{itemData.synopsis}</Col>
                <Col span={3}>所属客户：</Col>
                <Col span={21}>{itemData.clientName}</Col>
            </Row>
            <Title level={3}>项目周期</Title>
            <Row key="2">
                {
                    itemData.cycleDTOS && itemData.cycleDTOS.map(item => {
                        return <>
                            <Col span={3}>
                                {item.groupName}周期：
                            </Col>
                            <Col span={21}>
                                {item.startTime} - {item.endTime}
                            </Col>
                        </>
                    })
                }
            </Row>
            <Title level={3}>项目动态</Title>
            <Timeline>
                {
                    itemData.dynamicDTOS && itemData.dynamicDTOS.map(item => {
                        return <Timeline.Item color="red" key={item.beginTime}>
                            <p>时间： {item.beginTime} {item.endTime ? '-' + item.endTime : null}</p>
                            <p>事项：{item.process}</p>
                            {/* <p>内容： Solve initial network problemsSolve initial network problemsSolve initial network problemsSolve initial network problemsSolve initial network problems </p> */}
                        </Timeline.Item>
                    })
                }

            </Timeline>
            <Title level={3}>项目成员</Title>
            {
                itemData.memberDTOS && itemData.memberDTOS.map(item => {
                    let newArray = [];
                    item.memberVals.forEach(element => {
                        newArray.push(`
                            姓名：${element.member}。
                            联系方式：${element.mobile}
                        `)
                    });
                    return <List
                        size="small"
                        header={<div>{item.groupName}</div>}
                        bordered
                        dataSource={newArray}
                        renderItem={item => <List.Item>{item}</List.Item>}
                    />
                })
            }
            <Title level={3}>项目材料</Title>
            <Table columns={columns} dataSource={itemData.detailedDTOS} rowKey='id' pagination={false} size='small' bordered />
            <Title level={3}>项目预算</Title>
            {
                itemData.costDTO ? <Row key="5">
                    <Col span={3}>材料费：</Col>
                    <Col span={21}>{itemData.costDTO.materials}元</Col>
                    <Col span={3}>售后服务费：</Col>
                    <Col span={21}>{itemData.costDTO.sales}元</Col>
                    <Col span={3}>安装调试费：</Col>
                    <Col span={21}>{itemData.costDTO.debugging}元</Col>
                    <Col span={3}>差旅费：</Col>
                    <Col span={21}>{itemData.costDTO.travel}元</Col>
                    <Col span={3}>工时费：</Col>
                    <Col span={21}>{itemData.costDTO.working}元</Col>
                    <Col span={3}>总计：</Col>
                    <Col span={21}>{itemData.costDTO.sum}元</Col>
                    <Col span={3}>准确率：</Col>
                    <Col span={21}>{itemData.costDTO.accuracy}%</Col>
                </Row> : null
            }
            <Title level={3}>技术文件(附件)</Title>
            <Row key="6">
                {
                    itemData.files && itemData.files.map(item => {
                        return <>
                            <Col span={2}></Col>
                            <Col span={22}>
                                <a href={item.path} download={item.fileName} target='_blank' rel="noreferrer" > {item.fileName} </a>
                            </Col>
                        </>


                    })
                }
            </Row>


        </ReserveItemDetailsAll>
    )
}

export default ReserveItemDetails;