import React, { useState, useEffect } from "react";
//引入路由
import UserRoutes from "../../Route";
import { menuTopRouter, menuLeftUserRouter, menuLeftItemRouter, meunParkMessageRouter, menuLeftClientRouter, menuLeftProductionRouter, menuLeftPersonnelRouter } from "../../Route/routes";
import { useHistory, useLocation } from "react-router-dom";
import { HomeAllBOx, HomeMessage, HomeHeaderConter } from "./style";
//component
import HomeNav from "./components/HomeNav";
import HomeContent from '../HomeContent'
//antd
import { Layout, Menu, Space, Button } from "antd";
const { Header, Content, Sider } = Layout;

const Home = () => {
    const history = new useHistory();
    const location = new useLocation();
    const contentHeight = window.innerHeight - 64 - 24;
    const [menuLeftData, setMenuLeftData] = useState([]); //侧边栏导航路径
    const [topKey, setTopKey] = useState('1'); //侧边栏导航路径
    useEffect(() => {
        const sessionValue = sessionStorage.getItem('topKey')
        if (sessionValue) {
            setTopKey(sessionValue);
            switch (sessionValue) {
                case 'clues': //线索
                    setMenuLeftData(menuLeftUserRouter);
                    break;
                case 'item': //项目
                    setMenuLeftData(menuLeftItemRouter);
                    break;
                case 'client': //客户信息
                    setMenuLeftData(menuLeftClientRouter);
                    break;
                case 'park': //停车场
                    setMenuLeftData(meunParkMessageRouter);
                    break;
                case 'production': //停车场
                    setMenuLeftData(menuLeftProductionRouter);
                    break;
                case 'personnel': //人事管理
                    setMenuLeftData(menuLeftPersonnelRouter);
                    break;
                default:
                    setMenuLeftData(menuLeftProductionRouter);
            }
        } else {
            setTopKey('Home');
            setMenuLeftData(menuLeftProductionRouter);
        }
        // setMenuLeftData(menuLeftUserRouter);
    }, [])

    //头部导航页面跳转
    const handleEnterPage = (path, key) => {
        switch (path) {
            case '/clues/customer/await': //客户线索
                setMenuLeftData(menuLeftUserRouter);
                break;
            case '/production': //营销管理
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
            case '/personnel/all/management/list': //人事管理
                setMenuLeftData(menuLeftPersonnelRouter);
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
        sessionStorage.removeItem('topKey')
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
                            <Button type="primary" onClick={handleExit}>退出登录</Button>
                        </Space>
                    </HomeMessage>

                </Header>
                {
                    location.pathname === '/'
                        ?
                        <Layout>
                            <HomeContent />
                        </Layout>
                        :
                        <Layout>
                            <Sider width={200} className="site-layout-background">
                                <HomeNav menuData={menuLeftData} />
                            </Sider>
                            <Layout style={{ padding: "8px 8px 0px 8px", background: "#DCE0E0" }}>
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
                }

            </Layout>
        </HomeAllBOx>
    );
};

export default Home;
