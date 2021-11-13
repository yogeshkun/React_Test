import React,{useState} from 'react'

const Counter = (OrginalCounter) => {
    function NewComponent() {
        const [counter,setCounter]=useState(0)
        
        function Getdata(counter){
            setCounter(counter+1)
        }
        return (
            <>
                <OrginalCounter name={counter} function={Getdata}/>
            </>
        )
    }
    return NewComponent
}

export default Counter