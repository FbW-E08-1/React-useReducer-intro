import { useReducer } from 'react';

const countReducer = (state, action) => {
  switch (action) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    case 'RESET':
      return (state = 0);
    case 'ADD5':
      return state + 5;
    default:
      return state;
  }
};

const Counter = () => {
  const [count, countDispatch] = useReducer(countReducer, 0);

  return (
    <div>
      <button onClick={() => countDispatch('INCREMENT')}>Increment</button>
      <button onClick={() => countDispatch('DECREMENT')}>Decrement</button>
      <button onClick={() => countDispatch('RESET')}>Reset</button>
      <button onClick={() => countDispatch('ADD5')}>Add 5</button>
      <h2>{count}</h2>
    </div>
  );
};

export default Counter;
