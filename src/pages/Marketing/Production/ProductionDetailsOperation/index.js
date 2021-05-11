import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
//营销中心操作
import Marketing from './components/Marketing';
//营销中心下发操作
import MarketingIssue from './components/MarketingIssue';
//技术部上传图纸
import Skill from './components/Skill';
//档案室接收并下发给智能电气部门
import SkillIssue from './components/SkillIssue';
//电气智能  接收
import Electric from './components/Electric';
//负责人接收
import ElectricPrincipal from './components/ElectricPrincipal';
//上传材料表并下发给仓管
import ElectricPrincipalUpdate from './components/ElectricPrincipalUpdate';
//仓管签收
import Warehouse from './components/Warehouse';
//仓管验货
import WarehouseTest from './components/WarehouseTest';
//仓管下发供应部
import WarehouseIssue from './components/WarehouseIssue';
//供应部签收
import Supply from './components/Supply';
//下发给生产部
import SupplyIssue from './components/SupplyIssue';
//生产部签收
import Wanufacture from './components/Wanufacture';
//生产部测试
import WanufactureTest from './components/WanufactureTest';
//下发营销部
import WanufactureIssue from './components/WanufactureIssue';
//营销部接收
import MarketingReception from './components/MarketingReception';
//发货
import MarketingShipments from './components/MarketingShipments';
import {
    ProductionDetailsOperationAll
} from './style';
import { PageHeader, Typography, Row, Col, Button } from "antd";

const { Title } = Typography;

const ProductionDetailsOperation = () => {
    const history = new useHistory();
    const location = new useLocation();
    //流程步骤
    const [flow, setFlow] = useState('16');
    const [operationShow, setOperationShow] = useState(false);
    //
    useEffect(() => {
        if (location.state.type === 'details') {
            setOperationShow(false)
        } else if (location.state.type === 'operation') {
            setOperationShow(true)
        }
    }, [location.state])

    //返回
    const handleGoBack = () => {
        history.go('-1')
    }
    const flowShow = () => {
        switch (flow) {
            case '1': //流程表创建完成
                return <Marketing setFlow = {setFlow}/>
            case '2': //技术部签收
                return <MarketingIssue setFlow = {setFlow}/>
            case '3': //技术部上传图纸-并下发档案室
                return <Skill setFlow = {setFlow}/>
            case '4': //档案室接收并下发给智能电气部门
                return <SkillIssue setFlow = {setFlow}/>
            case '5': //电气智能部接收-并选择负责人
                return <Electric setFlow = {setFlow}/>
            case '6': //负责人接收
                return <ElectricPrincipal setFlow = {setFlow}/>
            case '7': //上传材料表并下发仓管
                return <ElectricPrincipalUpdate setFlow = {setFlow} />
            case '8': //仓管签收
                return <Warehouse setFlow = {setFlow} />
            case '9': //仓管验货
                return <WarehouseTest setFlow = {setFlow}/>
            case '10': //仓管签字下发给供应部
                return <WarehouseIssue setFlow = {setFlow}/>
            case '11': //供应部签收
                return <Supply setFlow = {setFlow}/>
            case '12': //下发给生产部
                return <SupplyIssue setFlow = {setFlow}/>
            case '13': //生产部签收
                return <Wanufacture setFlow = {setFlow}/>
            case '14': //生产部测试
                return <WanufactureTest setFlow = {setFlow}/>
            case '15': //下发营销部
                return <WanufactureIssue setFlow = {setFlow}/>
            case '16': //下发营销部
                return <MarketingReception setFlow = {setFlow}/>
            case '17': //发货
                return <MarketingShipments setFlow = {setFlow}/>
            default:
                break;
        }
    }
    return <ProductionDetailsOperationAll>
        <PageHeader
            className="site-page-header"
            title="生产计划详情"
            onBack={() => handleGoBack()}
        ></PageHeader>
        <Typography>
            <Title level={3}>基本信息</Title>
            <Row>
                <Col span={3}>客户名称:</Col>
                <Col span={21}>1</Col>
                <Col span={3}>企业性质及评估:</Col>
                <Col span={21}>1</Col>
                <Col span={3}>合同编号:</Col>
                <Col span={21}>1</Col>
                <Col span={3}>销售人员:</Col>
                <Col span={21}>1</Col>
                <Col span={3}>产品型号:</Col>
                <Col span={21}>1</Col>
                <Col span={3}>订单数量:</Col>
                <Col span={21}>1</Col>
                <Col span={3}>合同总价:</Col>
                <Col span={21}>1</Col>
                <Col span={3}>交货日期:</Col>
                <Col span={21}>2012-06-12</Col>
                <Col span={3}>下发日期:</Col>
                <Col span={21}>2012-06-12</Col>
                <Col span={3}>合同下发人:</Col>
                <Col span={21}>xiaoxujs</Col>
            </Row>
            <Title level={3}>技术部</Title>
            <Row>
                <Col span={3}>技术部接收时间:</Col>
                <Col span={21}>2012-06-12</Col>
                <Col span={3}>技术部图纸完成日期:</Col>
                <Col span={21}>2012-06-12</Col>
                <Col span={3}>图纸下发实际日期:</Col>
                <Col span={21}>2012-06-12</Col>
                <Col span={3}>档案接收人签字日期:</Col>
                <Col span={21}>2012-06-12</Col>
                <Col span={3}>电气图纸:</Col>
                <Col span={21}><Button type='link'> 图纸</Button></Col>

            </Row>
            <Title level={3}>电气智能部</Title>
            <Row>
                <Col span={3}>合同下发接收日期:</Col>
                <Col span={21}>2012-06-12</Col>
                <Col span={3}>需完成日期:</Col>
                <Col span={21}>2012-06-12</Col>
                <Col span={3}>负责人:</Col>
                <Col span={21}>xiaoxujs</Col>
                <Col span={3}>采购制作情况说明:</Col>
                <Col span={21}>有说明好说的，干好就行了！</Col>
                <Col span={3}>材料表:</Col>
                <Col span={21}><Button type='link'> 表</Button></Col>
            </Row>
            <Title level={3}>仓管</Title>
            <Row>
                <Col span={3}>材料表下发日期:</Col>
                <Col span={21}>2012-06-12</Col>
                <Col span={3}>计划需要入库日期:</Col>
                <Col span={21}>2012-06-12</Col>
                <Col span={3}>实际入库日期:</Col>
                <Col span={21}>2012-06-12</Col>
                <Col span={3}>是否已经验收:</Col>
                <Col span={21}>是</Col>
                <Col span={3}>情况说明:</Col>
                <Col span={21}>情况</Col>
            </Row>
            <Title level={3}>供应部</Title>
            <Row>
                <Col span={3}>采购合同下发日期:</Col>
                <Col span={21}>2012-06-12</Col>
                <Col span={3}>计划需要交货日期:</Col>
                <Col span={21}>2012-06-12</Col>
                <Col span={3}>实际到货日期:</Col>
                <Col span={21}>2012-06-12</Col>
                <Col span={3}>质检员签字及验收日期:</Col>
                <Col span={21}>2012-06-12</Col>
                <Col span={3}>情况说明:</Col>
                <Col span={21}>情况</Col>
            </Row>
            <Title level={3}>外协配件</Title>
            <Row>
                <Col span={3}>电液推杆到货日期:</Col>
                <Col span={21}>2012-06-12</Col>
                <Col span={3}>负责人:</Col>
                <Col span={21}>xiaoxujs</Col>
                <Col span={3}>是否延误说明:</Col>
                <Col span={21}>情况</Col>
            </Row>
            <Title level={3}>生产部</Title>
            <Row>
                <Col span={3}>图纸接收日期:</Col>
                <Col span={21}>2012-06-12</Col>
                <Col span={3}>生产计划交货时间:</Col>
                <Col span={21}>2012-06-12</Col>
                <Col span={3}>质检合格签字及日期：:</Col>
                <Col span={21}>2012-06-12</Col>
                <Col span={3}>车间负责人：</Col>
                <Col span={21}>xiaoxujs</Col>
            </Row>
            <Title level={3}>营销部</Title>
            <Row>
                <Col span={3}>实际发货日期:</Col>
                <Col span={21}>2012-06-12</Col>
                <Col span={3}>发货人:</Col>
                <Col span={21}>xiaoxujs</Col>
            </Row>
            <Row>
                <Col span={3}>备注:</Col>
                <Col span={21}>2012-06-12</Col>
            </Row>

            {
                operationShow ? <>
                    <Title level={3}>操作</Title>
                    {flowShow()}
                </> : null
            }


        </Typography>
    </ProductionDetailsOperationAll>
}

export default ProductionDetailsOperation;