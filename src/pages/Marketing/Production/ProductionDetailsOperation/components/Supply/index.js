import React, { useState } from 'react';
import SignForSupplyModal from './SignForSupplyModal';
import SupplyIssueWarehouseModal from './SupplyIssueWarehouseModal'
import { Row, Col, Button} from "antd";

const Supply = ({  taskName, taskId, id }) => {
    const [signForSupplyModalShow, setSignForSupplyModalShow] = useState(false);// 供应部签收modal
    const [supplyIssueWarehouseModalShow, setSupplyIssueWarehouseModalShow] = useState(false); // 供应部下发给仓管
    //签收
    const hanldeNextStep = () => {
        setSignForSupplyModalShow(true);
    };
    //供应部下发给仓管
    const hanldeNextStepSkill = () => {
        setSupplyIssueWarehouseModalShow(true);
    }
    //根据状态选择按钮的显示
    const buttonShow = () => {
        switch (taskName) {
            case '供应部签收(技术)':
                return <Col span={3}><Button type='primary' onClick={() => hanldeNextStep()}>供应部签收(技术)</Button></Col>;
            case '供应部作业(技术)':
                return <Col span={3}><Button type='primary' onClick={() => hanldeNextStepSkill()}>供应部作业(技术)</Button></Col>;
            case '供应部签收(智能)':
                return <Col span={3}><Button type='primary' onClick={() => hanldeNextStep()}>供应部签收(智能)</Button></Col>;
            case '供应部作业(智能)':
                return <Col span={3}><Button type='primary' onClick={() => hanldeNextStepSkill()}>供应部作业(智能)</Button></Col>;
            default:
                break;
        }
    }
    return <>
        <Row>
            {buttonShow()}
        </Row>
        <SignForSupplyModal
            signForSupplyModalShow={signForSupplyModalShow}
            setSignForSupplyModalShow={setSignForSupplyModalShow}
            taskId = {taskId}
            id = {id}
        />
        <SupplyIssueWarehouseModal
            supplyIssueWarehouseModalShow={supplyIssueWarehouseModalShow}
            setSupplyIssueWarehouseModalShow={setSupplyIssueWarehouseModalShow}
            taskId = {taskId}
            id = {id}
        />
    </>
}

export default Supply;