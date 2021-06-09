import React, { useState } from 'react';
import SignForWarehouseModal from './SignForWarehouseModal';
import IssueMarketingModal from './IssueMarketingModal'
import { Row, Col, Button } from "antd";

const Warehouse = ({ taskName, taskId, id }) => {
    const [signForWarehouseModalShow, setSignForWarehouseModalShow] = useState(false); //仓管部签收modal
    const [issueMarketingModalShow, setIssueMarketingModalShow] = useState(false); // 仓管下发营销中心
    //签收
    const hanldeNextStep = () => {
        setSignForWarehouseModalShow(true);
    };
    //供应部物品整理完成返回给技术中心
    const hanldeNextStepSkill = () => {
        setIssueMarketingModalShow(true)
    }
    //根据状态选择按钮的显示
    const buttonShow = () => {
        switch (taskName) {
            case '仓管部签收':
                return <Col span={3}><Button type='primary' onClick={() => hanldeNextStep()}>(仓管)签收</Button></Col>;
            case '仓管部作业':
                return <Col span={3}><Button type='primary' onClick={() => hanldeNextStepSkill()}>（仓管）下发 (营销中心)</Button></Col>;
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
            taskId = {taskId}
            id = {id}
        />
        <IssueMarketingModal
            issueMarketingModalShow={issueMarketingModalShow}
            setIssueMarketingModalShow={setIssueMarketingModalShow}
            taskId = {taskId}
            id = {id}
        />
    </>
}

export default Warehouse;