import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

import Footer from './../Footer';
import Select from './../Select';
import API from './../../Utils/API';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      business: [{ name: 'Automotive' }, { name: 'Other' }]
    };
  }
  componentWillMount() {
    API.getCountries()
      .then(data => this.setState({ countries: data }))
      .catch(error => console.error(error));
  }
  componentDidMount() {
    this.randomImage();
  }
  randomImage = () => {
    const num = Math.floor(Math.random() * 6);
    this.setState({ image: num });
  };
  render() {
    return (
      <section>
        <nav className="navbar has-shadow">
          <div className="container custom-navbar-heigh">
            <div className="navbar-brand">
              <p className="navbar-item title sign-up-title">Asset Tracking</p>
              <div className="navbar-burger burger" data-target="navbar">
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>

          <div className="navbar-menu">
            <div className="navbar-end">
              <div className="navbar-item">
                <div className="field is-grouped">
                  <p className="control">
                    <Link to="/login" className="button is-primary">
                      <span className="icon">
                        <i className="fa fa-sign-in" aria-hidden="true" />
                      </span>
                      <span>Access</span>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <div className="hero is-fullheight">
          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="title">Create an account on Asset Tracking</h1>
            </div>
          </div>
          <div className="hero-body">
            <div className="container">
              <div className="columns">
                <div className="column is-6 hero">
                  <div className="columns is-vcentered">
                    <div className="column is-12">
                      <figure className="image hero is-fullheight">
                        <img className="cover" src={`/${this.state.image}.jpg`} alt="Description" />
                      </figure>
                    </div>
                  </div>
                </div>

                <div className="column is-6 hero">
                  <div className="field is-horizontal">
                    <div className="field-label is-normal">
                      <label htmlFor="#" className="label">
                        Name
                      </label>
                    </div>
                    <div className="field-body">
                      <div className="field">
                        <p className="control">
                          <input className="input" type="text" placeholder="First Name" />
                        </p>
                      </div>
                      <div className="field">
                        <p className="control">
                          <input className="input" type="text" placeholder="Last Name" />
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="field">
                    <label htmlFor="#" className="label">
                      Username
                    </label>
                    <div className="control has-icons-left has-icons-right">
                      <input className="input" type="text" placeholder="Username" />
                      <span className="icon is-small is-left">
                        <i className="fa fa-user" aria-hidden="true" />
                      </span>
                    </div>
                  </div>

                  <div className="field">
                    <label htmlFor="#" className="label">
                      Email
                    </label>
                    <div className="control has-icons-left has-icons-right">
                      <input className="input" type="email" placeholder="Email" />
                      <span className="icon is-small is-left">
                        <i className="fa fa-envelope" />
                      </span>
                    </div>
                  </div>

                  <div className="field">
                    <label htmlFor="#" className="label">
                      Password
                    </label>
                    <div className="control has-icons-left has-icons-right">
                      <input className="input" type="password" placeholder="Password" />
                      <span className="icon is-small is-left">
                        <i className="fa fa-lock" />
                      </span>
                    </div>
                  </div>

                  <div className="field">
                    <label htmlFor="#" className="label">
                      Password confirmation
                    </label>
                    <div className="control has-icons-left has-icons-right">
                      <input className="input" type="password" placeholder="Password confirmation" />
                      <span className="icon is-small is-left">
                        <i className="fa fa-lock" />
                      </span>
                    </div>
                  </div>

                  <div className="field">
                    <label htmlFor="#" className="label">
                      Type of business
                    </label>
                    <div className="control">
                      <Select countries={this.state.business} defalutValue="" defaultOption="Please select business" />
                    </div>
                  </div>

                  <div className="field">
                    <label htmlFor="#" className="label">
                      Address Line 1
                    </label>
                    <div className="control">
                      <input className="input" type="text" placeholder="Address Line 1" />
                    </div>
                  </div>

                  <div className="field">
                    <label htmlFor="#" className="label">
                      Address Line 2
                    </label>
                    <div className="control">
                      <input className="input" type="text" placeholder="Address Line 2" />
                    </div>
                  </div>

                  <div className="field">
                    <label htmlFor="#" className="label">
                      City / Town
                    </label>
                    <div className="control">
                      <input className="input" type="text" placeholder="City / Town" />
                    </div>
                  </div>

                  <div className="field">
                    <label htmlFor="#" className="label">
                      State / Province / Region
                    </label>
                    <div className="control">
                      <input className="input" type="text" placeholder="State / Province / Region" />
                    </div>
                  </div>

                  <div className="field">
                    <label htmlFor="#" className="label">
                      Zip / Postal Code
                    </label>
                    <div className="control">
                      <input className="input" type="text" placeholder="Zip / Postal Code" />
                    </div>
                  </div>

                  <div className="field">
                    <label htmlFor="#" className="label">
                      Country
                    </label>
                    <div className="control">
                      {this.state.countries.length && (
                        <Select countries={this.state.countries} defalutValue="" defaultOption="Please select a country" />
                      )}
                    </div>
                  </div>

                  <div className="field">
                    <div className="control">
                      <label htmlFor="#" className="checkbox">
                        <input type="checkbox" />
                        <span>
                          &emsp; I agree to the <a href="#terms">terms and conditions</a>
                        </span>
                      </label>
                    </div>
                  </div>

                  <div className="field is-grouped">
                    <div className="control">
                      <button className="button is-primary">Submit</button>
                    </div>
                    <div className="control">
                      <button className="button is-ligth">Cancel</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    );
  }
}

export default SignUp;
