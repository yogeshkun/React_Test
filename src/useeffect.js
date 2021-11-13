import React,{useState,useEffect} from 'react'

function Useeffect() {
    const [data,setData] = useState(20)
    var a = 5
    useEffect(()=>{

    console.log('asiya')
    },[data])

    function hello(){
        a += 10
        console.log('third',a)
    }
    return (
        <div>
            {console.log('first',a)}
            <h3>{a}</h3>
            <h3>{data}</h3>
            <button onClick={()=>hello()}>+</button>
            <button onClick={()=>setData(data+1)}>-</button>
            {console.log('second',a)}
        </div>
    )
}

export default Useeffect
