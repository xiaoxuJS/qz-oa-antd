import React, { useState } from 'react';
import ProductionSignForMarketingModal from './QualitySignForProductionModal';
import QualityIssueMarketing from './QualityIssueMarketing'
import { Row, Col, Button } from "antd";

const Quality = ({ taskId, id, taskName }) => {
    const [qualitySignForProductionModalShow, setQualitySignForProductionModalShow] = useState(false); // 质检部签收
    const [qualityIssueMarketingModalShow, setQualityIssueMarketingModalShow] = useState(false);
    const hanldeNextStep = () => {
        setQualitySignForProductionModalShow(true)
    };
    //下发技术部
    const hanldeNextStepSkill = () => {
        setQualityIssueMarketingModalShow(true)
    }
    const buttonShow = () => {
        switch (taskName) {
            case '质检签收(技术)':
                return <Col span={3}><Button type='primary' onClick={() => hanldeNextStep()}>质检签收(技术)</Button></Col>;
            case '质检作业(技术)':
                return <Col span={3}><Button type='primary' onClick={() => hanldeNextStepSkill()}>质检作业(技术)</Button></Col>;
            default:
                break;
        }
    }
    return <>
        <Row>
            {buttonShow()}
        </Row>
        <ProductionSignForMarketingModal
            qualitySignForProductionModalShow={qualitySignForProductionModalShow}
            setQualitySignForProductionModalShow={setQualitySignForProductionModalShow}
            taskId={taskId}
            id={id}
            taskName = {taskName}
        />
        <QualityIssueMarketing
            qualityIssueMarketingModalShow={qualityIssueMarketingModalShow}
            setQualityIssueMarketingModalShow={setQualityIssueMarketingModalShow}
            taskId={taskId}
            id={id}
            taskName = {taskName}
        />

    </>
}

export default Quality;