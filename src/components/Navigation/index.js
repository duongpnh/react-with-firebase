import React from 'react';
import {Link} from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import SignOutButton from '../SignOut';
import { withAuthentication, AuthUserContext } from '../Session';
import {Navbar, Alignment, Popover, Button, Menu, Position} from '@blueprintjs/core';

const Navigation = () => (
    <>
        <AuthUserContext.Consumer>
            {authUser => authUser ? <NavigationAuth authUser={authUser}/> : <NavigationNonAuth />}
        </AuthUserContext.Consumer>
    </>
)

const NavigationAuth = ({authUser}) => (
    <Navbar>
        <Navbar.Group align={Alignment.LEFT}>
            <Navbar.Heading>Anonymous</Navbar.Heading>
            <Navbar.Divider />
            <Link to={ROUTES.HOME_PAGE}><Button className="bp3-minimal" icon="home" text="Home" /></Link>
            <Link to={ROUTES.ADMIN_PAGE}><Button className="bp3-minimal" icon="helper-management" text="Manage Users" /></Link>
        </Navbar.Group>
        <Navbar.Group align={Alignment.RIGHT}>
            <Popover 
                content=
                {
                    <Menu>
                        <Link to={ROUTES.ACCOUNT}><Menu.Item icon="info-sign" text="Account" /></Link>
                        <SignOutButton />
                    </Menu>
                }
                position={Position.BOTTOM_RIGHT}    
            >
                <Button className="bp3-minimal" icon="user" text={authUser.email} />
            </Popover>
        </Navbar.Group>
    </Navbar>
);

const NavigationNonAuth = () => (
    <Navbar>
        <Navbar.Group align={Alignment.LEFT}>
            <Navbar.Heading>Anonymous</Navbar.Heading>
            <Navbar.Divider />
            <Link to={ROUTES.HOME_PAGE}><Button className="bp3-minimal" icon="home" text="Home" /></Link>
        </Navbar.Group>
        <Navbar.Group align={Alignment.RIGHT}>
            <Popover 
                content=
                {
                    <Menu>
                        <Link to={ROUTES.SIGN_IN}><Menu.Item icon="log-in" text="Sign In"/></Link>
                        <Link to={ROUTES.SIGN_UP}><Menu.Item icon="annotation" text="Sign Up" /></Link>
                    </Menu>
                }
                position={Position.BOTTOM_RIGHT}    
            >
                <Button className="bp3-minimal" icon="user" text=""/>
            </Popover>
        </Navbar.Group>
    </Navbar>
);
export default withAuthentication(Navigation);