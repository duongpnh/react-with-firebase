import React from 'react';
import { withFirebase } from '../Firebase';
import {Menu} from '@blueprintjs/core';

const SignOutButton = ({ firebase }) => (
    <Menu.Item onClick={firebase.doSignOut} icon="log-out" text="Sign Out"/>
);

export default withFirebase(SignOutButton);