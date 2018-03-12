import React from 'react';
import './styles.scss';

const Movements = () => (
  <section className="column is-10 aside hero is-fullheight movement-section">
    <div className="container has-text-centered">
      <h1 className="title">Asset Tracking</h1>
      <div className="movement-form">
        <div className="field has-addons">
          <div className="control has-50-vw">
            <input className="input" type="text" placeholder="Find Assets" />
          </div>
          <div className="control">
            <button className="button is-info">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Movements;
