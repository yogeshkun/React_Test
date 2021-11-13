import React,{useState} from 'react'
import User from  './User'
function PrevProp() {
    const [count,setCount] = useState(0)
    return (
        <div>
             <User count={count}/>
            <button onClick={()=>setCount(count+2)}>Update</button>
           
        </div>
    )
}





export default PrevProp
