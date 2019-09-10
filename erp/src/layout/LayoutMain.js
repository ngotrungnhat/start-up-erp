import React from 'react'
import { Layout } from 'antd'
import MenuSidebar from './MenuSidebar'
import Headers from './Headers'

const { Content } = Layout

const LayoutMain = ({ children, header, listMenuItem }) => {
    return (
        <Layout>
            <MenuSidebar {...listMenuItem} />
            <Layout>
                <Headers {...header} />
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

export default LayoutMain
