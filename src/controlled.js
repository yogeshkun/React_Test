import React,{useState} from 'react'

function ControlledJS() {
    const [val,setVal]= useState("Yogesh")
    return (
        <div>
            <input type="text" defaultValue="000" value="yogesh" onChange={(e)=>setVal(e.target.value)}/>
            <h3>{val} </h3>
        </div>
    )
}

export default ControlledJS