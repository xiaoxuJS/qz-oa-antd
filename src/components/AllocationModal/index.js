import React from 'react';
import {
  Modal
} from 'antd'

const AllocationModal = ({ modalShow, handlePeople }) => {
  const handleOk = () => {
    handlePeople(false)
  };

  const handleCancel = () => {
    handlePeople(false)
  };
  return <Modal title="责任人列表" visible={modalShow} onOk={handleOk} onCancel={handleCancel}>
    
  </Modal>
}

export default AllocationModal;