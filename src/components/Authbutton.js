import React from 'react';
import { withRouter } from 'react-router-dom';
import fakeAuth from './../Utils/FakeAuth';

const AuthButton = withRouter(({ history }) =>
  (fakeAuth.isAuthenticated ? (
    <p>
        Welcome!{' '}
      <button
        onClick={() => {
            fakeAuth.signout(() => history.push('/'));
          }}
      >
          Sign out
      </button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  )));

export default AuthButton;
