import React from 'react';
import PropTypes from 'prop-types';

const Select = props => (
  <div className="select">
    <select id="country" name="country" value={props.defaultValue}>
      <option value="">{props.defaultOption}</option>
      {props.countries.map(opt => (
        <option key={opt.name} value={opt.name}>
          {opt.name}
        </option>
      ))}
    </select>
  </div>
);

Select.propTypes = {
  defaultValue: PropTypes.string.isRequired,
  defaultOption: PropTypes.string.isRequired,
  countries: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Select;
