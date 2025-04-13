import React, { useReducer } from 'react';

const initialState = { count: 0 };

function counterReducer(state, action) {
  switch (action.type) {
    case 'increase':
      return { count: state.count + 1 };
    case 'decrease':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

const ReducerCounter = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increase' })}>Increase</button>
      <button onClick={() => dispatch({ type: 'decrease' })}>Decrease</button>
    </div>
  );
};

export default ReducerCounter;
