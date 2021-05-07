import React from 'react';
import {
    useHistory
} from 'react-router-dom';
import {
    CompanyClientDetailsAll
} from './style';
import {
    PageHeader,
    Row,
    Col,
    Typography
} from "antd";

const { Title } = Typography;
const CompanyClientDetails = () => {
    const history = useHistory();
    return <CompanyClientDetailsAll>
        <PageHeader
            className="site-page-header"
            title='详情'
            onBack={() => history.go(-1)}
        ></PageHeader>
        <Title level={3}>基本信息</Title>
        <Row key="1">
            <Col span={3}>项目名称：</Col>
            <Col span={21}>
                {/* {itemData.itemName} */}
                </Col>
            <Col span={3}>项目类型：</Col>
            <Col span={21}>
                {/* {itemData.itemType} */}
                </Col>
            <Col span={3}>部署类型：</Col>
            <Col span={21}>
                {/* {itemData.deploy} */}
                </Col>
            <Col span={3}>重要程度：</Col>
            <Col span={21}>
                {/* {itemData.level} */}
                 级</Col>
            <Col span={3}>项目状态：</Col>
            <Col span={21}>
                {/* {itemData.itemStatus} */}
                </Col>
            <Col span={3}> 项目简介：</Col>
            <Col span={21}>
                {/* {itemData.synopsis} */}
                </Col>
            <Col span={3}>所属客户：</Col>
            <Col span={21}>
                {/* {itemData.clientName} */}
                </Col>
        </Row>
        <Title level={3}>附件</Title>
        <Row key="6">
            {/* {
                itemData.files && itemData.files.map(item => {
                    return <>
                        <Col span={2}></Col>
                        <Col span={22}>
                            <a href={item.path} download={item.fileName} target='_blank' rel="noreferrer" > {item.fileName} </a>
                        </Col>
                    </>


                })
            } */}
        </Row>
    </CompanyClientDetailsAll>
}

export default CompanyClientDetails;