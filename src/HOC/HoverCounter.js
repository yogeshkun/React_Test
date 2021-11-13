import React,{useState} from 'react'
import Counter from './Counter'
function HoverCounter(props) {
    
    return (
        <div>
            
            <h1 onMouseOver={()=>props.function(props.name)}>{props.name}Hover {props.name} times </h1>
        </div>
    )
}

export default Counter(HoverCounter)
