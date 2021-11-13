function Reuse (props){
    return(
        <div>
            <span> {props.data.name} </span><br/>
            <span>{props.data.email} </span>
            <span>{props.data.phone} </span>
            {/* <span> uesr {props.data.name} </span> */}
           <button onClick={()=>alert(props.data.name)}>CLick</button>
           
        </div>
        
    )
}
export default Reuse