import React from 'react'
import { Layout, Menu, Icon } from 'antd'
import contentMenuSidebar from './contentMenuSidebar'

const shortid = require('shortid')

const { Sider } = Layout
const { SubMenu } = Menu

const MenuSidebar = ({ collapsed }) => (
    <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        collapsedWidth={80}
        width={250}
    >
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            {contentMenuSidebar.map(value => {
                return (
                    <SubMenu
                        key={shortid.generate()}
                        title={
                            <span>
                                <Icon type={value.typeIcon} />
                                <span>{value.titleSub}</span>
                            </span>
                        }
                    >
                        {value.item.map(element => (
                            <Menu.Item key={shortid.generate()}>
                                <a onClick={value.onclick} href={element.url}>
                                    {element.name}
                                </a>
                            </Menu.Item>
                        ))}
                    </SubMenu>
                )
            })}
        </Menu>
    </Sider>
)

export default MenuSidebar
