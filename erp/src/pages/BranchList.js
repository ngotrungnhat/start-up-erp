import React from 'react'
import { Typography, Row, Col, Select, Input, Icon, Divider, Table } from 'antd'
import LayoutMain from '../layout/main'

const { Title, Text } = Typography
const { Option } = Select

const tableData = [
    {
        key: '1',
        name: 'Hà Nội',
        owner: 'Lê Văn An',
        manager: 'Nguyễn Ngọc Tuấn',
        receptionist: 'Trần Đức Kiên',
        address: 'Quận Hoàng Mai, Hà Nội',
    },
    {
        key: '2',
        name: 'TP HCM',
        owner: 'Nguyễn Thị Minh',
        manager: 'Huỳnh Minh Hiếu',
        receptionist: 'Lê Như Ngọc',
        address: 'Quận Bình Thạnh, TP HCM',
    },
    {
        key: '3',
        name: 'Hà Nội',
        owner: 'Lê Văn An',
        manager: 'Nguyễn Ngọc Tuấn',
        receptionist: 'Trần Đức Kiên',
        address: 'Quận Hoàng Mai, Hà Nội',
    },
    {
        key: '4',
        name: 'TP HCM',
        owner: 'Nguyễn Thị Minh',
        manager: 'Huỳnh Minh Hiếu',
        receptionist: 'Lê Như Ngọc',
        address: 'Quận Bình Thạnh, TP HCM',
    },
    {
        key: '5',
        name: 'Hà Nội',
        owner: 'Lê Văn An',
        manager: 'Nguyễn Ngọc Tuấn',
        receptionist: 'Trần Đức Kiên',
        address: 'Quận Hoàng Mai, Hà Nội',
    },
    {
        key: '6',
        name: 'TP HCM',
        owner: 'Nguyễn Thị Minh',
        manager: 'Huỳnh Minh Hiếu',
        receptionist: 'Lê Như Ngọc',
        address: 'Quận Bình Thạnh, TP HCM',
    },
    {
        key: '7',
        name: 'Hà Nội',
        owner: 'Lê Văn An',
        manager: 'Nguyễn Ngọc Tuấn',
        receptionist: 'Trần Đức Kiên',
        address: 'Quận Hoàng Mai, Hà Nội',
    },
    {
        key: '8',
        name: 'TP HCM',
        owner: 'Nguyễn Thị Minh',
        manager: 'Huỳnh Minh Hiếu',
        receptionist: 'Lê Như Ngọc',
        address: 'Quận Bình Thạnh, TP HCM',
    },
]

const tableColumn = [
    {
        title: 'STT',
        dataIndex: 'key',
    },
    {
        title: 'Tên cơ sở',
        dataIndex: 'name',
        sorter: true,
    },
    {
        title: 'Chủ cơ sở',
        dataIndex: 'owner',
        sorter: true,
    },
    {
        title: 'Quản lý',
        dataIndex: 'manager',
        sorter: true,
    },
    {
        title: 'Lễ tân',
        dataIndex: 'receptionist',
        sorter: true,
    },
    {
        title: 'Hành động',
        render: () => (
            <span>
                <Icon type="edit" />
                <Divider type="vertical" />
                <Icon type="delete" />
            </span>
        ),
    },
]

const BranchList = () => (
    <LayoutMain>
        <Title level={2} style={{ marginBottom: '2rem' }}>
            Quản lý cơ sở
        </Title>
        <Text type="secondary" style={{ fontSize: '20px' }}>
            Tổng hợp thông tin các cơ sở
        </Text>
        <Row style={{ margin: '2rem 0 3rem 0' }} justify="space-between">
            <Col span={6} style={{ padding: '0 1rem 0 0' }}>
                <Title level={3}>Cơ sở</Title>
                <Select defaultValue="hn" style={{ width: '100%' }}>
                    <Option value="hn">Hà Nội</Option>
                    <Option value="hcm">TP HCM</Option>
                    <Option value="hp">Hải Phòng</Option>
                </Select>
            </Col>
            <Col span={6} style={{ padding: '0 1rem' }}>
                <Title level={3}>Chủ cơ sở</Title>
                <Input
                    placeholder="Tìm kiếm"
                    prefix={
                        <Icon
                            type="user"
                            style={{ color: 'rgba(0,0,0,.25)' }}
                        />
                    }
                />
            </Col>
            <Col span={6} style={{ padding: '0 1rem' }}>
                <Title level={3}>Quản lý</Title>
                <Input
                    placeholder="Tìm kiếm"
                    prefix={
                        <Icon
                            type="user"
                            style={{ color: 'rgba(0,0,0,.25)' }}
                        />
                    }
                />
            </Col>
            <Col span={6} style={{ padding: '0 0 0 1rem' }}>
                <Title level={3}>Lễ tân</Title>
                <Input
                    placeholder="Tìm kiếm"
                    prefix={
                        <Icon
                            type="user"
                            style={{ color: 'rgba(0,0,0,.25)' }}
                        />
                    }
                />
            </Col>
        </Row>
        <Table
            columns={tableColumn}
            dataSource={tableData}
            pagination={{ total: 200, current: 10 }}
        />
    </LayoutMain>
)

export default BranchList
