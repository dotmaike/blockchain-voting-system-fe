import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import logo from './blockchain.png';
import './styles.scss';

import { getUser } from './../../Utils/API';

class Login extends React.Component {
  state = {
    username: '',
    password: '',
    redirectToReferrer: false
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  login = () => {
    getUser(this.state.username, this.state.password)
      .then((res) => {
        sessionStorage.setItem('userInfo', JSON.stringify(res.data));
        this.setState({ redirectToReferrer: true });
      })
      .catch(error => console.error(error));
  };

  render() {
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={{ pathname: '/home' }} />;
    }

    return (
      <section className="hero is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="column is-4 is-offset-4">
              <h3 className="title has-text-grey">Asset Tracking</h3>
              <p className="subtitle has-text-grey">Please login to proceed.</p>
              <div className="box">
                <figure className="avatar">
                  <img src={logo} alt="logo" />
                </figure>
                <section>
                  <div className="field">
                    <div className="control">
                      <input
                        name="username"
                        className="input is-large"
                        type="text"
                        placeholder="User Name"
                        onChange={e => this.onChange(e)}
                        value={this.state.username}
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
                <Link to="/">Sign Up</Link>&nbsp;·&nbsp;
                <a href="#forgot">Forgot Password</a>&nbsp;·&nbsp;
                <a href="#help">Need Help?</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Login;
