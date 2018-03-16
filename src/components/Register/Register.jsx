import React from 'react';
import Dropzone from 'react-dropzone';
import './styles.scss';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      serialNumber: '',
      assetType: '',
      assetSummary: '',
      productDesc: '',
      files: [],
      images: [],
      disabled: false
    };
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
  handleSubmit = (event) => {
    console.log(this.state);
    event.preventDefault();
  };
  handleChange = (event) => {
    const { target } = event;
    const { name, value } = target;

    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <React.Fragment>
        <form className="column is-10" onSubmit={this.handleSubmit}>
          <div className="columns">
            <div className="column is-10 messages is-fullheight">
              <div className="content">
                <div className="field">
                  <label className="label" htmlFor="serial-number">
                    ID
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      name="serialNumber"
                      id="serial-number"
                      type="text"
                      placeholder="ID"
                      value={this.state.serialNumber}
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
                      value={this.state.assetType}
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
                      name="assetSummary"
                      id="asset-summary"
                      type="text"
                      placeholder="Asset Summary"
                      maxLength="150"
                      value={this.state.assetSummary}
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
                      name="productDesc"
                      id="product-desc"
                      placeholder="Product Description"
                      value={this.state.productDesc}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>

                <div className="field">
                  <section>
                    <div className="dropzone">
                      <Dropzone multiple onDrop={this.dropFiles}>
                        <div>
                          <p>Drop files here...</p>
                          <i className="fa fa-file fa-3" aria-hidden="true" />
                        </div>
                      </Dropzone>
                    </div>
                    {this.showFiles()}
                  </section>
                </div>
              </div>
            </div>

            <div className="column is-2 messages is-fullheight">
              <div className="content">
                <div className="field">
                  <img src="https://placehold.it/288x288" alt="" />
                </div>

                <div className="field">
                  <section>
                    <div className="dropzone">
                      <Dropzone multiple onDrop={this.dropImage} accept="image/*" disabled={this.state.disabled}>
                        <div>
                          <i className="fa fa-file-image-o fa-3" aria-hidden="true" />
                          <p>Upload Image</p>
                        </div>
                      </Dropzone>
                    </div>
                    {this.showImages()}
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
        </form>
      </React.Fragment>
    );
  }
}

export default Register;
