import React, { Fragment } from 'react';
import './styles.css';

import Header from './../Header';
import SideBar from './../SideBar';
import Layout from './../Layout';
import Footer from './../Footer';

const Dashboard = () => (
  <Fragment>
    <Header />
    <div className="columns">
      <SideBar />
      <Layout />
    </div>
    <Footer />
  </Fragment>
);

export default Dashboard;
