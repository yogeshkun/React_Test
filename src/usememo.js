import React, { useState ,useMemo} from 'react'

function Usememo() {

    const [count, setCount] = useState(0);
    const [item, setItem] = useState(10);
    const multiCount = useMemo(function multi(){
        console.log("memo")
        return count*5
    },[item])
    return (
        <>
            <h1>Count = {count}</h1> 
            <h1>Count = {item}</h1>
            <h2> {multiCount} </h2>
            <button onClick={() => setCount(count + 1)}>CLick Me count</button>
            <button onClick={() => setItem(item * 10)}>CLick Me count</button>
        </>
    )
}

export default Usememo
