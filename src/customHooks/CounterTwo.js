import React,{useState} from 'react'

function CounterTwo() {
    const [count,setCount] = useState(0)

    const increment = () => {
        setCount(prevCount => prevCount + 1 )
    }
    const decrement = () => {
        setCount(prevCount => prevCount - 1 )
    }
    const reset = () => {
        setCount(0)
    }
    return (
        <div>
            <h1> Count - { count }</h1>
            <button onClick={increment}>Ince</button>
            <button onClick={decrement}>DEc</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default CounterTwo