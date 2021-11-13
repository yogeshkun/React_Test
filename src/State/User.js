import React,{useEffect,useRef} from 'react'

function User(props) {
    const lastVal = useRef();
    useEffect(() =>{
        console.log(lastVal);
        lastVal.current = props.count
    })
    const prev = lastVal.current
    return (
        <div>
            <h1>Counter - {props.count}</h1>
            <h4>Last - {prev}</h4>
        </div>
    )
}

export default User
