import React, { Component, Fragment } from 'react';
import Dropzone from 'react-dropzone';
import './styles.scss';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = { files: [] };
  }
  onDrop = (file) => {
    const files = this.state.files.concat(file);
    this.setState({
      files
    });
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
  render() {
    return (
      <Fragment>
        <div className="column is-8 messages hero is-fullheight">
          <div className="content">
            <div className="field">
              <label className="label" htmlFor="product-id">
                ID
              </label>
              <div className="control">
                <input className="input" id="product-id" type="text" placeholder="ID" />
              </div>
            </div>

            <div className="field">
              <label className="label" htmlFor="product-desc">
                Product Description
              </label>
              <div className="control">
                <textarea className="textarea" id="product-desc" placeholder="Product Description" />
              </div>
            </div>

            <div className="field">
              <section>
                <div className="dropzone">
                  <Dropzone multiple onDrop={this.onDrop}>
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

        <div className="column is-2 messages hero is-fullheight">
          <div className="content">

            <div className="field">
              <img src="https://placehold.it/288x288" alt="" />
            </div>

            <div className="field">
              <section>
                <div className="dropzone">
                  <Dropzone multiple onDrop={this.onDrop} accept="image/*">
                    <div>
                      <i className="fa fa-file-image-o fa-3" aria-hidden="true" />
                      <p>Upload Image</p>
                    </div>
                  </Dropzone>
                </div>
                {this.showFiles()}
              </section>
            </div>

          </div>
        </div>
      </Fragment>
    );
  }
}

export default Register;
