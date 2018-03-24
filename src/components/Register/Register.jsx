import React from 'react';
import './styles.scss';

import { setAsset } from './../../Utils/API';

import Notification from './../Notification';

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
      isActive: false,
      isSuccess: false,
      message: '',
      assetInfo: ''
    };
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  dropFiles = (file) => {
    const files = this.state.files.concat(file);
    this.setState({
      files
    });
  };
  dropImage = (image) => {
    const images = this.state.images.concat(image);
    this.setState({
      images,
      disabled: true
    });
  };
  showImages = () =>
    this.state.images && (
      <div>
        <ul>
          {this.state.images.map(img => (
            <li key={Math.random()}>
              <div>{`${img.name} : ${img.size} bytes.`}</div>
            </li>
          ))}
        </ul>
      </div>
    );
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
        window.scrollTo(0, 0);
        this.setState({
          isActive: true,
          isSuccess: true,
          message: 'Asset was successfully added',
          assetInfo: res.data
        });
        setTimeout(this.toogleActive, 5000);
      })
      .catch((error) => {
        window.scrollTo(0, 0);
        this.setState({ isActive: true, message: error.response.data.message });
        setTimeout(this.toogleActive, 5000);
      });
  };
  handleChange = (event) => {
    const { target } = event;
    const { name, value, files } = target;
    this.setState(state => ({ form: { ...state.form, ...{ [name]: name === 'file' ? files.item(0) : value } } }));
  };
  toogleActive = () => {
    this.setState({ isActive: false });
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
            </div>

            <div className="column is-2 messages is-fullheight">
              <div className="content">
                <div className="field is-centered">
                  {this.state.file ? (
                    <img src={this.state.file} alt="" />
                  ) : (
                    <i className="fa fa-file-image-o fa-5" aria-hidden="true" />
                  )}
                </div>

                <div className="field">
                  <section>
                    <div className="file has-name is-boxed">
                      <label className="file-label" htmlFor="file">
                        <input
                          className="file-input"
                          type="file"
                          id="file"
                          name="file"
                          accept="image/*"
                          disabled={this.state.disabled}
                          onChange={this.handleChange}
                        />
                        <span className="file-cta">
                          <span className="file-icon">
                            <i className="fa fa-upload" />
                          </span>
                          <span className="file-label">Choose a image…</span>
                        </span>
                        <span className="file-name">Screen Shot 2017-07-29 at 15.54.25.png</span>
                      </label>
                    </div>
                  </section>
                </div>
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
          <div className="column is-10 card">
            <div className="card-content">
              <div className="content"><pre>{JSON.stringify(this.state.assetInfo)}</pre></div>
            </div>
          </div>
        </form>
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

export default Register;
