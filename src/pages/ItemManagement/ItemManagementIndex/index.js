import React, { useEffect, useCallback } from "react";
import {
    useHistory
} from 'react-router-dom';
//api
import {
    postSofItemFindItem
} from '../../../Api/itemUrl'
import SelectItemManagement from './components/SelectItemManagement';
import { ItemManagementIndexAll } from "./style";
import { PageHeader, Button, Table } from "antd";

const ItemManagementIndex = () => {
    // const [current, setcCurrent] = useState(1); // 当前页
    // const [pageSize, setPageSize] = useState(10); //每页条数
    const history = new useHistory();
    const dataSource = [
        {
            key: '1',
            name: '胡彦斌',
            age: 32,
            address: '西湖区湖底公园1号',
        },
        {
            key: '2',
            name: '胡彦祖',
            age: 42,
            address: '西湖区湖底公园1号',
        },
    ];
    const getItemList = useCallback((promes) => {
        ; (async () => {
            const { code } = await postSofItemFindItem(promes);
            if (code === '20000') {

            }
        })();
    }, [])
    useEffect(() => {
        const promes = {
            // "clientId": 0, //所属客户
            currentPage: 1, //当前页
            itemStatus: 0, //	项目状态(0:储备项目,1:进行中项目,2:质保段项目,3:已成交项目)
            itemType: 1, //项目类型(1:物联网项目,2:传统项目,3:软件项目)
            // "pm": 0, //项目经理
            // "process": 0, //当前流程(0:未开始,1:方案设计,2:开发生产,3:调试,4:部署安装,5:交付)
            size: 10 //每页条数
        }
        getItemList(promes);
    }, [getItemList])

    const columns = [
        {
            title: '#',
            render: (text, record, index) => <span>{index + 1}</span>
        },
        {
            title: '项目名称',
            dataIndex: 'name',
            key: 'name',
            render: text => <Button type="link" onClick={() => handleEnterReserveItemDetails()}>{text}</Button>
        },
        {
            title: '项目简介',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: '执行天数',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: '预算准确率',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: '所属客户',
            dataIndex: 'address',
            key: 'address',
        },
    ];
    const handleAddREserveItem = () => {
        history.push('/itemManagement/add')
    }
    //进入项目详情
    const handleEnterReserveItemDetails = () => {
        history.push('/ReserveItem/details')
    }
    return (
        <ItemManagementIndexAll>
            <PageHeader
                className="site-page-header"
                title="储备项目-物联网项目"
                extra={[
                    <Button
                        key="1"
                        type="primary"
                        onClick={() => handleAddREserveItem()}
                    >
                        项目报备
          </Button>,
                ]}
            ></PageHeader>
            <SelectItemManagement />
            <Table dataSource={dataSource} columns={columns} />;
        </ItemManagementIndexAll>
    );
};
export default ItemManagementIndex;
