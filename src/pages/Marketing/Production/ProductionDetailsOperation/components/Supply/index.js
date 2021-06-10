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
            case '供应部签收':
                return <Col span={3}><Button type='primary' onClick={() => hanldeNextStep()}>(供应部)签收</Button></Col>;
            case '供应部作业':
                return <Col span={3}><Button type='primary' onClick={() => hanldeNextStepSkill()}>下发</Button></Col>;
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