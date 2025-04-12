import React from 'react';

const InlineButton = ({ children, onClick }) => {
  const style = {
    backgroundColor: '#4CAF50',
    padding: '10px 20px',
    fontSize: '16px',
    border: 'none',
    color: '#fff',
    cursor: 'pointer',
    marginRight: '10px'
  };

  return <button style={style} onClick={onClick}>{children}</button>;
};

export default InlineButton;
