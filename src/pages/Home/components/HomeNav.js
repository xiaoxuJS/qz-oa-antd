import React, { useEffect, Fragment, useContext, useCallback, useState } from "react";
//公用数据
import {
    myContext
} from '../../../reducer'
import {
    useHistory,
    useLocation
} from 'react-router-dom'
// antd
import { Menu } from "antd";
const { SubMenu } = Menu;

const HomeNav = ({ menuData }) => {
    const history = new useHistory();
    const location = new useLocation();
    const contentHeight = window.innerHeight - 64;
    const { dispatch } = useContext(myContext)
    const [leftKey, setLeftKey] = useState([undefined]);
    const handleEnterPage = useCallback((path) => {
        switch (path) {
            //线索
            case '/':
                dispatch({ type: 'myClueType', myClueType: 0 });
                break;
            case '/cluesCustomerAwait/ing':
                dispatch({ type: 'myClueType', myClueType: 1 });
                break;
            case '/cluesCustomerAwait/abandon':
                dispatch({ type: 'myClueType', myClueType: 3 });
                break;
            //项目--储备项目
            case '/itemManagement/reserve/IOT':
                dispatch({ type: 'itemMonagement', itemStatus: 0, itemType: 1 });
                break;
            case '/itemManagement/reserve/tradition':
                dispatch({ type: 'itemMonagement', itemStatus: 0, itemType: 2 });
                break;
            case '/itemManagement/reserve/software':
                dispatch({ type: 'itemMonagement', itemStatus: 0, itemType: 3 });
                break;
            //项目 进行中项目
            case '/itemManagement/ing/IOT':
                dispatch({ type: 'itemMonagement', itemStatus: 1, itemType: 1 });
                break;
            case '/itemManagement/ing/tradition':
                dispatch({ type: 'itemMonagement', itemStatus: 1, itemType: 2 });
                break;
            case '/itemManagement/ing/software':
                dispatch({ type: 'itemMonagement', itemStatus: 1, itemType: 3 });
                break;
            //项目 质保段项目
            case '/itemManagement/quality/IOT':
                dispatch({ type: 'itemMonagement', itemStatus: 2, itemType: 1 });
                break;
            case '/itemManagement/quality/tradition':
                dispatch({ type: 'itemMonagement', itemStatus: 2, itemType: 2 });
                break;
            case '/itemManagement/quality/software':
                dispatch({ type: 'itemMonagement', itemStatus: 2, itemType: 3 });
                break;
            //项目 已完成项目
            case '/itemManagement/over/IOT':
                dispatch({ type: 'itemMonagement', itemStatus: 3, itemType: 1 });
                break;
            case '/itemManagement/over/tradition':
                dispatch({ type: 'itemMonagement', itemStatus: 3, itemType: 2 });
                break;
            case '/itemManagement/over/software':
                dispatch({ type: 'itemMonagement', itemStatus: 3, itemType: 3 });
                break;
            default:
                break;
        }
    }, [dispatch])
    useEffect(() => {
        const sessionValue = JSON.parse(sessionStorage.getItem('leftKey'));
        if(sessionValue) {
            setLeftKey(sessionValue)
        }
        handleEnterPage(location.pathname);
    }, [handleEnterPage, location.pathname])
    const handleChangeEnterPage = (path) => {
        handleEnterPage(path);
        history.push(path);
    }
    const handleGetKey = ({keyPath}) => {
        sessionStorage.setItem('leftKey', JSON.stringify(keyPath));
        setLeftKey(keyPath)
    }

    return (
        <Menu
            mode="inline"
            selectedKeys= {leftKey}
            style={{ height: contentHeight + "px", borderRight: 0 }}
            onClick = {handleGetKey}
        >
            {menuData
                ? menuData.map((item) => {
                    return (
                        <Fragment key={item.page ? item.key : '1'}>
                            {
                                item.page ?
                                    <SubMenu
                                        key={item.key}
                                        icon={item.meta.icon}
                                        title={item.meta.title}
                                    >
                                        {item.page
                                            ? item.page.map((data) => {

                                                return <Menu.Item
                                                    key={data.key}
                                                    onClick={() => handleChangeEnterPage(data.path)}
                                                >
                                                    {data.meta.title}
                                                </Menu.Item>;
                                            })
                                            : null}
                                    </SubMenu>
                                    : <Menu.Item
                                        key={item.key}
                                        icon={item.meta.icon}
                                        onClick={() => handleChangeEnterPage(item.path)}
                                    >
                                        {item.meta.title}
                                    </Menu.Item>

                            }
                        </Fragment>
                    );
                })
                : null
            }
        </Menu>
    );
};

export default HomeNav;
