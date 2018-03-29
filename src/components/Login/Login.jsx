import React from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import logo from './blockchain.png';
import './styles.scss';

import { getUser } from './../../Utils/API';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      isAuthenticated:
        sessionStorage.getItem('userInfo') && Object.keys(JSON.parse(sessionStorage.getItem('userInfo'))).length,
      error: false
    };
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  login = () => {
    const { history } = this.props;
    getUser(this.state.username, this.state.password)
      .then((res) => {
        sessionStorage.setItem('userInfo', JSON.stringify(res.data));
        history.push('/home');
      })
      .catch((error) => {
        if (error.response.status === 401) {
          this.setState({ error: true });
          setTimeout(() => {
            this.setState({ error: false });
          }, 5000);
        } else {
          console.error(error);
        }
      });
  };

  render() {
    const { from } = this.props.location.state || { from: { pathname: this.state.isAuthenticated ? '/home' : '/' } };
    if (this.state.isAuthenticated) {
      return <Redirect to={from} />;
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
                  {this.state.error && <p className="help is-danger">The username or password are not valid</p>}
                  <div className="field">
                    <div className="control">
                      <input
                        name="username"
                        className="input is-large"
                        type="text"
                        placeholder="User Name"
                        onChange={this.onChange}
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
                        onChange={this.onChange}
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

Login.propTypes = {
  location: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  history: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

export default withRouter(Login);
