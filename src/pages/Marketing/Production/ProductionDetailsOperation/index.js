import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
//营销中心操作
import Marketing from './components/Marketing';
//技术部
import Skill from './components/Skill';
//智能部
import Electric from './components/Electric'
//供应部
import Supply from './components/Supply';
//生产部
import Production from './components/Production'

import {
    ProductionDetailsOperationAll
} from './style';
import { PageHeader, Typography, Row, Col, Button } from "antd";

const { Title } = Typography;

const ProductionDetailsOperation = () => {
    const history = new useHistory();
    const location = new useLocation();
    //流程步骤
    const [flow, setFlow] = useState('1');
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
            case '1': //营销部
            case '6': //营销部接收技术部完成的流程单
            case '7': //营销部下发到生产制造部门
            case '12': //营销部
                return <Marketing setFlow={setFlow} flow = {flow}/>
            case '2': //技术部签收
            case '2.2.1': //技术部上传图纸
            case '2.2.2': //下发供应部
            case '5': //下发供应部
            case '10': //签收 质检
                return <Skill setFlow={setFlow} flow = {flow}/>
            case '2.1.1': //电气智能签收
            case '2.1.2': //电气智设计图纸
            case '2.1.3': //下发供应部
                return <Electric setFlow={setFlow} flow = {flow}/>
            case '3': //供应部
            case '4': //供应部
                return <Supply setFlow={setFlow} flow = {flow}/>
            case '8': //生产制造部
            case '9': //下发
                return <Production setFlow={setFlow} flow = {flow}/>
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
                <Col span={3}>合同附件:</Col>
                <Col span={21}><Button type='link'> 合同</Button></Col>
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