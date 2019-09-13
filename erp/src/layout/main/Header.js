import React from 'react'
import { Layout, Icon, Row, Col, Badge } from 'antd'
import styled from 'styled-components'

const { Header } = Layout

const IconToggle = styled(Icon)`
    font-size: 30px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;

    :hover {
        color: #1890ff;
    }
`

const IconNotify = styled(IconToggle)`
    padding: 0;
`

const StyledBadge = styled(Badge)`
    padding-left: 18px;
`

const CustomHeader = ({ collapsed, toggleCollapse }) => (
    <Header
        style={{ background: '#fff', padding: '20px 0 0 0', height: 'auto' }}
    >
        <Row type="flex" justify="space-between" align="middle">
            <Col>
                <IconToggle
                    type={collapsed ? 'menu-unfold' : 'menu-fold'}
                    onClick={toggleCollapse}
                />
            </Col>
            <Col style={{ paddingRight: '24px' }}>
                <StyledBadge count={5}>
                    <IconNotify type="bell" />
                </StyledBadge>
                <StyledBadge count={6}>
                    <IconNotify type="mail" />
                </StyledBadge>
                <StyledBadge count={7}>
                    <IconNotify type="user" />
                </StyledBadge>
                <StyledBadge count={8}>
                    <IconNotify type="logout" />
                </StyledBadge>
            </Col>
        </Row>
    </Header>
)

export default CustomHeader
