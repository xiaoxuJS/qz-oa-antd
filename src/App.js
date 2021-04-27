
import React from 'react';
//引入路由
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

//引入登录页面和首页
import Login from "./pages/Login";
import Home from "./pages/Home";

//antd 中文 以及时间插件moment
import { ConfigProvider } from 'antd'
import zhCN from "antd/es/locale/zh_CN";
import moment from "moment";
import "moment/locale/zh-cn";
import "antd/dist/antd.css";

//公共样式
import { StyleCommon } from './style';
//公共数据
import { ContextProvider } from './reducer'

moment.locale("zh_CN");

function App() {
  const isLogin = () => {
    if (!sessionStorage.getItem("token")) {
      return false
    }
    return true
  }
  return (
    <div className="App">
      <Router basename="/">
        <StyleCommon />
        <ConfigProvider locale={zhCN}>
          <ContextProvider>
            <Switch>
              <Route exact path="/login" component={Login} />
              <Route path="/" render={() =>
                isLogin() ? <Home /> : <Redirect to="/Login" />
                //判断成功进入页面，不成功跳转登录
              }
              />
            </Switch>
          </ContextProvider>
        </ConfigProvider>
      </Router>
    </div>
  );
}

export default App;
