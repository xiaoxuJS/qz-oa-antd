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
//客户管理-进行中项目-物联网项目
import ItemIngIOTItem from "../pages/ItemManagement/ItemIng/ItemIngIOTItem";
//传统项目
import ItemIngTraditionItem from "../pages/ItemManagement/ItemIng/ItemIngTraditionItem";
import ItemIngSoftwareItem from "../pages/ItemManagement/ItemIng/ItemIngSoftwareItem";
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
        key: 50,
        meta: {
          title: "待处理",
          icon: <DatabaseOutlined />,
        },
        path: "/",
        component: CluesCustomerAwait,
      },
      {
        key: 51,
        meta: {
          title: "跟进中",
          icon: <DatabaseOutlined />,
        },
        path: "/cluerCutomerIng",
        component: CluerCutomerIng,
      },
      {
        key: 52,
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
        key: 54,
        meta: {
          title: "待分配",
          icon: <DatabaseOutlined />,
        },
        path: "/clueAllAtait",
        component: ClueAllAtait,
      },
      {
        key: 53,
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
        key: 301,
        meta: {
          title: "物联网项目",
          icon: <DatabaseOutlined />,
        },
        path: "/reserveIOTItem",
        component: ReserveIOTItem,
      },
      {
        key: 302,
        meta: {
          title: "传统项目",
          icon: <DatabaseOutlined />,
        },
        path: "/reserveTraditionItem",
        component: ReserveTraditionItem,
      },
      {
        key: 303,
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
];
//对导航栏进行数据处理
const dataDispose = (data) => {
  let newArray = [];
  data.forEach((element) => {
    let data = [];
    element.page.forEach((item) => {
      data.push(item);
    });
    newArray = [...newArray, ...data];
  });
  return newArray;
};

let menuLeftUserRouterPage = dataDispose(menuLeftUserRouter);
let menuLeftItemRouterPage = dataDispose(menuLeftItemRouter);

const userRouter = [
  ...menuTopRouter,
  ...menuLeftUserRouterPage,
  ...menuLeftItemRouterPage,
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
];
export { menuTopRouter, menuLeftUserRouter, menuLeftItemRouter, userRouter };
