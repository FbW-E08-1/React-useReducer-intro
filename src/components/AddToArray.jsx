import { useReducer, useEffect, useRef } from 'react';
import { textReducer } from '../reducers/textReducer';
import { addToArrayReducer } from '../reducers/addToArrayReducer';
import { ACTIONS } from '../actions/actions';

const AddToArray = () => {
  const [text, dispatchText] = useReducer(textReducer, '');
  const [array, dispatchArray] = useReducer(addToArrayReducer, []);

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const addToArray = (e) => {
    e.preventDefault();
    dispatchArray({ type: ACTIONS.ADD, cargo: text });
    dispatchText({ type: ACTIONS.RESET });
    inputRef.current.focus();
  };

  return (
    <div>
      <form>
        <input
          type='text'
          ref={inputRef}
          placeholder='Enter some text'
          onChange={(e) =>
            dispatchText({ type: ACTIONS.GRAB, cargo: e.target.value })
          }
          value={text}
        />
        <button onClick={() => dispatchArray({ type: ACTIONS.RESET })}>
          Reset Array
        </button>
        <button onClick={addToArray}>Add to Array</button>
      </form>
      {array.map((item, i) => (
        <p key={i}>{item}</p>
      ))}
    </div>
  );
};

export default AddToArray;
