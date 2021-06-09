import React, { useState } from 'react';
import ElectricSignForSkill from './ElectricSignForSkill';
import ElectricIssueSupplyModal from './ElectricIssueSupplyModal'
import { Row, Col, Button } from "antd";

const Production = ({ taskId, id, taskName }) => {
    const [electricSignForSkillModalShow, setElectricSignForSkillModalShow] = useState(false);
    const [electricIssueSupplyModalShow, setElectricIssueSupplyModalShow] = useState(false);

    const hanldeNextStep = () => {
        setElectricSignForSkillModalShow(true)
    };
    //下发供应科
    const hanldeNextStepSupply = () => {
        setElectricIssueSupplyModalShow(true);
    }
    //根据状态选择按钮的显示
    const buttonShow = () => {
        switch (taskName) {
            case '智能部签收':
                return <Col span={3}><Button type='primary' onClick={() => hanldeNextStep()}>（电气智能部）签收</Button></Col>;
            case '智能部作业':
                return <Col span={3}><Button type='primary' onClick={() => hanldeNextStepSupply()}>作业完成</Button></Col>;
            default:
                break;
        }
    }
    return <>
        <Row>
            {buttonShow()}
        </Row>
        <ElectricSignForSkill 
            electricSignForSkillModalShow = {electricSignForSkillModalShow}
            setElectricSignForSkillModalShow = {setElectricSignForSkillModalShow}
            taskId = {taskId}
            id = {id}
        />
        <ElectricIssueSupplyModal 
            electricIssueSupplyModalShow = {electricIssueSupplyModalShow}
            setElectricIssueSupplyModalShow = {setElectricIssueSupplyModalShow}
            taskId = {taskId}
            id = {id}
        />
    </>
}

export default Production;