import React, { Component } from 'react'
import LayoutMain from '../layout/LayoutMain'

class EmployeeManager extends Component {
    state = {
        collapsed: false,
    }

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        })
    }

    render() {
        const header = {
            collapsed: this.state.collapsed,
            toggle: this.toggle,
        }
        const listMenuItem = {
            collapsed: this.state.collapsed,
        }
        return (
            <LayoutMain header={header} listMenuItem={listMenuItem}>
                <h1>This is Employee Manager</h1>
            </LayoutMain>
        )
    }
}

export default EmployeeManager
