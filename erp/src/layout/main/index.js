/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react'
import { Layout } from 'antd'
import Sidebar from './Sidebar'
import Header from './Header'

const { Content } = Layout

class LayoutMain extends Component {
    state = {
        collapsed: false,
    }

    toggleCollapse = () => {
        this.setState(({ collapsed }) => ({ collapsed: !collapsed }))
    }

    render() {
        const { collapsed } = this.state
        const { children } = this.props
        return (
            <Layout>
                <Sidebar collapsed={collapsed} />
                <Layout>
                    <Header
                        collapsed={collapsed}
                        toggleCollapse={this.toggleCollapse}
                    />
                    <Content
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            background: '#fff',
                            minHeight: 280,
                        }}
                    >
                        {children}
                    </Content>
                </Layout>
            </Layout>
        )
    }
}

export default LayoutMain
