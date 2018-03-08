import React from 'react';

const Layout = () => (
  <div className="column is-10 messages hero is-fullheight">
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
);

export default Layout;
