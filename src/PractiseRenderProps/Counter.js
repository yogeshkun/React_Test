import React,{useState} from 'react'

function Counter(props) {
    const [count,setCount] = useState(0)
    function increment(){
        return setCount(count+1)
    }
    return (
        <div>
            {console.log("Counter",count)}
            {props.yogi(count,increment)}
        </div>
    )
}

export default Counter
