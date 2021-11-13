import React from 'react'

function Counter2(props) {
    return (
        <div>
           <button onClick={()=>props.function(props.name)}>{props.name}Click {props.name} times </button>
        </div>
    )
}

export default Counter2
