import React, { useState, useEffect, useCallback, useContext } from "react";
import {
    postSofClueFindPoolClue,
    getSofClueUpdateClue,
    getSofClueDeleteClue
} from '../../../../Api/cluesUrl';
//公共数据
import {
    myContext
} from '../../../../reducer';
//搜索组件
import SelectAtaitClue from './components/SelectAtaitClue';
//分配弹框组件
import ClueAllotModal from './components/ClueAllotModal';
import { ClueAllAwaitAll } from "./style";
//antd
import { PageHeader, Table, Space, Button, Popconfirm, Modal, message } from "antd";
import { ExclamationCircleOutlined } from '@ant-design/icons';
const { confirm } = Modal;
/**
 * @author 徐博亚
 */
const ClueAllAwait = () => {
    const { state } = useContext(myContext);
    const { cluesType } = state;
    const [clueAllotModalShow, setClueAllotModalShow] = useState(false)
    const [listData, setListData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1); //当前页
    const [size, setSize] = useState(10); //当前页条数
    const [total, setTotal] = useState(0); //一共条数
    const [selectData, setSelectData] = useState({});
    const [fenpeiClickData, setFenpeiClickData] = useState(null);
    const [clickId, setClickId] = useState(null);
    const pageTypeValue = [
        '待处理',
        '跟进中',
        '已转客户',
        '已搁置'
      ]

    const listFun = useCallback(
        (parames = {
            currentPage: 1,
            size: 10,
            status: cluesType
        }) => {
            ; (async () => {
                const { code, msg, data } = await postSofClueFindPoolClue(parames);
                if (code === '20000') {
                    setSize(parames.size);
                    setCurrentPage(parames.currentPage)
                    setListData(data.records);
                    setTotal(data.total);
                } else {
                    message.error(msg);
                }
            })();

        },
        [cluesType],
    )

    useEffect(() => {
        listFun();
    }, [listFun])
    // 序号、客户名称、部署类型、项目预算、周期、成交率、报备人(报备时间)
    const columns = [
        {
            title: '#',
            render: (text, record, index) => <span>{index + 1}</span>,
        },
        {
            title: '客户名称',
            dataIndex: 'clientName',
            render: text => <Button type="link">{text}</Button>,
        },
        {
            title: '预算',
            dataIndex: 'budget'
        },
        {
            title: '周期',
            dataIndex: 'endTime'
        },
        {
            title: '报备人员',
            dataIndex: 'name'
        },
        {
            title: '报备时间',
            dataIndex: 'reportTime'
        },
        {
            title: '周期',
            dataIndex: 'startTime'
        },
        {
            title: '成交率',
            dataIndex: 'turnover'
        },
        {
            title: '操作',
            key: 'action',
            render: (text, record) => (
                <Space size="middle">
                    <Button type="link" onClick={() => handleClueAllotModalShow(true, record.clientName,record.id )}>分配</Button>
                    <Popconfirm
                        placement="topRight"
                        title={"您确认要转搁置吗？"}
                        onConfirm={() => handleShiftLayAside(record.id)}
                        okText="确定"
                        cancelText="取消"
                    >
                        <Button danger type="text">
                            转搁置
                            </Button>
                    </Popconfirm>
                    <Button danger type="text" onClick={() => handleDeleteClue(record.id)}>
                        删除
                    </Button>
                </Space>
            ),
        },
    ];
    //分配弹框显示
    const handleClueAllotModalShow = (show, name, id) => {
        setFenpeiClickData({
            username: name
        })
        setClickId(id);
        setClueAllotModalShow(show);
        
    }
    //转搁置
    const handleShiftLayAside = id => {
        ;(async () => {
            const {code, msg} = await getSofClueUpdateClue({
                clueId: id,
                status: '3'
            });
            if(code === '20000') {
                message.success('转搁置成功！');
                const parames = {
                    ...selectData,
                    currentPage: currentPage,
                    size: size,
                    status: cluesType
                }
                listFun(parames);
            }else{
                message.error(msg);
            }
        })();
    }
    //删除当前线索
    const handleDeleteClue = (id) => {
        confirm({
            title: '确认删除本条线索吗？',
            icon: <ExclamationCircleOutlined />,
            onOk() {
                ;(async () => {
                    const {code, msg} = await getSofClueDeleteClue({clueId: id});
                    if(code === '20000') {
                        const parames = {
                            ...selectData,
                            currentPage: currentPage,
                            size: size,
                            status: cluesType
                        }
                        listFun(parames);
                        message.success('删除成功！');
                    } else{
                        message.error(msg);
                    }
                })();
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    }
    //搜索改变列表
    const handleChangeList = (values) => {
        setSelectData(values);
        values.currentPage = 1;
        values.size = 10;
        values.status = cluesType;
        listFun(values);
    }
    const handleListgReset = () => {
        listFun();
    }
    //分页
    const pagination = {
        //是否可以改变pagesize//
        showSizeChanger: true,
        //是否可以快速跳转到某页
        showQuickJumper: true,
        //展示一共有多少条数据//
        showTotal: () => `共${total}条`,
        //每页条数
        pageSize: size,
        //当前页数
        current: currentPage,
        //数据总数
        total: total,
        //pageSize 变化的回调
        onShowSizeChange: (current, pageSize) => changePageSize(pageSize, current),
        //页码改变的回调，参数是改变后的页码及每页条数
        onChange: (current) => changePage(current),
    }
    //改变每页条数
    const changePageSize = (pageSizeFun, current) => {
        const parames = {
            ...selectData,
            currentPage: current,
            size: pageSizeFun,
            status: cluesType
        }
        listFun(parames);
    }
    //改变页数
    const changePage = (current) => {
        const parames = {
            ...selectData,
            currentPage: current,
            size: size,
            status: cluesType
        }
        listFun(parames);
    }
    return (
        <ClueAllAwaitAll>
            <PageHeader
                className="site-page-header"
                title={`我的线索-${pageTypeValue[cluesType]}`}
            ></PageHeader>
            <SelectAtaitClue handleChangeList={handleChangeList} handleListgReset={handleListgReset} />
            <Table columns={columns} dataSource={listData} rowKey='id' pagination={pagination} />
            <ClueAllotModal 
                showHide={clueAllotModalShow} 
                handleClueAllotModalShow={handleClueAllotModalShow} 
                fenpeiClickData = {fenpeiClickData} 
                setClickId  = {setClickId}
                listFun = {listFun}
                clickId = {clickId}
             />
        </ClueAllAwaitAll>
    );
};

export default ClueAllAwait;
