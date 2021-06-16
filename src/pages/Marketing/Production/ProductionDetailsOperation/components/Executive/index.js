import React, { useState } from 'react';
import ExecutiveSignForEarketingModal from './ExecutiveSignForEarketingModal';
import ExecutiveIssueSkillModalShow from './ExecutiveIssueSkillModalShow'
import { Row, Col, Button } from "antd";



const Executive = ({taskId, id, taskName }) => {
    const [executiveSignForEarketingModalShow, setExecutiveSignForEarketingModalShow] = useState(false);
    const [executiveIssueSkillModalShow, setExecutiveIssueSkillModalShow] = useState(false); // 
    const hanldeNextStep = () => {
        setExecutiveSignForEarketingModalShow(true)
    }
    // 审批
    const hanldeNextStepExamine =  () => {
        setExecutiveIssueSkillModalShow(true)
    }
    const buttonShow = () => {
        switch (taskName) {
            case '高管签收':
                return <Col span={3}><Button type='primary' onClick={() => hanldeNextStep()}>签收</Button></Col>;
            case '高管审批':
                return <Col span={3}><Button type='primary' onClick={() => hanldeNextStepExamine()}>审批</Button></Col>;
            default:
                break;
        }
    }
    return <>
        <Row>
            {buttonShow()}
        </Row>
        <ExecutiveSignForEarketingModal 
            executiveSignForEarketingModalShow = {executiveSignForEarketingModalShow}
            setExecutiveSignForEarketingModalShow = {setExecutiveSignForEarketingModalShow}
            taskId = {taskId}
            id = {id}
            taskName = {taskName}
        />
        <ExecutiveIssueSkillModalShow 
            executiveIssueSkillModalShow = {executiveIssueSkillModalShow}
            setExecutiveIssueSkillModalShow = {setExecutiveIssueSkillModalShow}
            taskId = {taskId}
            id = {id}
            taskName = {taskName}
        />
    </>
}

export default Executive;