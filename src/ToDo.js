import './App.css';
import React, {useReducer,useState} from 'react';

const initialState = {
    count:"Yogesh" //object
};


function reducer(state, dispatch) {
   //console.log(dispatch.sau.data)
  switch (dispatch.type) {
    case 'add':
       // console.log(state.count)
      return {count: state.count + dispatch.sau.data};
    
    default:
      throw new Error();
  }
}


function Todo() {
    
  const [state, dispatch] = useReducer(reducer, initialState);
  const [data,setData] = useState("")
  console.log()
 // console.log(state)
  return (
    <div>
      <h1>To DO {state.count}</h1>
      <h2>{data}</h2>
      <input type="text" onChange={e=>setData(e.target.value)} />
      <button onClick={()=>dispatch({type:'add',sau:{data}})}>+</button>
    </div>
  );

}
export default Todo;

