import React from 'react'
import { useState } from 'react'


function Previous_state() {
    const [count, setCount] = useState(1)
    function updateCounter() {
        let randomdata = Math.floor(Math.random() * 1)
        setCount((pre) => {
            console.warn(pre)
            return randomdata;
        })
    }
    return (
        <div>
            <h2>Previous State in functinal component</h2>
            <h2>{count}</h2>
            <button onClick={updateCounter}>update</button>
        </div>
    )
}

export default Previous_state
