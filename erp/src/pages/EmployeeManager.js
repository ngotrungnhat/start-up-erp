import React, { Component } from 'react'
import LayoutMain from '../layout/LayoutMain'

class EmployeeManager extends Component {
    // eslint-disable-next-line react/state-in-constructor
    state = {
        collapsed: false,
    }

    toggle = () => {
        this.setState(({ collapsed }) => ({ collapsed: !collapsed }))
    }

    render() {
        const { collapsed } = this.state
        const header = {
            collapsed,
            toggle: this.toggle,
        }
        const listMenuItem = {
            collapsed,
        }
        return (
            <LayoutMain header={header} listMenuItem={listMenuItem}>
                <h1>This is Employee Manager</h1>
            </LayoutMain>
        )
    }
}

export default EmployeeManager
