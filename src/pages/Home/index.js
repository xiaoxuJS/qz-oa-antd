import React, { useState, useEffect } from "react";
//引入路由
import UserRoutes from "../../Route";
import { menuTopRouter, menuLeftUserRouter, menuLeftItemRouter, meunParkMessageRouter, menuLeftClientRouter, menuLeftProductionRouter } from "../../Route/routes";
import { useHistory } from "react-router-dom";
import { HomeAllBOx, HomeMessage, HomeHeaderConter } from "./style";
//component
import HomeNav from "./components/HomeNav";
//antd
import { Layout, Menu, Space, Button } from "antd";
const { Header, Content, Sider } = Layout;

const Home = () => {
  const history = new useHistory();
  const contentHeight = window.innerHeight - 64 - 24;
  const [menuLeftData, setMenuLeftData] = useState([]); //侧边栏导航路径
  const [topKey, setTopKey] = useState('1'); //侧边栏导航路径
  useEffect(() => {
    const sessionValue = sessionStorage.getItem('topKey')
    if (sessionValue) {
      setTopKey(sessionValue);
      switch(sessionValue) {
        case 'clues': //线索
          setMenuLeftData(menuLeftUserRouter);
          break;
        case 'item': //项目
          setMenuLeftData(menuLeftItemRouter);
          break;
        case 'client': //客户信息
          setMenuLeftData(menuLeftClientRouter);
          break;
        case '/park': //停车场
          setMenuLeftData(meunParkMessageRouter);
          break;
        default:
          setMenuLeftData(menuLeftUserRouter);
      }
    } else {
      setMenuLeftData(menuLeftUserRouter);
    }
    // setMenuLeftData(menuLeftUserRouter);
  }, [])

  //头部导航页面跳转
  const handleEnterPage = (path, key) => {
    console.log(path)
    switch (path) {
      case '/clues/customer/await': //客户线索
        setMenuLeftData(menuLeftUserRouter);
        break;
      case '/': //营销管理
        setMenuLeftData(menuLeftProductionRouter);
        break;
      case '/itemManagement/reserve/IOT':
        setMenuLeftData(menuLeftItemRouter);
        break;
      case '/company/client/index': //客户信息
        setMenuLeftData(menuLeftClientRouter);
        break;
      case '/parkMessage':
        setMenuLeftData(meunParkMessageRouter);
        break;
      default:
        setMenuLeftData(menuLeftUserRouter);
    }
    setTopKey(key);
    sessionStorage.setItem('topKey', key)
    history.push(path);
  };
  //退出
  const handleExit = () => {
    sessionStorage.removeItem('token');
    history.push('/login');
  }
  return (
    <HomeAllBOx>
      <Layout>
        <Header className="header">
          <div className="logo">
            琪智科技
          </div>
          <HomeHeaderConter>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]} selectedKeys={[topKey]}>
              {menuTopRouter
                ? menuTopRouter.map((item) => {
                  return (
                    <Menu.Item
                      key={item.key}
                      onClick={() => handleEnterPage(item.path, item.key)}
                    >
                      {item.meta.title}
                    </Menu.Item>
                  );
                })
                : null}
            </Menu>
          </HomeHeaderConter>
          <HomeMessage>
            <Space>
              xiaoxujs
              <Button type="primary" onClick={handleExit}>退出登录</Button>
            </Space>
          </HomeMessage>

        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <HomeNav menuData={menuLeftData} />
          </Sider>
          <Layout style={{ padding: "24px 24px 0px 24px", background: "#DCE0E0" }}>
            <Content
              className="site-layout-background"
              style={{
                margin: 0,
                height: contentHeight,
                background: '#fff',
                overflow: "auto"
              }}
            >
              <UserRoutes />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </HomeAllBOx>
  );
};

export default Home;
