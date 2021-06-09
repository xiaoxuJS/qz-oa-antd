import React, { useState, useEffect, useCallback } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { getSofPlanDetailPlanDetail } from '../../../../Api/productionUrl';
import {ip} from '../../../../Api/http'
//营销中心操作
import Marketing from './components/Marketing';
//技术部
import Skill from './components/Skill';
//智能部
import Electric from './components/Electric'
//供应部
import Supply from './components/Supply';
//生产部
import Production from './components/Production';
//仓管
import Warehouse from './components/Warehouse';
//质检
import Quality from './components/Quality';
//高管
import Executive from './components/Executive'

import {
    ProductionDetailsOperationAll
} from './style';
import { PageHeader, Typography, message, Row, Col, Space, Button } from "antd";

const { Title } = Typography;

const ProductionDetailsOperation = () => {
    const history = new useHistory();
    const location = new useLocation();
    const [operationShow, setOperationShow] = useState(false);
    const [planDetailDTO, setPlanDetailDTO] = useState({});
    const [detailAuxDTOS, setDetailAuxDTOS] = useState([]);
    const productionDetailsFun = useCallback(
        () => {
            ; (async () => {
                const { code, msg, data } = await getSofPlanDetailPlanDetail({ plan: location.state.id });
                if (code === '20000') {
                    // setProductionDetailsData(data);
                    console.log(data.setPlanDetailDTO)
                    setPlanDetailDTO(data.planDetailDTO);
                    setDetailAuxDTOS(data.detailAuxDTOS);
                } else {
                    message.error(msg);
                }
            })();
        },
        [location.state],
    )
    useEffect(() => {
        if (location.state.type === 'details') {
            setOperationShow(false)
        } else if (location.state.type === 'operation') {
            setOperationShow(true)
        }
        productionDetailsFun();
    }, [location.state, productionDetailsFun])

    //返回
    const handleGoBack = () => {
        history.go('-1')
    }
    //导出计划
    const handleExport = show => {
        let downloadElement = document.createElement("a");
        downloadElement.href = `${ip}/sof-plan-detail/export/detail?plan=${location.state.id}&preview=${show}`;
        document.body.appendChild(downloadElement);
        downloadElement.click();
        document.body.removeChild(downloadElement);
        window.URL.revokeObjectURL(downloadElement);
    }
    const flowShow = () => {
        switch (location.state.taskName) {
            case '下发计划':
            case '生产安排签收':
            case '生产安排作业':
            case '产品交付签收':
            case '产品交付':
                return <Marketing taskId={location.state.taskId} id={location.state.id} taskName={location.state.taskName} />
            case '技术总监签收':
            case '技术总监下发':
            case '技术部作业':
                return <Skill taskId={location.state.taskId} id={location.state.id} taskName={location.state.taskName} />
            case '智能部签收': //电气智能签收
            case '智能部作业': //下发供应部
                return <Electric taskId={location.state.taskId} id={location.state.id} taskName={location.state.taskName} />
            case '供应部签收': //供应部
            case '供应部作业': //供应部
                return <Supply taskId={location.state.taskId} id={location.state.id} taskName={location.state.taskName} />
            case '生产部签收':
            case '生产部作业':
                return <Production taskId={location.state.taskId} id={location.state.id} taskName={location.state.taskName} />
            case '仓管部签收':
            case '仓管部作业':
                return <Warehouse taskId={location.state.taskId} id={location.state.id} taskName={location.state.taskName} />
            case '质检部签收':
            case '质检部作业':
                return <Quality taskId={location.state.taskId} id={location.state.id} taskName={location.state.taskName} />
            case '高管签收':
            case '高管审批':
                return <Executive taskId={location.state.taskId} id={location.state.id} taskName={location.state.taskName} />
            default:
                break;
        }
    }
    return <ProductionDetailsOperationAll>
        <PageHeader
            className="site-page-header"
            title="生产计划详情"
            onBack={() => handleGoBack()}
            extra={[
                <Button key="1" type = 'primary' onClick = {() => handleExport(true)}>预览计划</Button>,
                <Button key="2" type = 'primary' onClick = {() => handleExport(false)}>导出计划</Button>
                
              ]}
        ></PageHeader>
        <Typography>
            {
                operationShow ? <>
                    <Title level={3}>操作</Title>
                    {flowShow()}
                </> : null
            }
            <Title level={3}>基本信息</Title>
            <Row>
                <Col span={3}>客户名称:</Col>
                <Col span={21}>{planDetailDTO.client}</Col>
                <Col span={3}>企业性质及评估:</Col>
                <Col span={21}>{planDetailDTO.nature}</Col>
                <Col span={3}>合同编号:</Col>
                <Col span={21}>{planDetailDTO.contractNo}</Col>
                <Col span={3}>销售人员:</Col>
                <Col span={21}>{planDetailDTO.sell}</Col>
                <Col span={3}>计划创建人:</Col>
                <Col span={21}>{planDetailDTO.createUser}</Col>
                <Col span={3}>产品型号:</Col>
                <Col span={21}>{planDetailDTO.model}</Col>
                <Col span={3}>订单数量:</Col>
                <Col span={21}>{planDetailDTO.orderSize}</Col>
                <Col span={3}>合同总价:</Col>
                <Col span={21}>{planDetailDTO.contractPrice}</Col>
                <Col span={3}>预计交货日期:</Col>
                <Col span={21}>{planDetailDTO.deliveryDate}</Col>
                <Col span={3}>合同下发日期:</Col>
                <Col span={21}>{planDetailDTO.issue}</Col>
            </Row>
            {
                detailAuxDTOS.map(item => (
                    <>
                        <Title level={3}>{item.work}</Title>
                        <Row>
                            <Col span={3}>负责人:</Col>
                            <Col span={21}>{item.operation}</Col>
                            <Col span={3}>预计完成时间:</Col>
                            <Col span={21}>{item.targetDate}</Col>
                            <Col span={3}>开始时间:</Col>
                            <Col span={21}> {item.receiptDate}</Col>
                            <Col span={3}>实际完成时间:</Col>
                            <Col span={21}>{item.practicalDate}</Col>
                            <Col span={3}>批注:</Col>
                            <Col span={21}>{item.comment}</Col>
                            <Col span={3}>附件:</Col>
                            <Col span={21}>
                                <Space >
                                    {
                                        item.files.length > 0 && item.files.map(element => <a href={element.path} >{element.fileName}</a>)
                                    }
                                </Space>
                            </Col>

                        </Row>
                    </>
                ))
            }


        </Typography>
    </ProductionDetailsOperationAll>
}

export default ProductionDetailsOperation;