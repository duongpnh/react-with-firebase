import React from 'react';
import { FirebaseContext } from '../Firebase';

const TestComponent = () => {
    return (
        <FirebaseContext.Consumer>
            {firebase => <h1>Access to firebase</h1>}
        </FirebaseContext.Consumer>
    )
};

export default TestComponent;