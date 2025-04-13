import React, { useState } from 'react';

const StateCounter = () => {
  const [value, setValue] = useState(0);

  return (
    <div>
      <p>Count: {value}</p>
      <button onClick={() => setValue(value + 1)}>Increase</button>
      <button onClick={() => setValue(value - 1)}>Decrease</button>
    </div>
  );
};

export default StateCounter;
