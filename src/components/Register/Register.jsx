import React from 'react';
import Dropzone from 'react-dropzone';
import PropTypes from 'prop-types';
import './styles.scss';

import { setAsset } from './../../Utils/API';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        ownerName:
          sessionStorage.getItem('userInfo') && Object.keys(JSON.parse(sessionStorage.getItem('userInfo'))).length
            ? JSON.parse(sessionStorage.getItem('userInfo')).username
            : ''
      },
      disabled: false,
      assetInfo: '',
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
  handleSubmit = (e) => {
    e.preventDefault();
    const data = this.state.form;
    const formData = new FormData();
    Object.keys(data).forEach((item) => {
      formData.append(item, data[item]);
    });
    setAsset(formData)
      .then((res) => {
        this.setState({
          isSuccess: true,
          assetInfo: res.data,
          form: {},
          files: []
        });
        document.getElementById('asset-form').reset();
        this.props.showNotification({ data: res, type: 'add' });
      })
      .catch((error) => {
        this.props.showNotification({ data: error.response.data });
      });
  };
  handleChange = (event) => {
    const { target } = event;
    const { name, value } = target;
    this.setState(state => ({ form: { ...state.form, ...{ [name]: value } } }));
  };
  render() {
    return (
      <React.Fragment>
        <form id="asset-form" className="column is-10" onSubmit={this.handleSubmit}>
          <div className="columns">
            <div className="column is-10 messages is-fullheight">
              <div className="content">
                <div className="field">
                  <label className="label" htmlFor="serial-number">
                    Serial Number
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      name="serialNumber"
                      id="serial-number"
                      type="text"
                      placeholder="Serial Number"
                      onChange={this.handleChange}
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="label" htmlFor="asset-type">
                    Asset Type
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      name="assetType"
                      id="asset-type"
                      type="text"
                      placeholder="Asset Type"
                      onChange={this.handleChange}
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="label" htmlFor="asset-summary">
                    Asset Summary
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      name="summary"
                      id="asset-summary"
                      type="text"
                      placeholder="Asset Summary"
                      maxLength="150"
                      onChange={this.handleChange}
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="label" htmlFor="product-desc">
                    Product Description
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
                  <button className="button is-light">Cancel</button>
                </p>
              </div>
              {this.state.isSuccess && (
                <div className="card">
                  <div className="card-content">
                    <div className="content">
                      <pre>ID: {this.state.assetInfo.uuid}</pre>
                    </div>
                  </div>
                </div>
              )}
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
      </React.Fragment>
    );
  }
}

Register.propTypes = {
  showNotification: PropTypes.func.isRequired
};

export default Register;
