import React,{useState} from 'react'
import ClickCounter from './ClickCounter'
import HoverCounter from './HoverCounter'
import Counter1 from './Counter1'
import Counter2 from './Counter2'
function App() {
    const [counter,setCounter]=useState(0)
        
        function Getdata(counter){
            setCounter(counter+1)
        }
    return (
        <div>
            {/* <ClickCounter/>
            <HoverCounter/> */}
            <Counter1 name={counter} function={Getdata}/>
            <Counter2 name={counter} function={Getdata}/>
        </div>
    )
}

export default App
