import React from 'react';
import PropTypes from 'prop-types';

const ChildComponent = ({ text }) => {
  return <div>{text}</div>;
};

ChildComponent.propTypes = {
  text: PropTypes.string.isRequired
};

export default ChildComponent;
