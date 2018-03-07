import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import fakeAuth from './../../Utils/FakeAuth';
import './styles.css';

const Dashboard = withRouter(({ history }) => (
  <Fragment>
    <nav className="navbar has-shadow">
      <div className="container">
        <div className="navbar-brand">
          <a href="/" className="navbar-item">
            <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" />
          </a>
          <div className="navbar-burger burger" data-target="navMenu">
            <span />
            <span />
            <span />
          </div>
        </div>
        <div id="navMenu" className="navbar-menu">
          <div className="navbar-end">
            <div className="navbar-item has-dropdown is-active">
              <a href="/" className="navbar-link">
                Account
              </a>
              <div className="navbar-dropdown">
                <a href="/" className="navbar-item">
                  Dashboard
                </a>
                <a href="/" className="navbar-item">
                  Profile
                </a>
                <a href="/" className="navbar-item">
                  Settings
                </a>
                <hr className="navbar-divider" />
                <a
                  className="navbar-item"
                  href="/"
                  onClick={(e) => {
                    e.preventDefault();
                    fakeAuth.signout(() => history.push('/'));
                  }}
                >
                  Logout
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <div className="columns" id="mail-app">
      <aside className="column is-2 aside hero is-fullheight">
        <div>
          <div className="compose has-text-centered">
            <a href="/" className="button is-danger is-block is-bold">
              <span className="compose">Compose</span>
            </a>
          </div>
          <div className="main">
            <a href="/" className="item active">
              <span className="icon">
                <i className="fa fa-inbox" />
              </span>
              <span className="name">Inbox</span>
            </a>
            <a href="/" className="item">
              <span className="icon">
                <i className="fa fa-star" />
              </span>
              <span className="name">Starred</span>
            </a>
            <a href="/" className="item">
              <span className="icon">
                <i className="fa fa-envelope-o" />
              </span>
              <span className="name">Sent Mail</span>
            </a>
            <a href="/" className="item">
              <span className="icon">
                <i className="fa fa-folder-o" />
              </span>
              <span className="name">Folders</span>
            </a>
          </div>
        </div>
      </aside>
      <div className="column is-4 messages hero is-fullheight" id="message-feed">
        <div className="action-buttons">
          <div className="control is-grouped">
            <a href="/" className="button is-small">
              <i className="fa fa-chevron-down" />
            </a>
            <a href="/" className="button is-small">
              <i className="fa fa-refresh" />
            </a>
          </div>
          <div className="control is-grouped">
            <a href="/" className="button is-small">
              <i className="fa fa-inbox" />
            </a>
            <a href="/" className="button is-small">
              <i className="fa fa-exclamation-circle" />
            </a>
            <a href="/" className="button is-small">
              <i className="fa fa-trash-o" />
            </a>
          </div>
          <div className="control is-grouped">
            <a href="/" className="button is-small">
              <i className="fa fa-folder" />
            </a>
            <a href="/" className="button is-small">
              <i className="fa fa-tag" />
            </a>
          </div>
          <div className="control is-grouped pg">
            <div className="title" />
            <a href="/" className="button is-link">
              <i className="fa fa-chevron-left" />
            </a>
            <a href="/" className="button is-link">
              <i className="fa fa-chevron-right" />
            </a>
          </div>
        </div>
        <div className="inbox-messages" id="inbox-messages">
          <div v-for="(msg, index) in messages" className="card">
            <div className="card-content">
              <div className="msg-header">
                <span className="msg-from">
                  <small />
                </span>
                <span className="msg-timestamp" />
                <span className="msg-attachment">
                  <i className="fa fa-paperclip" />
                </span>
              </div>
              <div className="msg-subject">
                <span className="msg-subject">
                  <strong id="fake-subject-1" />
                </span>
              </div>
              <div className="msg-snippet">
                <p id="fake-snippet-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="column is-6 message hero is-fullheight is-hidden" id="message-pane">
        <div className="action-buttons">
          <div className="control is-grouped">
            <a href="/" className="button is-small">
              <i className="fa fa-inbox" />
            </a>
            <a href="/" className="button is-small">
              <i className="fa fa-exclamation-circle" />
            </a>
            <a href="/" className="button is-small">
              <i className="fa fa-trash-o" />
            </a>
          </div>
          <div className="control is-grouped">
            <a href="/" className="button is-small">
              <i className="fa fa-exclamation-circle" />
            </a>
            <a href="/" className="button is-small">
              <i className="fa fa-trash-o" />
            </a>
          </div>
          <div className="control is-grouped">
            <a href="/" className="button is-small">
              <i className="fa fa-folder" />
            </a>
            <a href="/" className="button is-small">
              <i className="fa fa-tag" />
            </a>
          </div>
        </div>
        <div className="box message-preview">
          <div className="top">
            <div className="avatar">
              <img alt="" src="https://placehold.it/128x128" />
            </div>
            <div className="address">
              <div className="name">John Smith</div>
              <div className="email">someone@gmail.com</div>
            </div>
            <hr />
            <div className="content" />
          </div>
        </div>
      </div>
    </div>
    <footer className="footer">
      <div className="container">
        <div className="content has-text-centered">
          <p>
            <strong>Bulma Templates</strong> by <a href="https://github.com/dansup">Daniel Supernault</a>. The source code is
            licensed
            <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
          </p>
          <p>
            <a className="icon" href="https://github.com/dansup/bulma-templates">
              <i className="fa fa-github" />
            </a>
          </p>
        </div>
      </div>
    </footer>
  </Fragment>
));

export default Dashboard;
