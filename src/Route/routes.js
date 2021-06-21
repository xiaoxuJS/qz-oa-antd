import React from "react";
//导航栏icon
import { DatabaseOutlined, LaptopOutlined } from "@ant-design/icons";
//工作台
import Home from '../pages/Home'
//营销管理
//列表 --生产计划
import Production from '../pages/Marketing/Production/Production';
//已完成生产计划
import ProductionOver from '../pages/Marketing/Production/ProductionOver';
//全部生产计划浏览
import ProductionAll from '../pages/Marketing/Production/ProductionAll'
//列表 -- 已删除生产计划
import ProductionDelete from '../pages/Marketing/Production/ProductionDelete'
//详情操作
import ProductionDetailsOperation from '../pages/Marketing/Production/ProductionDetailsOperation';
//部门留言页面
import ProductionLeaveWord from '../pages/Marketing/Production/ProductionLeaveWord';

//生产终止页面
//待处理停止页面
import WaitingStopProduction from '../pages/Marketing/StopProduction/WaitingStopProduction';
//已处理停止页面
import WaitingStartProduction from '../pages/Marketing/StopProduction/WaitingStartProduction';
//营销计划 其他
import SendADuplicateTo from '../pages/Marketing/ElseList/SendADuplicateTo'

//客户线索-我的线索-待处理
import CluesCustomerAwait from "../pages/CluesCustomer/MyClue/CluesCustomerAwait";
//客户线索-我的线索-待处理-线索报备
import CluesCustomerAwaitAdd from "../pages/CluesCustomer/MyClue/CluesCustomerAwaitAdd";
//客户线索-我的线索-待处理-线索详情
import CluesCustomerAwaitDetails from "../pages/CluesCustomer/MyClue/CluesCustomerAwaitDetails";
//客户线索-线索池-待分配
import ClueAllAtait from "../pages/CluesCustomer/ClueAll/ClueAllAtait";

//项目管理
//列表页
import ItemManagementIndex from '../pages/ItemManagement/ItemManagementIndex';
//新增项目页面
import ItemManagementAdd from '../pages/ItemManagement/ItemManagementAdd';
//项目详情页
import ItemManagementDetails from '../pages/ItemManagement/ItemManagementDetails'

//客户管理
//list
import CompanyClientIndex from '../pages/ClientMangement/CompanyClient/CompanyClientIndex';
//add
import CompanyClientAdd from '../pages/ClientMangement/CompanyClient/CompanyClientAdd';
//details
import CompanyClientDetails from '../pages/ClientMangement/CompanyClient/CompanyClientDetails'
//停车场管理-车辆信息-车辆列表
import ParkMessage from "../pages/ParkingLot/ParkMessage/ParkMessage";
//车辆详情
import ParkMessageDetails from "../pages/ParkingLot/ParkMessage/ParkMessageDetails";
//停车场管理-系统管理-车厂设置
import ParkingManagement from "../pages/ParkingLot/SystemManagement/ParkingManagement";

//人事管理
//人事管理-人员管理-list
import PersonnelAllManagementList from '../pages/PersonnelManagement/PersonnelAllManagement/PersonnelAllManagementList';
//部门管理
import PostManagement from '../pages/PersonnelManagement/PostManagement';
//权限管理
import AuthorManagement from '../pages/PersonnelManagement/AuthorManagement';

//头部导航
const menuTopRouter = [
    {
        key: 'Home',
        meta: {
            title: "工作台",
            icon: <DatabaseOutlined />,
        },
        path: "/",
        component: Home,
    },
    {
        key: 'production',
        meta: {
            title: "营销管理",
            icon: <DatabaseOutlined />,
        },
        path: "/production",
        component: Production,
    },
    {
        key: 'clues',
        meta: {
            title: "客户线索",
            icon: <DatabaseOutlined />,
        },
        path: "/clues/customer/await",
        component: CluesCustomerAwait,
    },
    {
        key: 'item',
        meta: {
            title: "项目管理",
            icon: <LaptopOutlined />,
        },
        path: "/itemManagement/reserve/IOT",
        component: ItemManagementIndex,
    },
    {
        key: 'client',
        meta: {
            title: "客户管理",
            icon: <LaptopOutlined />,
        },
        path: "/company/client/index",
        component: CompanyClientIndex,
    },
    // {
    //     key: 'park',
    //     meta: {
    //         title: "停车场管理",
    //         icon: <LaptopOutlined />,
    //     },
    //     path: "/parkMessage",
    //     component: ParkMessage,
    // },
    {
        key: 'personnel',
        meta: {
            title: "人事管理",
            icon: <LaptopOutlined />,
        },
        path: "/personnel/all/management/list",
        component: PersonnelAllManagementList,
    },
];
//侧边栏导航-营销管理
const menuLeftProductionRouter = [
    {
        key: 'production',
        meta: {
            title: "生产计划",
            icon: <DatabaseOutlined />,
        },
        path: "/production",
        component: Production,
        page: [
            {
                key: 'productionList',
                meta: {
                    title: "进行中",
                    icon: <DatabaseOutlined />,
                },
                path: "/production/list",
                component: Production,
            },
            {
                key: 'productionOver',
                meta: {
                    title: "已完成",
                    icon: <DatabaseOutlined />,
                },
                path: "/Production/over",
                component: ProductionOver,
            },
            {
                key: 'ProductionAll',
                meta: {
                    title: "全部计划",
                    icon: <DatabaseOutlined />,
                },
                path: "/production/all",
                component: ProductionAll,
            },
            {
                key: 'productionDelete',
                meta: {
                    title: "已删除",
                    icon: <DatabaseOutlined />,
                },
                path: "/Production/delete",
                component: ProductionDelete,
            }
        ],
    },
    {
        key: 'stopProduction',
        meta: {
            title: "终止计划",
            icon: <DatabaseOutlined />,
        },
        path: "/waiting/stopProduction",
        component: WaitingStopProduction,
        page: [
            {
                key: 'waitingStopProduction',
                meta: {
                    title: "待审批",
                    icon: <DatabaseOutlined />,
                },
                path: "/waiting/stopProduction",
                component: WaitingStopProduction,
            },
            {
                key: 'waitingStartProduction',
                meta: {
                    title: "已完成",
                    icon: <DatabaseOutlined />,
                },
                path: "/waiting/startProduction",
                component: WaitingStartProduction,
            }
        ],
    },
    {
        key: 'elseList',
        meta: {
            title: "其他",
            icon: <DatabaseOutlined />,
        },
        path: "/sendADuplicateTo",
        component: SendADuplicateTo,
        page: [
            {
                key: 'sendADuplicateTo',
                meta: {
                    title: "抄送",
                    icon: <DatabaseOutlined />,
                },
                path: "/sendADuplicateTo",
                component: SendADuplicateTo,
            }
        ],
    }
];
//侧边栏导航-客户线索
const menuLeftUserRouter = [
    {
        key: 'clues',
        meta: {
            title: "我的线索",
            icon: <DatabaseOutlined />,
        },
        path: "/clues/customer/await",
        component: CluesCustomerAwait,
        page: [
            {
                key: 'cluesAwait',
                meta: {
                    title: "跟进中",
                    icon: <DatabaseOutlined />,
                },
                path: "/clues/customer/await",
                component: CluesCustomerAwait,
            },
            {
                key: 'cluesIng',
                meta: {
                    title: "已转客户",
                    icon: <DatabaseOutlined />,
                },
                path: "/cluesCustomerAwait/ing",
                component: CluesCustomerAwait,
            },
            {
                key: 'cluesAbandon',
                meta: {
                    title: "已搁置",
                    icon: <DatabaseOutlined />,
                },
                path: "/cluesCustomerAwait/abandon",
                component: CluesCustomerAwait,
            },
        ],
    },
    {
        key: 'cluesAll',
        meta: {
            title: "线索池",
            icon: <DatabaseOutlined />,
        },
        path: "/clueAllAtait",
        component: ClueAllAtait,
        page: [
            {
                key: 'cluesAllAtait',
                meta: {
                    title: "跟进中",
                    icon: <DatabaseOutlined />,
                },
                path: "/clueAllAtait",
                component: ClueAllAtait,
            },
            {
                key: 'cluesAllAlready',
                meta: {
                    title: "已转客户",
                    icon: <DatabaseOutlined />,
                },
                path: "/clueAllAlready",
                component: ClueAllAtait,
            },
            {
                key: 'cluesAllShelve',
                meta: {
                    title: "已搁置",
                    icon: <DatabaseOutlined />,
                },
                path: "/cluesAllShelve",
                component: ClueAllAtait,
            },
        ],
    },
];
//侧边栏导航-项目管理
const menuLeftItemRouter = [
    {
        key: 'item',
        meta: {
            title: "储备项目",
            icon: <DatabaseOutlined />,
        },
        path: "/itemManagement/reserve/IOT",
        component: ItemManagementIndex,
        page: [
            {
                key: 'itemReserveIOT',
                meta: {
                    title: "物联网项目",
                    icon: <DatabaseOutlined />,
                },
                path: "/itemManagement/reserve/IOT",
                component: ItemManagementIndex,
            },
            {
                key: 'itemReserveTradition',
                meta: {
                    title: "传统项目",
                    icon: <DatabaseOutlined />,
                },
                path: "/itemManagement/reserve/tradition",
                component: ItemManagementIndex,
            },
            {
                key: 'itemReserveSoftware',
                meta: {
                    title: "软件项目",
                    icon: <DatabaseOutlined />,
                },
                path: "/itemManagement/reserve/software",
                component: ItemManagementIndex,
            },
        ],
    },
    {
        key: 'itemIng',
        meta: {
            title: "进行中项目",
            icon: <DatabaseOutlined />,
        },
        path: "/itemManagement/ing/IOT",
        component: ItemManagementIndex,
        page: [
            {
                key: 'itemIngIOT',
                meta: {
                    title: "物联网项目",
                    icon: <DatabaseOutlined />,
                },
                path: "/itemManagement/ing/IOT",
                component: ItemManagementIndex,
            },
            {
                key: 'itemIngTradition',
                meta: {
                    title: "传统项目",
                    icon: <DatabaseOutlined />,
                },
                path: "/itemManagement/ing/tradition",
                component: ItemManagementIndex,
            },
            {
                key: 'itemIngSoftware',
                meta: {
                    title: "软件项目",
                    icon: <DatabaseOutlined />,
                },
                path: "/itemManagement/ing/software",
                component: ItemManagementIndex,
            },
        ],
    },
    {
        key: 'itemQuality',
        meta: {
            title: "质保段项目",
            icon: <DatabaseOutlined />,
        },
        path: "/itemManagement/quality/IOT",
        component: ItemManagementIndex,
        page: [
            {
                key: 'itemQualityIOT',
                meta: {
                    title: "物联网项目",
                    icon: <DatabaseOutlined />,
                },
                path: "/itemManagement/quality/IOT",
                component: ItemManagementIndex,
            },
            {
                key: 'itemQualityTradition',
                meta: {
                    title: "传统项目",
                    icon: <DatabaseOutlined />,
                },
                path: "/itemManagement/quality/tradition",
                component: ItemManagementIndex,
            },
            {
                key: 'itemQualitySoftware',
                meta: {
                    title: "软件项目",
                    icon: <DatabaseOutlined />,
                },
                path: "/itemManagement/quality/software",
                component: ItemManagementIndex,
            },
        ],
    },
    {
        key: 'itemOver',
        meta: {
            title: "已成交项目",
            icon: <DatabaseOutlined />,
        },
        path: "/itemManagement/over/IOT",
        component: ItemManagementIndex,
        page: [
            {
                key: 'itemOverIOT',
                meta: {
                    title: "物联网项目",
                    icon: <DatabaseOutlined />,
                },
                path: "/itemManagement/over/IOT",
                component: ItemManagementIndex,
            },
            {
                key: 'itemOverTradition',
                meta: {
                    title: "传统项目",
                    icon: <DatabaseOutlined />,
                },
                path: "/itemManagement/over/tradition",
                component: ItemManagementIndex,
            },
            {
                key: 'itemOverSoftware',
                meta: {
                    title: "软件项目",
                    icon: <DatabaseOutlined />,
                },
                path: "/itemManagement/over/software",
                component: ItemManagementIndex,
            },
        ],
    },
];

//侧边栏导航-客户管理
const menuLeftClientRouter = [
    {
        key: 'clientCompany',
        meta: {
            title: "企业客户",
            icon: <DatabaseOutlined />,
        },
        path: "/company/client/index",
        component: CompanyClientIndex
    },
    {
        key: 'clientCooperation',
        meta: {
            title: "合作客户",
            icon: <DatabaseOutlined />,
        },
        path: "/cooperation/client/index",
        component: CompanyClientIndex
    },
]

//侧边栏导航-停车场管理
const meunParkMessageRouter = [
    {
        key: 60,
        meta: {
            title: "停车信息",
            icon: <DatabaseOutlined />,
        },
        path: "/parkMessage",
        component: ParkMessage,
        page: [
            {
                key: 600,
                meta: {
                    title: "车辆列表",
                    icon: <DatabaseOutlined />,
                },
                path: "/parkMessage",
                component: ParkMessage,
            }
        ],
    },
    {
        key: 61,
        meta: {
            title: "系统管理",
            icon: <DatabaseOutlined />,
        },
        path: "/parkingManagement",
        component: ParkingManagement,
        page: [
            {
                key: 610,
                meta: {
                    title: "车厂管理",
                    icon: <DatabaseOutlined />,
                },
                path: "/parkingManagement",
                component: ParkingManagement,
            }
        ],
    },
];

//侧边栏导航-人事管理
const menuLeftPersonnelRouter = [
    {
        key: 'personnel',
        meta: {
            title: "人员管理",
            icon: <DatabaseOutlined />,
        },
        path: "/personnel/all/management/list",
        component: PersonnelAllManagementList,
        page: [
            {
                key: 'personnel',
                meta: {
                    title: "人员列表",
                    icon: <DatabaseOutlined />,
                },
                path: "/personnel/all/management/list",
                component: PersonnelAllManagementList,
            }
        ],
    },
    {
        key: 'postManagement',
        meta: {
            title: "部门管理",
            icon: <DatabaseOutlined />,
        },
        path: "/post/management",
        component: PostManagement,
    },
    {
        key: 'authorManagement',
        meta: {
            title: "权限管理",
            icon: <DatabaseOutlined />,
        },
        path: "/author/management",
        component: AuthorManagement,
    }
];
//对导航栏进行数据处理
const dataDispose = (data) => {
    let newArray = [];
    data.forEach((element) => {
        let dataV = [];
        if (element.hasOwnProperty('page')) {
            element.page.forEach((item) => {
                dataV.push(item);
            });
            newArray = [...newArray, ...dataV];
        } else {
            newArray = [...data];
        }

    });
    return newArray;
};


let menuLeftProductionRouterPage = dataDispose(menuLeftProductionRouter);
let menuLeftUserRouterPage = dataDispose(menuLeftUserRouter);
let menuLeftItemRouterPage = dataDispose(menuLeftItemRouter);
let meunParkMessageRouterPage = dataDispose(meunParkMessageRouter);
let menuLeftClientRouterPage = dataDispose(menuLeftClientRouter);
let menuLeftPersonnelRouterPage = dataDispose(menuLeftPersonnelRouter);

const userRouter = [
    ...menuTopRouter,
    ...menuLeftProductionRouterPage,
    ...menuLeftUserRouterPage,
    ...menuLeftItemRouterPage,
    ...meunParkMessageRouterPage,
    ...menuLeftClientRouterPage,
    ...menuLeftPersonnelRouterPage,
    {
        path: "/cluesCustomerAwait/add",
        component: CluesCustomerAwaitAdd,
    },
    {
        path: "/cluesCustomerAwait/details",
        component: CluesCustomerAwaitDetails,
    },
    //项目管理
    {
        path: "/itemManagement/add",
        component: ItemManagementAdd,
    },
    {
        path: "/itemManagement/Details",
        component: ItemManagementDetails,
    },
    //客户管理
    {
        path: "/company/client/add",
        component: CompanyClientAdd
    },
    {
        path: "/company/client/details",
        component: CompanyClientDetails
    },
    //停车场信息
    {
        path: "/parkMessage/details",
        component: ParkMessageDetails
    },
    //生产计划详情 操作
    {
        path: "/production/detailsoperation",
        component: ProductionDetailsOperation
    },
    //部门留言页面
    {
        path: "/production/leaveWord",
        component: ProductionLeaveWord
    },

];
export { menuTopRouter, menuLeftUserRouter, menuLeftItemRouter, meunParkMessageRouter, menuLeftClientRouter, menuLeftProductionRouter, userRouter, menuLeftPersonnelRouter };
