import React from 'react';

const Home = () => (
  <div className="column is-10 messages hero is-fullheight">
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

export default Home;
