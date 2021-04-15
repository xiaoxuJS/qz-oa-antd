import React from "react";
//导航栏
import { DatabaseOutlined, LaptopOutlined } from "@ant-design/icons";
//客户线索-我的线索-待处理
import CluesCustomerAwait from "../pages/CluesCustomer/MyClue/CluesCustomerAwait";
//客户线索-我的线索-待处理-线索报备
import CluesCustomerAwaitAdd from "../pages/CluesCustomer/MyClue/CluesCustomerAwaitAdd";
//客户线索-我的线索-待处理-线索详情
import CluesCustomerAwaitDetails from "../pages/CluesCustomer/MyClue/CluesCustomerAwaitDetails";

//跟进中
import CluerCutomerIng from "../pages/CluesCustomer/MyClue/CluerCutomerIng";
//已搁置
import CluerCutomerAbandon from "../pages/CluesCustomer/MyClue/CluerCutomerAbandon";
//客户线索-线索池-已分配
import ClueAllAlready from "../pages/CluesCustomer/ClueAll/ClueAllAlready";
//客户线索-线索池-待分配
import ClueAllAtait from "../pages/CluesCustomer/ClueAll/ClueAllAtait";

//项目管理-储备项目-物联网项目
import ReserveIOTItem from "../pages/ItemManagement/ReserveItem/ReserveIOTItem";
// 传统项目
import ReserveTraditionItem from "../pages/ItemManagement/ReserveItem/ReserveTraditionItem";
// 软件项目
import ReserveSoftwareItem from "../pages/ItemManagement/ReserveItem/ReserveSoftwareItem";
//项目管理-储备项目-添加项目
import ReserveItemAdd from "../pages/ItemManagement/ReserveItem/ReserveItemAdd";
//项目管理-储备项目-项目详情
import ReserveItemDetails from "../pages/ItemManagement/ReserveItem/ReserveItemDetails";
//项目管理-进行中项目-物联网项目
import ItemIngIOTItem from "../pages/ItemManagement/ItemIng/ItemIngIOTItem";
//传统项目
import ItemIngTraditionItem from "../pages/ItemManagement/ItemIng/ItemIngTraditionItem";
//软件项目
import ItemIngSoftwareItem from "../pages/ItemManagement/ItemIng/ItemIngSoftwareItem";
//项目管理-已成交项目-物联网项目
import OverIOTItem from "../pages/ItemManagement/OverItem/OverIOTItem";
//传统项目
import OverTraditionItem from "../pages/ItemManagement/OverItem/OverTraditionItem";
//软件项目
import OverSoftwareItem from "../pages/ItemManagement/OverItem/OverSoftwareItem";
//项目管理-质保段项目-互联网项目
import QualityIOTItem from "../pages/ItemManagement/qualityItem/QualityIOTItem";
//传统项目
import QualityTraditionItem from "../pages/ItemManagement/qualityItem/QualityTraditionItem";
//软件项目
import QualitySoftwareItem from "../pages/ItemManagement/qualityItem/QualitySoftwareItem";
//停车场管理-车辆信息-车辆列表
import ParkMessage from "../pages/ParkingLot/ParkMessage/ParkMessage";
//车辆详情
import ParkMessageDetails from "../pages/ParkingLot/ParkMessage/ParkMessageDetails";
//停车场管理-系统管理-车厂设置
import ParkingManagement from "../pages/ParkingLot/SystemManagement/ParkingManagement";

//头部导航
const menuTopRouter = [
  {
    key: 1,
    meta: {
      title: "客户线索",
      icon: <DatabaseOutlined />,
    },
    path: "/",
    component: CluesCustomerAwait,
  },
  {
    key: 2,
    meta: {
      title: "项目管理",
      icon: <LaptopOutlined />,
    },
    path: "/reserveIOTItem",
    component: ReserveIOTItem,
  },
  {
    key: 3,
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
    key: 20,
    meta: {
      title: "我的线索",
      icon: <DatabaseOutlined />,
    },
    path: "/",
    component: CluesCustomerAwait,
    page: [
      {
        key: 200,
        meta: {
          title: "待处理",
          icon: <DatabaseOutlined />,
        },
        path: "/",
        component: CluesCustomerAwait,
      },
      {
        key: 201,
        meta: {
          title: "跟进中",
          icon: <DatabaseOutlined />,
        },
        path: "/cluerCutomerIng",
        component: CluerCutomerIng,
      },
      {
        key: 202,
        meta: {
          title: "已搁置",
          icon: <DatabaseOutlined />,
        },
        path: "/cluerCutomerAbandon",
        component: CluerCutomerAbandon,
      },
    ],
  },
  {
    key: 21,
    meta: {
      title: "线索池",
      icon: <DatabaseOutlined />,
    },
    path: "/clueAllAtait",
    component: ClueAllAtait,
    page: [
      {
        key: 210,
        meta: {
          title: "待分配",
          icon: <DatabaseOutlined />,
        },
        path: "/clueAllAtait",
        component: ClueAllAtait,
      },
      {
        key: 211,
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
    key: 30,
    meta: {
      title: "储备项目",
      icon: <DatabaseOutlined />,
    },
    path: "/reserveIOTItem",
    component: ReserveIOTItem,
    page: [
      {
        key: 300,
        meta: {
          title: "物联网项目",
          icon: <DatabaseOutlined />,
        },
        path: "/reserveIOTItem",
        component: ReserveIOTItem,
      },
      {
        key: 301,
        meta: {
          title: "传统项目",
          icon: <DatabaseOutlined />,
        },
        path: "/reserveTraditionItem",
        component: ReserveTraditionItem,
      },
      {
        key: 302,
        meta: {
          title: "软件项目",
          icon: <DatabaseOutlined />,
        },
        path: "/reserveSoftwareItem",
        component: ReserveSoftwareItem,
      },
    ],
  },
  {
    key: 31,
    meta: {
      title: "进行中项目",
      icon: <DatabaseOutlined />,
    },
    path: "/itemIngIOTItem",
    component: ItemIngIOTItem,
    page: [
      {
        key: 310,
        meta: {
          title: "物联网项目",
          icon: <DatabaseOutlined />,
        },
        path: "/itemIngIOTItem",
        component: ItemIngIOTItem,
      },
      {
        key: 311,
        meta: {
          title: "传统项目",
          icon: <DatabaseOutlined />,
        },
        path: "/itemIngTraditionItem",
        component: ItemIngTraditionItem,
      },
      {
        key: 312,
        meta: {
          title: "软件项目",
          icon: <DatabaseOutlined />,
        },
        path: "/itemIngSoftwareItem",
        component: ItemIngSoftwareItem,
      },
    ],
  },
  {
    key: 32,
    meta: {
      title: "质保段项目",
      icon: <DatabaseOutlined />,
    },
    path: "/qualityIOTItem",
    component: QualityIOTItem,
    page: [
      {
        key: 320,
        meta: {
          title: "物联网项目",
          icon: <DatabaseOutlined />,
        },
        path: "/qualityIOTItem",
        component: QualityIOTItem,
      },
      {
        key: 321,
        meta: {
          title: "传统项目",
          icon: <DatabaseOutlined />,
        },
        path: "/qualityTraditionItem",
        component: QualityTraditionItem,
      },
      {
        key: 322,
        meta: {
          title: "软件项目",
          icon: <DatabaseOutlined />,
        },
        path: "/qualitySoftwareItem",
        component: QualitySoftwareItem,
      },
    ],
  },
  {
    key: 33,
    meta: {
      title: "已成交项目",
      icon: <DatabaseOutlined />,
    },
    path: "/overIOTItem",
    component: OverIOTItem,
    page: [
      {
        key: 330,
        meta: {
          title: "物联网项目",
          icon: <DatabaseOutlined />,
        },
        path: "/overIOTItem",
        component: OverIOTItem,
      },
      {
        key: 331,
        meta: {
          title: "传统项目",
          icon: <DatabaseOutlined />,
        },
        path: "/overTraditionItem",
        component: OverTraditionItem,
      },
      {
        key: 332,
        meta: {
          title: "软件项目",
          icon: <DatabaseOutlined />,
        },
        path: "/overSoftwareItem",
        component: OverSoftwareItem,
      },
    ],
  },
];

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
    let data = [];
    if(element.hasOwnProperty('page')) {
      element.page.forEach((item) => {
        data.push(item);
      });
      newArray = [...newArray, ...data];
    }else{
      newArray = [...newArray];
    }
    
  });
  return newArray;
};

let menuLeftUserRouterPage = dataDispose(menuLeftUserRouter);
let menuLeftItemRouterPage = dataDispose(menuLeftItemRouter);
let meunParkMessageRouterPage = dataDispose(meunParkMessageRouter);

const userRouter = [
  ...menuTopRouter,
  ...menuLeftUserRouterPage,
  ...menuLeftItemRouterPage,
  ...meunParkMessageRouterPage,
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
    path: "/ReserveItem/add",
    component: ReserveItemAdd,
  },
  {
    path: "/ReserveItem/details",
    component: ReserveItemDetails,
  },
  //停车场信息
  {
    path: "/parkMessage/details",
    component:ParkMessageDetails
  }
];
export { menuTopRouter, menuLeftUserRouter, menuLeftItemRouter, meunParkMessageRouter,  userRouter };
