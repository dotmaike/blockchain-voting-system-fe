import React from 'react';
import { Redirect } from 'react-router-dom';
import './styles.scss';

import fakeAuth from './../../Utils/FakeAuth';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    redirectToReferrer: false
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  login = () => {
    this.setState({ redirectToReferrer: true }, fakeAuth.authenticate());
  };

  render() {
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={{ pathname: '/dashboard' }} />;
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
                <section>
                  <div className="field">
                    <div className="control">
                      <input
                        name="email"
                        className="input is-large"
                        type="email"
                        placeholder="Your Email"
                        onChange={e => this.onChange(e)}
                        value={this.state.email}
                      />
                    </div>
                  </div>

                  <div className="field">
                    <div className="control">
                      <input
                        name="password"
                        className="input is-large"
                        type="password"
                        placeholder="Your Password"
                        onChange={e => this.onChange(e)}
                        value={this.state.password}
                      />
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
                </section>
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

export default Login;
