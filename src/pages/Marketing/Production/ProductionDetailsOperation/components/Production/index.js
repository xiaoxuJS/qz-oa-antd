import React, { useState } from 'react';
import ProductionSignForMarketingModal from './ProductionSignForMarketingModal';
import ProductionIssueQuality from './ProductionIssueQuality'
import { Row, Col, Button } from "antd";

const Production = ({ taskId, id, taskName }) => {
    const [productionSignForMarketingModalShow, setProductionSignForMarketingModalShow] = useState(false);
    const [productionIssueQuality, setProductionIssueQuality] = useState(false)
    const hanldeNextStep = () => {
        setProductionSignForMarketingModalShow(true)
    };
    //下发技术部
    const hanldeNextStepSkill = () => {
        setProductionIssueQuality(true)
    }
    const buttonShow = () => {
        switch (taskName) {
            case '生产部签收':
                return <Col span={3}><Button type='primary' onClick={() => hanldeNextStep()}>（生产制造部）签收</Button></Col>;
            case '生产部作业':
                return <Col span={3}><Button type='primary' onClick={() => hanldeNextStepSkill()}>下发</Button></Col>;
            default:
                break;
        }
    }
    return <>
        <Row>
            {buttonShow()}
        </Row>
        <ProductionSignForMarketingModal
            productionSignForMarketingModalShow={productionSignForMarketingModalShow}
            setProductionSignForMarketingModalShow={setProductionSignForMarketingModalShow}
            taskId={taskId}
            id={id}
        />
        <ProductionIssueQuality
            productionIssueQuality={productionIssueQuality}
            setProductionIssueQuality={setProductionIssueQuality}
            taskId={taskId}
            id={id}
        />

    </>
}

export default Production;