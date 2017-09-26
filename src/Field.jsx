import React from 'react';
import PropTypes from 'prop-types';
import './Field.css';

const Field = (props) => {
  const { label, value } = props;

  return (
    <label>
      <h2 className="Field__label">
        {label}
      </h2>
      <select
        className="Field__option"
        value={value}
      >
        <option value="">Select an option</option>
        <option value="high">A lot!</option>
        <option value="medium">Moderate</option>
        <option value="low">Not much</option>
      </select>
    </label>
  );
};

Field.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Field;
