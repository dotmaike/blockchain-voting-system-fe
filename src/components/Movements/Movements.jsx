import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

import { getAsset } from './../../Utils/API';
import Transactions from './../Transactions';

class Movements extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ''
    };
  }
  handleClick = (event) => {
    event.preventDefault();
    getAsset(this.input.value)
      .then((res) => {
        res.data.events = res.data.events.map((item, i) => ({ ...item, id: i }));
        this.setState({
          data: res.data
        });
      })
      .catch((error) => {
        console.log(error.response.data);
        this.props.showNotification({ data: { message: 'Asset not found. Please verify the ID.' } });
      });
  };
  updateEventList = (events) => {
    if (events) {
      this.setState(state => ({ data: { ...state.data, events } }));
    }
  };
  render() {
    return (
      <React.Fragment>
        <section className="column is-10 hero is-fullheight movement-section">
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
          {this.state.data && (
            <div className="container">
              <hr />
              <Transactions
                data={this.state.data}
                showNotification={this.props.showNotification}
                updateEventList={this.updateEventList}
              />
            </div>
          )}
        </section>
      </React.Fragment>
    );
  }
}

Movements.propTypes = {
  showNotification: PropTypes.func.isRequired
};

export default Movements;
