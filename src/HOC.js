import React,{useState} from 'react'

import HocRed from './HOCedit'

function HOC() {
    return (
        <div className="App">
            <h1> HOC </h1>
            
            <HocRed cmp={Counter}/>
            <HocGreen cmp={Counter}/>
            <HocYellow cmp={Counter}/>
        </div>
    )
}

function HocGreen(props){
    return(
        <h1 style={{backgroundColor:'green',width:100,fontSize:'20px',paddingBottom:'10px'}}><props.cmp /> </h1>
    )
}
function HocYellow(props){
    return(
        <h2 style={{backgroundColor:'Yellow',width:100,fontSize:'20px',paddingBottom:'10px'}}><props.cmp /> </h2>
    )
}

function Counter(){
      const [count,setCount] = useState(0)
      return ( 
      <div> 
          <h4> {count} </h4>
          <button onClick={()=>setCount(count+1)}>+</button>
         
      </div>
      )
    }

export default HOC
