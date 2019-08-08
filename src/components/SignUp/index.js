import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';
import { withFirebase } from '../Firebase';

const SignUpPage = () => (
  <div>
    <h1>SignUp</h1>
    <SignUpForm />
  </div>
);

const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null
};

class SignUpFormBase extends Component {
  constructor(props) {
    super(props);
    this.state = {...INITIAL_STATE};
  }

  onSubmit = event => {
    const { username, email, passwordOne } = this.state;
    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        // Put user to database
        return this.props.firebase
                   .user(authUser.user.uid)
                   .set({username, email});
      })
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME_PAGE);
      })
      .catch(error => {
        this.setState({ error });
      });
    event.preventDefault(); 
  }

  onChange = event => {
    this.setState({[event.target.name]: event.target.value});
  };

  render() {
    const {
        username,
        email,
        passwordOne,
        passwordTwo,
        error
    } = this.state;
    const isInvalid = username === '' || email === '' || passwordOne === '' || passwordOne !== passwordTwo;
    return (
      <form onSubmit={this.onSubmit}>
          <input 
            type="text"
            name="username"
            value={username}
            onChange={this.onChange}
            placeholder="Full name"
          />
          <input 
            type="email"
            name="email"
            value={email}
            onChange={this.onChange}
            placeholder="Email Address"
          />
          <input 
            type="password"
            name="passwordOne"
            value={passwordOne}
            onChange={this.onChange}
            placeholder="Password"
          />
          <input 
            type="password"
            name="passwordTwo"
            value={passwordTwo}
            onChange={this.onChange}
            placeholder="Confirm Password"
          />
          <button disabled={isInvalid} type="submit">SIGN UP</button>
          {error && <p>{error.message}</p>}
      </form>
    );
  }
}

const SignUpForm = withRouter(withFirebase(SignUpFormBase));

const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
);

export default SignUpPage;

export { SignUpForm, SignUpLink };