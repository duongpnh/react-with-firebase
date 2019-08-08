import React from 'react';
import { withRouter } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import { withFirebase } from '../Firebase';
import AuthUserContext from './context';

// "condition" is condition to withAuthorization decide to redirect to the public page or private page

const withAuthorization = condition => Component => {
    
    class WithAuthorization extends React.Component {

        componentDidMount() {
            this.listener = this.props.firebase.auth.onAuthStateChanged(
                authUser => {
                    if (!condition(authUser)) {
                        this.props.history.push(ROUTES.SIGN_IN);
                    }
                }
            )
        }

        componentWillUnmount() {
            this.listener();
        }

        render() {
            return (
                <AuthUserContext.Consumer>
                    {authUser => condition(authUser) ? <Component {...this.props} /> : null}
                </AuthUserContext.Consumer>
            )
        }
    }

    return withRouter(withFirebase(WithAuthorization))
}

export default withAuthorization;