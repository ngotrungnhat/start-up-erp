import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Layout, Menu, Icon } from 'antd'
import { sidebarData, groupKey } from './SidebarData'

const { Sider } = Layout
const { SubMenu, Item } = Menu

class Sidebar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            openKeys: [''],
            selectedKeys: [''],
            rootSubmenuKeys: groupKey,
        }
    }

    setDefaultActiveItem = ({ location }) => {
        const { pathname } = location
        sidebarData.map(item => {
            if (item.children && item.children.length > 0) {
                item.children.map(childitem => {
                    if (pathname.match(childitem.path)) {
                        this.setState({
                            openKeys: [item.key],
                            selectedKeys: [childitem.key],
                        })

                        document.title = childitem.text
                    }
                })
            }
        })
    }

    componentDidMount = () => {
        this.setDefaultActiveItem(this.props)
    }

    OpenChange = openKeys => {
        const latestOpenKey = openKeys.find(
            key => this.state.openKeys.indexOf(key) === -1
        )

        if (this.state.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({ openKeys })
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : [...openKeys],
            })
        }
    }

    render() {
        const { openKeys, selectedKeys } = this.state
        const { collapsed, onCollapse } = this.props
        const SideTree = sidebarData.map(item => (
            <SubMenu
                key={item.key}
                title={
                    <span>
                        <Icon type={item.title.icon} />
                        <span>{item.title.text}</span>
                    </span>
                }
            >
                {item.children &&
                    item.children.map(menuItem => (
                        <Item
                            key={menuItem.key}
                            onClick={() => {
                                this.setState({ selectedKeys: [menuItem.key] })

                                document.title = menuItem.text
                            }}
                        >
                            <Link to={menuItem.path}>{menuItem.text}</Link>
                        </Item>
                    ))}
            </SubMenu>
        ))
        return (
            <Sider
                collapsible
                breakpoint="lg"
                collapsed={collapsed}
                onCollapse={onCollapse}
                trigger={collapsed}
                width={250}
                theme="light"
            >
                <Menu
                    subMenuOpenDelay={0.3}
                    openKeys={openKeys}
                    selectedKeys={selectedKeys}
                    mode="inline"
                    onOpenChange={this.OpenChange}
                >
                    {SideTree}
                </Menu>
            </Sider>
        )
    }
}

export default withRouter(Sidebar)

// /* eslint-disable react/state-in-constructor */
// /* eslint-disable react/jsx-props-no-spreading */
// // eslint-disable-next-line max-classes-per-file
// import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
// import { withRouter } from 'react-router'
// import { Layout, Menu, Icon } from 'antd'

// const { Sider } = Layout
// const { SubMenu } = Menu

// const contentMenuSidebar = [
//     {
//         titleSub: 'Quản lý cơ sở',
//         typeIcon: 'bank',
//         item: [
//             {
//                 name: 'Danh sách cơ sở',
//                 url: '/danh-sach-co-so',
//             },
//             {
//                 name: 'Thông tin cơ sở',
//                 url: '/thong-tin-co-so',
//             },
//             {
//                 name: 'Thêm mới',
//                 url: '/them-moi-co-so',
//             },
//         ],
//     },
//     {
//         titleSub: 'Quản lý khách hàng',
//         typeIcon: 'team',
//         item: [
//             {
//                 name: 'Danh sách khách hàng',
//                 url: '/danh-sach-khach-hanng',
//             },
//         ],
//     },
//     {
//         titleSub: 'Quản lý nhân viên',
//         typeIcon: 'user',
//         item: [
//             {
//                 name: 'Danh sách nhân viên',
//                 url: '/danh-sach-nhan-vien',
//             },
//             {
//                 name: 'Danh sách hợp đồng',
//                 url: '/danh-sach-hop-dong',
//             },
//         ],
//     },
//     {
//         titleSub: 'Quản lý nâng hạng thẻ',
//         typeIcon: 'idcard',
//         item: [],
//     },
//     {
//         titleSub: 'Quản lý dịch vụ',
//         typeIcon: 'form',
//         item: [
//             {
//                 name: 'Danh sách dịch vụ',
//                 url: '/danh-sach-dịch-vu',
//             },
//             {
//                 name: 'Tạo mới dịch vụ',
//                 url: '/tao-moi-dich-vu',
//             },
//         ],
//     },
//     {
//         titleSub: 'Quản lý lương',
//         typeIcon: 'user',
//         item: [
//             {
//                 name: 'Lịch sử thu thập',
//                 url: '/lich-su-thu-nhap',
//             },
//             {
//                 name: 'Tổng hợp',
//                 url: '/tong-hop-luong',
//             },
//         ],
//     },
//     {
//         titleSub: 'Quản lý chấm công',
//         typeIcon: 'user',
//         item: [],
//     },
//     {
//         titleSub: 'Thống kê báo cáo',
//         typeIcon: 'user',
//         item: [],
//     },
//     {
//         titleSub: 'Quản lý người dùng',
//         typeIcon: 'user',
//         item: [
//             {
//                 name: 'Module',
//                 url: '/phan-quyen-chuc-nang',
//             },
//             {
//                 name: 'Group',
//                 url: '/phan-quyen-user-group',
//             },
//             {
//                 name: 'User list',
//                 url: '/phan-quyen-user-group-chi-tiet',
//             },
//             {
//                 name: 'User role',
//                 url: '/phan-quyen-user',
//             },
//         ],
//     },
// ]

// const MenuSidebar = ({ collapsed, history }) => (
//     <Sider
//         trigger={null}
//         collapsible
//         collapsed={collapsed}
//         collapsedWidth={80}
//         width={250}
//     >
//         <div className="logo" />
//         <Menu theme="dark" mode="inline" onSelect={props => {history.push(props.key)}}>
//             {contentMenuSidebar.map(value => {
//                 return (
//                     <SubMenu
//                         key={value.titleSub}
//                         title={
//                             <span>
//                                 <Icon type={value.typeIcon} />
//                                 <span>{value.titleSub}</span>
//                             </span>
//                         }
//                     >
//                         {value.item.map(element => (
//                             <Menu.Item key={element.url}>
//                                 {element.name}
//                             </Menu.Item>
//                         ))}
//                     </SubMenu>
//                 )
//             })}
//         </Menu>
//     </Sider>
// )

// export default withRouter(MenuSidebar)
