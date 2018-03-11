import React from 'react';
import './styles.scss';

const Footer = () => (
  <footer className="footer">
    <div className="icon-container">
      <p>
        <a className="icon is-large has-text-grey" href="#email">
          <i className="fa fa-lg fa-envelope" />
        </a>
      </p>
      <p>
        <a className="icon is-large has-text-grey" href="#twitter">
          <i className="fa fa-lg fa-twitter" />
        </a>
      </p>
      <p>
        <a className="icon is-large has-text-grey" href="#google-plus">
          <i className="fa fa-lg fa-google-plus" />
        </a>
      </p>
      <p>
        <a className="icon is-large has-text-grey" href="#facebook">
          <i className="fa fa-lg fa-facebook-f" />
        </a>
      </p>
    </div>
  </footer>
);

export default Footer;
