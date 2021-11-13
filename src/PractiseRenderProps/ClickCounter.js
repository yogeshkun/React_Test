import React,{useState} from 'react'

function ClickCounter(props) {
    const {count,increment} = props
    return (
        <div>
            {console.log("Hello")}
            <button onClick={()=>increment()}>Clicked {count} times  </button>
        </div>
    )
}

export default ClickCounter
