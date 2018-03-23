import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

class Notification extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isActive: props.isActive };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isActive: false });
    }, 2000);
  }
  render() {
    return (
      <React.Fragment>
        <div className={`columns snackbar ${this.state.isActive ? 'active' : ''}`}>
          <div className="column">
            <div className={`notification ${this.props.isSuccess ? 'is-success' : 'is-danger'}`}>{this.props.message}</div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

Notification.propTypes = {
  isActive: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  isSuccess: PropTypes.bool.isRequired
};

export default Notification;
