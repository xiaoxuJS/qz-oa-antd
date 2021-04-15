import React from 'react';
import { Modal } from 'antd';
const DeleteParkMessage = ({ deleteParkMessageShow, deleteParkMessageOk, deleteParkMessageCancel }) => {
    return (
        <Modal title="删除车辆信息" visible={deleteParkMessageShow} onOk={deleteParkMessageOk} onCancel={deleteParkMessageCancel}>
            <p>确定要删除当前车辆信息吗？</p>
        </Modal>
    )
}
export default DeleteParkMessage;