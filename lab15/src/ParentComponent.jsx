import React from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const message = "Hello from parent!";
  return <ChildComponent text={message} />;
};

export default ParentComponent;
