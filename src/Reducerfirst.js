import './App.css';
import React, {useState,useReducer } from 'react';




// use global variable to store global state
let count = 0;

function Counter1(props){
    const [,setState] = useState();

    let incrementCount = (e) => {
        ++count;
        setState({});
    }

    return (
        <div>
            Count: {count}
            <br/>
            <button onClick={incrementCount}>Click</button>
        </div>
    );
}

function Counter2(props){
    const [,setState] = useState();

    let incrementCount = (e) => {
        ++count;
        setState({});
    }

    return (
        <div>
            Count: {count}
            <br/>
            <button onClick={incrementCount}>Click</button>
        </div>
    );
}

function Counters(props){
    return (
        <>
            <Counter1/>
            <Counter2/>
        </>
    );
}
export default Counters;