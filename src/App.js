
//引入路由
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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
import {StyleCommon} from './style'

moment.locale("zh_CN");

function App() {
  return (
    <div className="App">
        <Router basename = "/">
            <StyleCommon />
            <ConfigProvider locale = {zhCN}>
                <Switch>
                    <Route exact path = "/login" component = { Login } />
                    <Route path = "/" component = { Home } />
                </Switch>
            </ConfigProvider>
        </Router>
    </div>
  );
}

export default App;
