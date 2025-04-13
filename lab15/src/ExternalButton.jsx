import React from 'react';
import './styles.css';

const ExternalButton = ({ children, onClick }) => {
  return <button className="btn-external" onClick={onClick}>{children}</button>;
};

export default ExternalButton;
