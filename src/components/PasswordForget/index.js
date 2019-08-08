import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

const PasswordForgetPage = () => (
    <>
        <h1>Forgot Password</h1>
        <PasswordForgetForm />
    </>
);

const INITIAL_STATE = {
    email: '',
    error: null
};

class PasswordForgetFormBase extends Component {
    
    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };
    }

    onSubmit = event => {
        const {email} = this.state;
        this.props.firebase
            .doPasswordReset(email)
            .then(() => this.setState({ ...INITIAL_STATE }))
            .catch(error => this.setState({error}));
        event.preventDefault();
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }
    
    render() {
        const {email} = this.state;
        const isInvalid = email === '';
        return (
            <form onSubmit={this.onSubmit}>
                <input 
                    type="email"
                    name="email"
                    value={email}
                    onChange={this.onChange}
                    placeholder="Email Address"
                />
                <button type="submit" disabled={isInvalid}>Reset My Password</button>
            </form>
        )
    }
} 

export default withRouter(PasswordForgetPage);

const PasswordForgetForm = withFirebase(PasswordForgetFormBase);

const PasswordForgetLink = () => (
    <p>
        <Link to={ROUTES.PASSWORD_FORGET}>Forgot Password</Link>
    </p>
);

export {PasswordForgetForm, PasswordForgetLink};
