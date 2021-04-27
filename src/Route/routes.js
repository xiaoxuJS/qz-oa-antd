import React from "react";
//导航栏
import { DatabaseOutlined, LaptopOutlined } from "@ant-design/icons";
//客户线索-我的线索-待处理
import CluesCustomerAwait from "../pages/CluesCustomer/MyClue/CluesCustomerAwait";
//客户线索-我的线索-待处理-线索报备
import CluesCustomerAwaitAdd from "../pages/CluesCustomer/MyClue/CluesCustomerAwaitAdd";
//客户线索-我的线索-待处理-线索详情
import CluesCustomerAwaitDetails from "../pages/CluesCustomer/MyClue/CluesCustomerAwaitDetails";

//客户线索-线索池-已分配
import ClueAllAlready from "../pages/CluesCustomer/ClueAll/ClueAllAlready";
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

//头部导航
const menuTopRouter = [
  {
    key: 'clues',
    meta: {
      title: "客户线索",
      icon: <DatabaseOutlined />,
    },
    path: "/",
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
  {
    key: 'park',
    meta: {
      title: "停车场管理",
      icon: <LaptopOutlined />,
    },
    path: "/parkMessage",
    component: ParkMessage,
  },
];
//侧边栏导航-客户线索
const menuLeftUserRouter = [
  {
    key: 'clues',
    meta: {
      title: "我的线索",
      icon: <DatabaseOutlined />,
    },
    path: "/",
    component: CluesCustomerAwait,
    page: [
      {
        key: 'cluesAwait',
        meta: {
          title: "待处理",
          icon: <DatabaseOutlined />,
        },
        path: "/",
        component: CluesCustomerAwait,
      },
      {
        key: 'cluesIng',
        meta: {
          title: "跟进中",
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
          title: "待分配",
          icon: <DatabaseOutlined />,
        },
        path: "/clueAllAtait",
        component: ClueAllAtait,
      },
      {
        key: 'cluesAllAlready',
        meta: {
          title: "已分配",
          icon: <DatabaseOutlined />,
        },
        path: "/clueAllAlready",
        component: ClueAllAlready,
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
      title: "活动客户",
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
//对导航栏进行数据处理
const dataDispose = (data) => {
  let newArray = [];
  data.forEach((element) => {
    let dataV = [];
    if(element.hasOwnProperty('page')) {
      element.page.forEach((item) => {
        dataV.push(item);
      });
      newArray = [...newArray,...dataV];
    }else{
      newArray = [...data];
    }
    
  });
  return newArray;
};

let menuLeftUserRouterPage = dataDispose(menuLeftUserRouter);
let menuLeftItemRouterPage = dataDispose(menuLeftItemRouter);
let meunParkMessageRouterPage = dataDispose(meunParkMessageRouter);
let menuLeftClientRouterPage = dataDispose(menuLeftClientRouter);

const userRouter = [
  ...menuTopRouter,
  ...menuLeftUserRouterPage,
  ...menuLeftItemRouterPage,
  ...meunParkMessageRouterPage,
  ...menuLeftClientRouterPage,
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
    component:ParkMessageDetails
  },
];
export { menuTopRouter, menuLeftUserRouter, menuLeftItemRouter, meunParkMessageRouter, menuLeftClientRouter ,  userRouter };
