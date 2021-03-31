import React from "react";
import {
  useHistory
} from 'react-router-dom'
import { ReserveIOTItemAll } from "./style";
import { PageHeader, Button } from "antd";

const ReserveIOTItem = () => {
  const history = new useHistory();
  const handleAddClue = () => {
    history.push('/ReserveItem/add')
  }
  return (
    <ReserveIOTItemAll>
      <PageHeader
        className="site-page-header"
        title="我的线索-待处理"
        extra={[
          <Button
            key="1"
            type="primary"
            onClick={() => handleAddClue()}
          >
            项目报备
          </Button>,
        ]}
      ></PageHeader>
    </ReserveIOTItemAll>
  );
};
export default ReserveIOTItem;
