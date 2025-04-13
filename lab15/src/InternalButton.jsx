import React from 'react';

const InternalButton = ({ children, onClick }) => {
  return (
    <>
      <style>{`
        .btn-internal {
          background-color: #2196F3;
          padding: 10px 20px;
          font-size: 16px;
          border: none;
          color: #fff;
          cursor: pointer;
          margin-right: 10px;
        }
      `}</style>
      <button className="btn-internal" onClick={onClick}>{children}</button>
    </>
  );
};

export default InternalButton;
