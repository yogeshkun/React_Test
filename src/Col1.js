import React from 'react'

function Col1(props) {
    const data ="Yogesh Kun"
    return (
        <>
        <h1>User Yogesh</h1> 
        <button onClick={()=>props.yogi(data)}>Click me</button>
        </>
        
    )
}

export default Col1
