import React, {Component} from 'react';
import {Menu, MenuItem} from '@blueprintjs/core';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import * as ROUTES from '../../constants/routes';

class SideBar extends Component {
    render() {
        return (
            <Menu className="sidebar-menu">
                <Link to={ROUTES.DETAILS_BUTTON}><MenuItem className="sidebar-item" icon="segmented-control" text="Button" /></Link>
                <Link to={ROUTES.DETAILS_CARD}><MenuItem className="sidebar-item" icon="credit-card" text="Card" /></Link>
                <Link to={ROUTES.DETAILS_TICK}><MenuItem className="sidebar-item" icon="tick-circle" text="Checkbox | Tick" /></Link>
                <Link to={ROUTES.DETAILS_ANIMATION}><MenuItem className="sidebar-item" icon="layout" text="Another Animations" /></Link>
                <Link to={ROUTES.MANAGEMENT_USERS}><MenuItem className="sidebar-item" icon="new-person" text="User Management" /></Link>
                <Link to="/management/posts"><MenuItem className="sidebar-item" icon="new-object" text="Posts Management" /></Link>
            </Menu>
        )
    }
}

export default SideBar;