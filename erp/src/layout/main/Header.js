import React from 'react'
import { Layout, Icon } from 'antd'

const { Header } = Layout

const CustomHeader = ({ collapsed, toggleCollapse }) => (
    <Header style={{ background: '#fff', padding: 0 }}>
        <Icon
            className="trigger"
            type={collapsed ? 'menu-unfold' : 'menu-fold'}
            onClick={toggleCollapse}
        />
    </Header>
)

export default CustomHeader
