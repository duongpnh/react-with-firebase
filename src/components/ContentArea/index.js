import React from 'react';
import { Route, Switch } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import SignUpPage from '../SignUp';
import HomePage from '../HomePage';
import PasswordForgetPage from '../PasswordForget';
import Account from '../Account';
import SignInPage from '../SignIn';
import Details from '../Details';
import User from '../User';

const ContentArea = () => (
    <>
        <Switch>
            <Route exact path={ROUTES.HOME_PAGE} component={HomePage} />
            <Route path={ROUTES.SIGN_IN} component={SignInPage} />
            <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
            <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
            <Route path={ROUTES.ACCOUNT} component={Account} />
            <Route path={ROUTES.MANAGEMENT_USERS} component={User} />
            <Route path={ROUTES.DETAILS_SUBJECT} component={Details} />
        </Switch>
    </>
);

export default ContentArea;