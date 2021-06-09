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
            case '质检部签收':
                return <Col span={3}><Button type='primary' onClick={() => hanldeNextStep()}>质检部签收</Button></Col>;
            case '质检部作业':
                return <Col span={3}><Button type='primary' onClick={() => hanldeNextStepSkill()}>质检完成下发</Button></Col>;
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
        />
        <QualityIssueMarketing
            qualityIssueMarketingModalShow={qualityIssueMarketingModalShow}
            setQualityIssueMarketingModalShow={setQualityIssueMarketingModalShow}
            taskId={taskId}
            id={id}
        />

    </>
}

export default Quality;