import React, { useRef } from 'react';

const AutoFocusInput = () => {
  const inputElement = useRef(null);

  return (
    <div>
      <input ref={inputElement} type="text" placeholder="Focus me!" />
      <button onClick={() => inputElement.current.focus()}>Focus Input</button>
    </div>
  );
};

export default AutoFocusInput;
