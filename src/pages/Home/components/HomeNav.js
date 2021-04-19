import React, { useEffect, Fragment, useContext } from "react";
//公用数据
import {
    myContext
} from '../../../reducer'
import {
    useHistory
} from 'react-router-dom'
// antd
import { Menu } from "antd";
const { SubMenu } = Menu;

const HomeNav = ({ menuData }) => {
    const history = new useHistory();
    const contentHeight = window.innerHeight - 64;
    const {dispatch} = useContext(myContext)
    useEffect(() => {
    }, [menuData])

    const handleEnterPage = (path, title) => {
        switch(title) {
            case '待处理':
                dispatch({type: 'myClueType', myClueType: 0});
                break;
            case '跟进中':
                dispatch({type: 'myClueType', myClueType: 1});
                break;
            case '已搁置':
                dispatch({type: 'myClueType', myClueType: 3});
                break;
            default:
                break;
        }
        history.push(path)
    }

    return (
        <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: contentHeight + "px", borderRight: 0 }}
        >
            {menuData
                ? menuData.map((item) => {
                    return (
                        <Fragment key = {item.page ? item.key : '1'}>
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
                                                    onClick={() => handleEnterPage(data.path, data.meta.title)}
                                                >
                                                    {data.meta.title}
                                                </Menu.Item>;
                                            })
                                            : null}
                                    </SubMenu>
                                    :
                                    menuData.map((data) => {
                                        return <Menu.Item
                                            key={data.key}
                                            icon={data.meta.icon}
                                            onClick={() => handleEnterPage(data.path)}
                                        >
                                            {data.meta.title}
                                        </Menu.Item>;
                                    })

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
