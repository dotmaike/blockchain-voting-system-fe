import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import './styles.scss';

import fakeAuth from './../../Utils/FakeAuth';

class Login extends React.Component {
  state = {
    redirectToReferrer: false
  };

  login = () => {
    fakeAuth.authenticate();
    this.setState({ redirectToReferrer: true });
  };

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/dashboard' } };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    return (
      <section className="hero is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="column is-4 is-offset-4">
              <h3 className="title has-text-grey">Login</h3>
              <p className="subtitle has-text-grey">Please login to proceed.</p>
              <div className="box">
                <figure className="avatar">
                  <img alt="" src="https://placehold.it/128x128" />
                </figure>
                <form>
                  <div className="field">
                    <div className="control">
                      <input className="input is-large" type="email" placeholder="Your Email" />
                    </div>
                  </div>

                  <div className="field">
                    <div className="control">
                      <input className="input is-large" type="password" placeholder="Your Password" />
                    </div>
                  </div>
                  <div className="field">
                    <label className="checkbox" htmlFor="checkbox">
                      <input type="checkbox" id="checkbox" />
                      Remember me
                    </label>
                  </div>
                  <button className="button is-block is-info is-large is-fullwidth" onClick={this.login}>
                    Login
                  </button>
                </form>
              </div>
              <p className="has-text-grey">
                <a href="../">Sign Up</a> &nbsp;·&nbsp;
                <a href="../">Forgot Password</a> &nbsp;·&nbsp;
                <a href="../">Need Help?</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

Login.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.any
  }).isRequired
};

export default Login;
