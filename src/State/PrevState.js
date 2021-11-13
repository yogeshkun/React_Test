import React,{useState} from 'react'

function PrevState() {
    const today = new Date()
    const time = today.getHours() + ':'
                             + today.getMinutes() + ':' 
                             + today.getSeconds();
    const [current,setCurrent] = useState(time)
    console.log(current)
    const [prev,setPrev] = useState()
    //const [current,setCurrent] = useState(time)
    function Counter(){
        const today = new Date()
        const time = today.getHours() + ':'
                                 + today.getMinutes() + ':' 
                                 + today.getSeconds();
        setCurrent((prev)=>{

            console.log("Prev"+prev)
            return time
        })
        console.log("Current time"+current)

    }
    return (
        <div>
           
           <button onClick={()=>Counter()}>Update</button>
        </div>
    )
}

export default PrevState
