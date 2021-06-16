import React, { useState } from 'react';
import OneSignFor from './OneSignFor';
import IssueSkillModal from './IssueSkillModal';
import IssueSupplyModal from './IssueSupplyModal'
import { Row, Col, Button } from "antd";

const Skill = ({taskName, taskId, id }) => {
    const [oneSignForShow, setOneSignForShow] = useState(false); // 签收营销中心发来计划modal
    const [issueSkillModalShow, setIssueSkillModalShow] = useState(false); //下发给技术部或者智能部
    const [nextStepSupply, setNextStepSupply] = useState(false); //技术部下发给供应科
    //技术部签收
    const hanldeSignFor = () => {
        setOneSignForShow(true);
    }
    //下发技术部
    const hanldeIssueSkill = () => {
        setIssueSkillModalShow(true);
    }
    //下发供应部
    const hanldeNextStepSupply = () => {
        setNextStepSupply(true);
    }
    //根据状态选择按钮的显示
    const buttonShow = () => {
        switch (taskName) {
            
            case '技术总监签收':
                return <Col span={3}><Button type='primary' onClick={() => hanldeSignFor()}>（技术部）签收</Button></Col>;
            case '技术总监下发':
                return <Col span={3}><Button type='primary' onClick={() => hanldeIssueSkill()}>（技术部）下发技术部（或智能部）</Button></Col>;
            case '技术部作业':
                return <Col span={3}><Button type='primary' onClick={() => hanldeNextStepSupply()}>技术部作业</Button></Col> ;;
            default:
                break;
        }
    }
    return <>
        <Row>
            {buttonShow()}
        </Row>

        <OneSignFor 
            setOneSignForShow = {setOneSignForShow}
            oneSignForShow = {oneSignForShow}
            taskId = {taskId}
            id = {id}
            taskName = {taskName}
        />
        <IssueSkillModal 
            setIssueSkillModalShow = {setIssueSkillModalShow}
            issueSkillModalShow = {issueSkillModalShow}
            taskId = {taskId}
            id = {id}
            taskName = {taskName}
        />
        <IssueSupplyModal 
            nextStepSupply = {nextStepSupply}
            setNextStepSupply = {setNextStepSupply}
            taskId = {taskId}
            id = {id}
            taskName = {taskName}
        />

    </>
}

export default Skill;