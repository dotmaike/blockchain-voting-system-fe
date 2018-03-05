import React from 'react';
import { withRouter } from 'react-router-dom';
import fakeAuth from './../../Utils/FakeAuth';

const Dashboard = withRouter(({ history }) => (
  <section>
    <h3>Dashboard</h3>
    <button
      onClick={() => {
        fakeAuth.signout(() => history.push('/'));
      }}
    >
      Sign out
    </button>
  </section>
));

export default Dashboard;
