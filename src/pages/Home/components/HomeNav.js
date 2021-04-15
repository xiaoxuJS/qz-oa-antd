import React, { useEffect, Fragment } from "react";
import {
    useHistory
} from 'react-router-dom'
// antd
import { Menu } from "antd";
const { SubMenu } = Menu;

const HomeNav = ({ menuData }) => {
    const history = new useHistory();
    const contentHeight = window.innerHeight - 64;
    useEffect(() => {
    }, [menuData])

    const handleEnterPage = (path) => {
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
                                                    onClick={() => handleEnterPage(data.path)}
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
