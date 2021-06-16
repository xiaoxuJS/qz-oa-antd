import React, { useState } from 'react';
import SignForWarehouseModal from './SignForWarehouseModal';
import IssueMarketingModal from './IssueMarketingModal';
import WarehouseIssueModal from './WarehouseIssueModal';
import WarehouseDeliveModal from './WarehouseDeliveModal'
import { Row, Col, Button } from "antd";

const Warehouse = ({ taskName, taskId, id }) => {
    const [signForWarehouseModalShow, setSignForWarehouseModalShow] = useState(false); //仓管部签收modal
    const [issueMarketingModalShow, setIssueMarketingModalShow] = useState(false); // 仓管下发营销中心
    const [warehouseSignForModalShow, setWarehouseSignForModalShow] = useState(false); //仓管签收
    const [warehouseDeliverModalShow, setWarehouseDeliverModalShow] = useState(false); //仓管发货
    //签收
    const hanldeNextStep = () => {
        setSignForWarehouseModalShow(true);
    };
    //供应部物品整理完成返回给技术中心
    const hanldeNextStepSkill = () => {
        setIssueMarketingModalShow(true)
    }
    //仓管签收
    const handleWarehouseSignFor = () => {
        setWarehouseSignForModalShow(true);
    }
    //仓管发货
    const handleWarehouseDeliver = () => {
        setWarehouseDeliverModalShow(true)
    }
    //根据状态选择按钮的显示
    const buttonShow = () => {
        switch (taskName) {
            case '仓管签收(技术)':
                return <Col span={3}><Button type='primary' onClick={() => hanldeNextStep()}>仓管签收(技术)</Button></Col>;
            case '仓管签收(智能)':
                return <Col span={3}><Button type='primary' onClick={() => hanldeNextStep()}>仓管签收(智能)</Button></Col>;
            case '仓管作业(技术)':
                return <Col span={3}><Button type='primary' onClick={() => hanldeNextStepSkill()}>仓管作业(技术)</Button></Col>;
            case '仓管作业(智能)':
                return <Col span={3}><Button type='primary' onClick={() => hanldeNextStepSkill()}>仓管作业(智能)</Button></Col>;
            case '仓管签收':
                return <Col span={3}><Button type='primary' onClick={() => handleWarehouseSignFor()}>仓管签收</Button></Col>;
            case '仓管发货':
                return <Col span={3}><Button type='primary' onClick={() => handleWarehouseDeliver()}>仓管发货</Button></Col>;
            default:
                break;
        }
    }
    return <>
        <Row>
            {buttonShow()}
        </Row>
        <SignForWarehouseModal
            signForWarehouseModalShow={signForWarehouseModalShow}
            setSignForWarehouseModalShow={setSignForWarehouseModalShow}
            taskId={taskId}
            id={id}
            taskName = {taskName}
        />
        <IssueMarketingModal
            issueMarketingModalShow={issueMarketingModalShow}
            setIssueMarketingModalShow={setIssueMarketingModalShow}
            taskId={taskId}
            id={id}
            taskName = {taskName}
        />
        <WarehouseIssueModal
            warehouseSignForModalShow={warehouseSignForModalShow}
            setWarehouseSignForModalShow={setWarehouseSignForModalShow}
            taskId={taskId}
            id={id}
            taskName = {taskName}
        />
        <WarehouseDeliveModal
            warehouseDeliverModalShow={warehouseDeliverModalShow}
            setWarehouseDeliverModalShow={setWarehouseDeliverModalShow}
            taskId={taskId}
            id={id}
            taskName = {taskName}
        />
    </>
}

export default Warehouse;