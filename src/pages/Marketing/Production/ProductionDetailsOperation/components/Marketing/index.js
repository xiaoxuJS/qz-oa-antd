import React, { useState } from 'react';
import OneIssoe from './OneIssoe';
import SignForWareHouseModal from './SignForWareHouseModal';
import MarketingIssueProductionModal from './MarketingIssueProductionModal';
import MarketingSignForQuality from './MarketingSignForQuality';
import DeliveryModal from './DeliveryModal'
import { Row, Col, Button } from "antd";



const Marketing = ({taskId, id, taskName }) => {
    const [oneIssonShow, setOneIssonShow] = useState(false);
    const [signForWareHouseModalShow, setSignForWareHouseModalShow] = useState(false);
    const [marketingIssueProductionModalShow, setMarketingIssueProductionModalShow] = useState(false); // 营销部下发生产计划到 生产制造部门
    const [marketingSignForQualityModalShow, setMarketingSignForQualityModalShow] = useState(false); // 质检下发营销部门签收
    const [deliveryModalShow, setDeliveryModalShow] = useState(false); //交付
    const hanldeNextStep = () => {
        setOneIssonShow(true)
    }
    const hanldeNextStepFahuo = () => {
        setDeliveryModalShow(true)
    }
    //营销部接收技术部
    const hanldeSignFor = () => {
        setSignForWareHouseModalShow(true);
    };
    //下发到生产制造部门
    const hanldeNextStepProduction = () => {
        setMarketingIssueProductionModalShow(true)
    }
    //质检部下发 营销部签收
    const hanldeNextStepSignFor = () => {
        setMarketingSignForQualityModalShow(true)
    }
    const buttonShow = () => {
        switch (taskName) {
            case '下发计划':
                return <Col span={3}><Button type='primary' onClick={() => hanldeNextStep()}>{taskName}</Button></Col>;
            case '生产安排签收':
                return <Col span={3}><Button type='primary' onClick={() => hanldeSignFor()}>接收(仓管)</Button></Col>;
            case '生产安排作业':
                return <Col span={3}><Button type='primary' onClick={() => hanldeNextStepProduction()}>（营销部）下发（生产制造部）</Button></Col>;
            case '产品交付签收':
                return <Col span={3}><Button type='primary' onClick={() => hanldeNextStepSignFor()}>签收</Button></Col>;
            case '产品交付':
                return <Col span={3}><Button type='primary' onClick={() => hanldeNextStepFahuo()}>签收</Button></Col>;
            default:
                break;
        }
    }
    return <>
        <Row>
            {buttonShow()}
        </Row>
        <OneIssoe 
            oneIssonShow = {oneIssonShow}
            setOneIssonShow = {setOneIssonShow}
            taskId = {taskId}
            id = {id}
        />
        <SignForWareHouseModal 
            signForWareHouseModalShow = {signForWareHouseModalShow}
            setSignForWareHouseModalShow = {setSignForWareHouseModalShow}
            taskId = {taskId}
            id = {id}
        />
        <MarketingIssueProductionModal 
            marketingIssueProductionModalShow = {marketingIssueProductionModalShow}
            setMarketingIssueProductionModalShow = {setMarketingIssueProductionModalShow}
            taskId = {taskId}
            id = {id}
        />
        <MarketingSignForQuality 
            marketingSignForQualityModalShow = {marketingSignForQualityModalShow}
            setMarketingSignForQualityModalShow = {setMarketingSignForQualityModalShow}
            taskId = {taskId}
            id = {id}
        />
        <DeliveryModal 
            deliveryModalShow = {deliveryModalShow}
            setDeliveryModalShow = {setDeliveryModalShow}
            taskId = {taskId}
            id = {id}
        />
    </>
}

export default Marketing;