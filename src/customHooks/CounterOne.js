import React,{useState} from 'react'
import useCounter from ' '

function CounterOne() {
   const  [count,increment,decrement,reset] =  useCounter()
    return (
        <div>
            <h1> Count - { count }</h1>
            <button onClick={increment}>Ince</button>
            <button onClick={decrement}>DEc</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default CounterOne
