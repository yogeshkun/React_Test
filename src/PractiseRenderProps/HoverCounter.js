import React,{useState} from 'react'

function HoverCounter(props) {
    const {count,increment} = props
    return (
        <div>
            
            <h2 onMouseOver={()=>increment()}>Clicked {count} times  </h2>
        </div>
    )
}

export default HoverCounter
