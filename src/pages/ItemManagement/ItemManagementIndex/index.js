import React, { useEffect, useCallback, useState } from "react";
import {
    useHistory
} from 'react-router-dom';
//api
import {
    postSofItemFindItem,
    getSofItemFindLogItem,
    postSofItemLogItem
} from '../../../Api/itemUrl'
import SelectItemManagement from './components/SelectItemManagement';
import { ItemManagementIndexAll } from "./style";
import { PageHeader, Button, Table, message, Space, Modal } from "antd";
const { confirm } = Modal;

const ItemManagementIndex = () => {
    const history = new useHistory();
    const [listData, setListData] = useState([]); //列表数据
    const [listTotal, setListTotal] = useState([]); //一共有多少条数据
    const [current, setcCurrent] = useState(1); // 当前页
    const [pageSize, setPageSize] = useState(10); //每页条数
    const [selectValue, setSelectValue] = useState(null); //搜索条件
    const getItemList = useCallback((promes) => {
        ; (async () => {
            const { code, data, msg } = await postSofItemFindItem(promes);
            if (code === '20000') {
                setListData(data.records);
                setListTotal(data.total);
            } else {
                message.error(msg);
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
            dataIndex: 'itemName',
            key: 'itemName',
            render: text => <Button type="link" onClick={() => handleEnterReserveItemDetails()}>{text}</Button>
        },
        {
            title: '项目简介',
            dataIndex: 'synopsis',
            key: 'synopsis',
        },
        {
            title: '剩余天数',
            dataIndex: 'surplusDay',
            key: 'surplusDay',
        },
        {
            title: '预算准确率',
            dataIndex: 'accuracy',
            key: 'accuracy',
        },
        {
            title: '所属客户',
            dataIndex: 'clientName',
            key: 'clientName',
        },
        {
            title: '状态',
            render: (text, record) => (
                <Space size="middle">
                    <Button type="link" onClick={() => handleGetItemStatus(record.id)}>获取状态</Button>
                    <Button type="link" onClick={() => handleChangeItemStatus(record.id)}>更新状态</Button>
                </Space>
            ),
        },
        {
            title: '操作',
            render: (text, record) => (
                <Space size="middle">
                    <Button type="link" onClick={() => handleItemChange(record.id)}>项目维护</Button>
                </Space>
            ),
        },

    ];
    //项目维护
    const handleItemChange = id => {
        history.push({pathname: '/itemManagement/add', state: {id}})
    };
     //获取当前项目状态
    const handleGetItemStatus = id => {
        ;(async () => {
            const {code, msg, data} = await getSofItemFindLogItem({itemId:id});
            if(code === '20000') {
                message.success(`当前项目阶段为${data}`)
            }else{
                message.error(msg);
            }
        })();
    };
    //更新当前项目状态
    const handleChangeItemStatus = id => {
        ;(async () => {
            const {code, msg, data} = await getSofItemFindLogItem({itemId:id});
            if(code === '20000') {
                confirm({
                    title: `当前状态为${data}!是否更新到下个状态！`,
                    onOk() {
                      ;(async () => {
                        const {code, msg} = await postSofItemLogItem({itemId:id});
                        if(code === '20000') {
                            message.success('更新成功!');
                        }else{
                            message.error(msg);
                        }
                      })();
                    },
                    onCancel() {
                      console.log('Cancel');
                    },
                  });
            }else{
                message.error(msg);
            }
        })();
    }
    const handleAddREserveItem = () => {
        history.push('/itemManagement/add')
    }
    //进入项目详情
    const handleEnterReserveItemDetails = () => {
        history.push('/itemManagement/Details')
    };
    //搜索
    const handleChangeList = values => {
        console.log(values)
        const params = {
            clientId: values.clientId, //所属客户
            currentPage: 1, //当前页
            itemStatus: 0, //	项目状态(0:储备项目,1:进行中项目,2:质保段项目,3:已成交项目)
            itemType: 1, //项目类型(1:物联网项目,2:传统项目,3:软件项目)
            pm: values.pm, //项目经理
            process: values.process, //当前流程(0:未开始,1:方案设计,2:开发生产,3:调试,4:部署安装,5:交付)
            size: 10 //每页条数
        }
        setSelectValue(values);
        getItemList(params);
    };
    //重置搜索
    const handleSelectReset = () => {
        const params = {
            // "clientId": 0, //所属客户
            currentPage: 1, //当前页
            itemStatus: 0, //	项目状态(0:储备项目,1:进行中项目,2:质保段项目,3:已成交项目)
            itemType: 1, //项目类型(1:物联网项目,2:传统项目,3:软件项目)
            // "pm": 0, //项目经理
            // "process": 0, //当前流程(0:未开始,1:方案设计,2:开发生产,3:调试,4:部署安装,5:交付)
            size: 10 //每页条数
        }
        setcCurrent(1);
        setPageSize(10);
        setSelectValue(null);
        getItemList(params);
    }
    //分页函数
    const onShowSizeChange = (current, pageSize) => {
        console.log(current, pageSize);
    };
    const handleChangePage = (page, pageSize) => {
        const params = {
            clientId: selectValue.clientId, //所属客户
            currentPage: page, //当前页
            itemStatus: 0, //	项目状态(0:储备项目,1:进行中项目,2:质保段项目,3:已成交项目)
            itemType: 1, //项目类型(1:物联网项目,2:传统项目,3:软件项目)
            pm: selectValue.pm, //项目经理
            process: selectValue.process, //当前流程(0:未开始,1:方案设计,2:开发生产,3:调试,4:部署安装,5:交付)
            size: pageSize //每页条数
        }
        setcCurrent(page);
        getItemList(params);
    }
    //分页设置
    const pagination = {
        current: current,
        pageSize: pageSize,
        total: listTotal,
        showTotal: total => `共 ${total} 条`,
        onChange: handleChangePage,
        onShowSizeChange: onShowSizeChange
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
            <SelectItemManagement handleChangeList={handleChangeList} handleSelectReset={handleSelectReset} />
            <Table dataSource={listData} columns={columns} pagination={pagination} rowKey = 'id' />
        </ItemManagementIndexAll>
    );
};
export default ItemManagementIndex;
