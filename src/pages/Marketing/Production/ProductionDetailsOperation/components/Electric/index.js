import React, { useState } from 'react';
import ElectricSignForSkill from './ElectricSignForSkill';
import ElectricIssueSupplyModal from './ElectricIssueSupplyModal';
import ElectricProductionModal from './ElectricProductionModal';
import ElectricQualitySignForModal from './ElectricQualitySignForModal';
import ElectricQualityIssueModal from './ElectricQualityIssueModal';
import ElectricProductionSingForModal from './ElectricProductionSingForModal'
import { Row, Col, Button } from "antd";

const Production = ({ taskId, id, taskName }) => {
    const [electricSignForSkillModalShow, setElectricSignForSkillModalShow] = useState(false);
    const [electricIssueSupplyModalShow, setElectricIssueSupplyModalShow] = useState(false);
    const [electricProductionSingForModalShow, setElectricProductionSingForModalShow] = useState(false); //生产签收智能
    const [electricProductionModalShow, setElectricProductionModalShow] = useState(false); //生产作业智能
    const [electricQualitySignForModalShow, setElectricQualitySignForModalShow] = useState(false); //质检签收(智能)
    const [electricQualityIssueModalShow, setElectricQualityIssueModalShow] = useState(false); //质检作业(智能)

    const hanldeNextStep = () => {
        setElectricSignForSkillModalShow(true);
    };
    //下发供应科
    const hanldeNextStepSupply = () => {
        setElectricIssueSupplyModalShow(true);
    }
    //生产签收智能下发
    const hanldeElectricProductionSingFor = () => {
        setElectricProductionSingForModalShow(true);
    }
    //生产作业智能生产
    const hanldeElectricProduction = () => {
        setElectricProductionModalShow(true);
    }
    //质检签收
    const hanldeElectricQualitySignFor = () => {
        setElectricQualitySignForModalShow(true);
    }
    //质检下发
    const hanldeElectricQualityIssue = () => {
        setElectricQualityIssueModalShow(true)
    }
    //根据状态选择按钮的显示
    const buttonShow = () => {
        switch (taskName) {
            case '智能部签收':
                return <Col span={3}><Button type='primary' onClick={() => hanldeNextStep()}>（电气智能部）签收</Button></Col>;
            case '智能部作业':
                return <Col span={3}><Button type='primary' onClick={() => hanldeNextStepSupply()}>作业完成</Button></Col>;
            case '生产签收(智能)':
                return <Col span={3}><Button type='primary' onClick={() => hanldeElectricProductionSingFor()}>生产签收(智能)</Button></Col>;
            case '生产作业(智能)':
                return <Col span={3}><Button type='primary' onClick={() => hanldeElectricProduction()}>生产作业(智能)</Button></Col>;
            case '质检签收(智能)':
                return <Col span={3}><Button type='primary' onClick={() => hanldeElectricQualitySignFor()}>质检签收(智能)</Button></Col>;
            case '质检作业(智能)':
                return <Col span={3}><Button type='primary' onClick={() => hanldeElectricQualityIssue()}>质检作业(智能)</Button></Col>;
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
            taskName = {taskName}
        />
        <ElectricIssueSupplyModal 
            electricIssueSupplyModalShow = {electricIssueSupplyModalShow}
            setElectricIssueSupplyModalShow = {setElectricIssueSupplyModalShow}
            taskId = {taskId}
            id = {id}
            taskName = {taskName}
        />
        <ElectricProductionSingForModal 
            electricProductionSingForModalShow = {electricProductionSingForModalShow}
            setElectricProductionSingForModalShow = {setElectricProductionSingForModalShow}
            taskId = {taskId}
            id = {id}
            taskName = {taskName}
        />
        <ElectricProductionModal 
            electricProductionModalShow = {electricProductionModalShow}
            setElectricProductionModalShow = {setElectricProductionModalShow}
            taskId = {taskId}
            id = {id}
            taskName = {taskName}
        />
        <ElectricQualitySignForModal 
            electricQualitySignForModalShow = {electricQualitySignForModalShow}
            setElectricQualitySignForModalShow = {setElectricQualitySignForModalShow}
            taskId = {taskId}
            id = {id}
            taskName = {taskName}
        />
        <ElectricQualityIssueModal 
            electricQualityIssueModalShow = {electricQualityIssueModalShow}
            setElectricQualityIssueModalShow = {setElectricQualityIssueModalShow}
            taskId = {taskId}
            id = {id}
            taskName = {taskName}
        />
    </>
}

export default Production;