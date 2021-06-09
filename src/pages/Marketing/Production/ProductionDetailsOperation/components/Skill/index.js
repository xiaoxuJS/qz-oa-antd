import React, { useState } from 'react';
import OneSignFor from './OneSignFor';
import IssueSkillModal from './IssueSkillModal';
import IssueSupplyModal from './IssueSupplyModal'
import { Row, Col, Button } from "antd";
import { Modal } from 'antd';
import {  ExclamationCircleOutlined } from '@ant-design/icons';
const {confirm} = Modal;


const Skill = ({ setFlow , taskName, taskId, id }) => {
    const [oneSignForShow, setOneSignForShow] = useState(false); // 签收营销中心发来计划modal
    const [issueSkillModalShow, setIssueSkillModalShow] = useState(false); //下发给技术部或者智能部
    const [nextStepSupply, setNextStepSupply] = useState(false); //技术部下发给供应科
    //签收并下发给营销部
    const hanldeNextStep = () => {
        confirm({
            title: '您确定要接收流程单并下发给营销部吗?',
            icon: <ExclamationCircleOutlined />,
            onOk() {
                setFlow('6');
                console.log('OK');
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    };
    //质检
    const qualifiedVisibleFun = () => {
    }
    //技术部签收
    const hanldeSignFor = () => {
        setOneSignForShow(true);
    }
    //质检结果完成下发到营销部
    const hanldeNextStepMarketing = () => {
        confirm({
            title: '您确定要将流程单下发给营销部部门吗?',
            icon: <ExclamationCircleOutlined />,
            onOk() {
                setFlow('12');
                console.log('OK');
            },
            onCancel() {
                console.log('Cancel');
            },
        });
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
                return <Col span={3}><Button type='primary' onClick={() => hanldeNextStepSupply()}>（技术部）下发（供应科）</Button></Col> ;
            case '5':
                return <Col span={3}><Button type='primary' onClick={() => hanldeNextStep()}>5. （技术部）接收并下发（营销部）</Button></Col> ;
            case '10':
                return <Col span={3}><Button type='primary' onClick={() => qualifiedVisibleFun()}>10. （技术部）质检结果</Button></Col> ;
            case '11':
                return <Col span={3}><Button type='primary' onClick={() => hanldeNextStepMarketing()}>11. （技术部）下发（营销部）</Button></Col> ;
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
        />
        <IssueSkillModal 
            setIssueSkillModalShow = {setIssueSkillModalShow}
            issueSkillModalShow = {issueSkillModalShow}
            taskId = {taskId}
            id = {id}
        />
        <IssueSupplyModal 
            nextStepSupply = {nextStepSupply}
            setNextStepSupply = {setNextStepSupply}
            taskId = {taskId}
            id = {id}
        />

    </>
}

export default Skill;