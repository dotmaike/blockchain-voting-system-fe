import React from 'react';
import './styles.scss';

import { getAsset } from './../../Utils/API';
import Notification from './../Notification';
import Transactions from './../Transactions';

class Movements extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
      isSuccess: false,
      message: '',
      assetInfo: ''
    };
  }
  handleClick = (event) => {
    event.preventDefault();
    getAsset(this.input.value)
      .then((res) => {
        window.scrollTo(0, 0);
        this.setState({
          assetInfo: res.data
        });
        setTimeout(this.toogleActive, 5000);
      })
      .catch((error) => {
        window.scrollTo(0, 0);
        console.log(error.response.data);
        this.setState({ isActive: true, message: 'Asset not found. Please verify the ID.' });
        setTimeout(this.toogleActive, 5000);
      });
  };
  toogleActive = () => {
    this.setState({ isActive: false });
  };
  render() {
    return (
      <React.Fragment>
        <section className="column is-10 aside hero is-fullheight movement-section">
          <div className="container has-text-centered">
            <h1 className="title">Asset Tracking</h1>
            <div className="movement-form">
              <div className="field has-addons">
                <div className="control has-50-vw">
                  <input
                    className="input"
                    type="text"
                    ref={(input) => {
                      this.input = input;
                    }}
                    placeholder="Find Assets by ID"
                  />
                </div>
                <div className="control">
                  <button className="button is-primary" onClick={this.handleClick}>
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
          {this.state.assetInfo && (
            <div className="container">
              <hr />
              <Transactions data={this.state.assetInfo} />
            </div>
          )}
        </section>
        <Notification
          isActive={this.state.isActive}
          message={this.state.message}
          isSuccess={this.state.isSuccess}
          toogleActive={this.toogleActive}
        />
      </React.Fragment>
    );
  }
}

export default Movements;
