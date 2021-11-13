import React,{useState} from 'react'
import Counter from './Counter'
function ClickCounter(props) {
    
    return (
        <div>
            <button onClick={()=>props.function(props.name)}>{props.name}Click {props.name} times </button>
        </div>
    )
}

export default Counter(ClickCounter)
