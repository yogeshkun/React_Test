import './App.css';
import React, {useReducer } from 'react';

const initialState = {
count:5
} 


function reducer(state, dispatch) {
    console.log(dispatch)
    
  switch (dispatch.type) {
    case 'increment':
      //console.log("asiydsdsa"+state.count)
        //console.log(state.count)
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    case 'rest':
      return initialState;
    default:
      throw new Error();
  }
}

function Counter() {
    
  const [state, dispatch] = useReducer(reducer, initialState);
 // console.log(state)
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type:'decrement'})}>-</button>
      <button onClick={() => dispatch({type:'increment'})}>+</button>
      <button onClick={() => dispatch({type:'reset'})}>Reset</button>
    </>
  );
}
export default Counter;