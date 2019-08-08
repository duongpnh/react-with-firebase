import React from 'react';
import { withAuthorization, AuthUserContext } from '../Session';

const Account = () => (
    <AuthUserContext.Consumer>
        {authUser => (
            <>
                <h1>My Account</h1>
                <p>Email: {authUser.email}</p>
            </>
        )}
    </AuthUserContext.Consumer>
);
const condition = authUser => !!authUser;
export default withAuthorization(condition)(Account);