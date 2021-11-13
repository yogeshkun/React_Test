import React,{useGlobalState} from 'react';




function Counter1(props){
    // using our `useGlobalState` hook
    const [count, setCount] = useGlobalState(globalCount);

    let incrementCount = (e) => {
        setCount(count + 1)
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
    // using our `useGlobalState` hook
    const [count, setCount] = useGlobalState(globalCount);

    let incrementCount = (e) => {
        setCount(count + 1)
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
    const globalCount = useGlobalState(0);
    return (
        <>
            <Counter1/>
            <Counter2/>
        </>
    );
}

export default Counters