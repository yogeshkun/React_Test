import React,{useRef} from 'react'
import Forwardref from './forwardref'

function Usereffunction() {

    let inputRef = useRef(null)

    function updateInput(){
        inputRef.current.value="1000"
        inputRef.current.style.color="red"
    }
    return (
        <div>
            <Forwardref ref={inputRef} />
            <button onClick={updateInput}>+</button>
        </div>
    )
}

export default Usereffunction
