import React from 'react';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';

import './styles.scss';

class EventCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // form: {
      //   ownerName:
      //     sessionStorage.getItem('userInfo') && Object.keys(JSON.parse(sessionStorage.getItem('userInfo'))).length
      //       ? JSON.parse(sessionStorage.getItem('userInfo')).username
      //       : ''
      // },
      disabled: false,
      // isActive: false,
      // isSuccess: false,
      // message: '',
      // assetInfo: '',
      files: []
    };
  }

  dropFiles = (file) => {
    const files = this.state.files.concat(file);
    this.setState(state => ({ form: { ...state.form, ...{ file: file[0] } }, files }));
  };
  showFiles = () =>
    this.state.files && (
      <div>
        <ul>
          {this.state.files.map(file => (
            <li key={Math.random()}>
              <div>{`${file.name} : ${file.size} bytes.`}</div>
            </li>
          ))}
        </ul>
      </div>
    );

  close = () => {
    this.props.handleClose();
  }

  handleCancel = (e) => {
    e.preventDefault();
    this.props.handleClose();
  }

  render() {
    return (
      <div className="modal is-active">
        <div className="modal-background" />
        <div className="modal-content">
          <header className="modal-card-head">
            <p className="modal-card-title is-uppercase">Add Event</p>
          </header>
          <section className="modal-card-body">
            <form id="event-form" className="column is-10" onSubmit={this.handleSubmit}>
              <div className="columns">
                <div className="column is-10 messages is-fullheight">
                  <div className="content">
                    <div className="field">
                      <label className="label" htmlFor="event-summary">
                        Summary
                      </label>
                      <div className="control">
                        <input
                          className="input"
                          name="summary"
                          id="event-summary"
                          type="text"
                          placeholder="event Summary"
                          maxLength="150"
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>

                    <div className="field">
                      <label className="label" htmlFor="product-desc">
                        Description
                      </label>
                      <div className="control">
                        <textarea
                          className="textarea"
                          name="description"
                          id="product-desc"
                          placeholder="Product Description"
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="field is-grouped">
                    <p className="control">
                      <input type="submit" className="button is-primary" value="Submit" />
                    </p>
                    <p className="control">
                      <button className="button is-light" onClick={this.handleCancel}>Cancel</button>
                    </p>
                  </div>
                </div>

                <div className="column is-2 messages is-fullheight">
                  <div className="content">
                    <div className="field is-centered">
                      <img
                        src={this.state.files.length ? this.state.files[0].preview : 'https://placehold.it/288x288?text=Preview'}
                        alt=""
                      />
                    </div>

                    <div className="field">
                      <section>
                        <div className="dropzone">
                          <Dropzone
                            id="file"
                            name="file"
                            accept="image/*"
                            disabled={this.state.disabled}
                            onDrop={this.dropFiles}
                          >
                            <div>
                              <p>
                                <i className="fa fa-upload" /> Choose a image...
                              </p>
                              <i className="fa fa-file-image-o fa-3" aria-hidden="true" />
                            </div>
                          </Dropzone>
                        </div>
                        {this.showFiles()}
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </section>
        </div>
        <button className="modal-close is-large" aria-label="close" onClick={this.close} />
      </div>
    );
  }
}

EventCreate.propTypes = {
  handleClose: PropTypes.func.isRequired
};

export default EventCreate;
