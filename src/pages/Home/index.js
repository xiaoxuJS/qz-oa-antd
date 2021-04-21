import React, {useState, useEffect} from "react";
//引入路由
import UserRoutes from "../../Route";
import { menuTopRouter, menuLeftUserRouter, menuLeftItemRouter, meunParkMessageRouter } from "../../Route/routes";
import { useHistory } from "react-router-dom";
import { HomeAllBOx, HomeMessage, HomeHeaderConter } from "./style";
//component
import HomeNav from "./components/HomeNav";
//antd
import { Layout, Menu } from "antd";
const { Header, Content, Sider } = Layout;

const Home = () => {
  const history = new useHistory();
  const contentHeight = window.innerHeight - 64 - 24;
  const [menuLeftData, setMenuLeftData] = useState([]); //侧边栏导航路径
  useEffect(() => {
    setMenuLeftData(menuLeftUserRouter);
  }, [])

  //头部导航页面跳转
  const handleEnterPage = (path) => {
    switch(path){
      case '/':
        setMenuLeftData(menuLeftUserRouter);
        break;
      case '/itemManagement/reserve/IOT':
        setMenuLeftData(menuLeftItemRouter);
        break;
      case '/parkMessage':
        setMenuLeftData(meunParkMessageRouter);
        break;
      default: 
        setMenuLeftData(menuLeftUserRouter);
    }
    history.push(path);
  };
  return (
    <HomeAllBOx>
      <Layout>
        <Header className="header">
          <div className="logo">
            琪智科技
          </div>
          <HomeHeaderConter>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
            {menuTopRouter
              ? menuTopRouter.map((item) => {
                  return (
                    <Menu.Item
                      key={item.key}
                      onClick={() => handleEnterPage(item.path)}
                    >
                      {item.meta.title}
                    </Menu.Item>
                  );
                })
              : null}
          </Menu>
          </HomeHeaderConter>
          <HomeMessage>
            xiaxoujs
          </HomeMessage>

        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <HomeNav menuData = {menuLeftData} />
          </Sider>
          <Layout style={{ padding: "24px 24px 0px 24px", background: "#DCE0E0" }}>
            {/* <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb> */}
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
