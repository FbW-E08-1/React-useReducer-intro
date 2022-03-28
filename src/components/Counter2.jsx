import { useReducer } from 'react';
import { countReducer } from '../reducers/countReducer';
import { ACTIONS } from '../actions/actions';

const Counter2 = () => {
  const [count, countDispatch] = useReducer(countReducer, 0);

  const x = 5;
  const y = 3;

  return (
    <div>
      <button
        onClick={() => countDispatch({ type: ACTIONS.INCREMENT, cargo: x })}>
        Increment
      </button>
      <button
        onClick={() =>
          countDispatch({ type: ACTIONS.DECREMENT, cargo: x - y })
        }>
        Decrement
      </button>
      <button onClick={() => countDispatch({ type: ACTIONS.RESET, cargo: 0 })}>
        Reset
      </button>
      <h2>{count}</h2>
    </div>
  );
};

export default Counter2;
