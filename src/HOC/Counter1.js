import React from 'react'

function Counter1(props) {
    return (
        <div>
          <h1 onMouseOver={()=>props.function(props.name)}>{props.name}Hover {props.name} times </h1>
        </div>
    )
}

export default Counter1
