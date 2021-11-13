import React,{useState,useEffect} from 'react'

function PostMethod() {
    const [firstname,setName] = useState("");
    const [last,setLast] = useState("");
    const [num,setAge] = useState();
    const [message,setMessage] = useState("");
    let age = parseInt(num);


    function saveData(e){
        //e.preventDefault();
        //console.log({name,last,age});
        let data = {firstname,last,age};
        fetch('http://localhost:3000/Student',{
            method:"POST",
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        }).then((result)=>{
            setMessage("SUCCESS")
            console.log(result)
        })

    }
    return (
        <div style={{textAlign: 'center'}}>
            <h3> Enter your details </h3>
            <label for="">First Name - </label><br></br>
            <input type="text" value={firstname} onChange={(e)=>setName(e.target.value)} name="first" /><br/><br/>
            <label for="">Last Name - </label><br></br>
            <input type="text" value={last} onChange={(e)=>setLast(e.target.value)} name="last"/><br/><br/>
            <label for="">Age - </label><br></br>
            <input type="number" value={age} onChange={(e)=>setAge(e.target.value)} name="age" /><br/><br/>
            <button type="button" onClick={()=>saveData()}>Submit</button>
         
            <div style={{
                backgroundColor:"lightblue",
                width:'60%',
                
                margin:'auto',
                marginTop:'10px'
                }}>
                    
                   { (message==="SUCCESS")
                        ?  <>

                        <h1>Your Data</h1>
                        <h4>First Name - {firstname}</h4>
                        <h4>Last Name - {last}</h4>
                        <h4>Age - {num}</h4>
                        </>
                        :  <h4>No Data sended</h4>
                  
                   
                   }
                   
            </div>
           
        </div>
    )
}

export default PostMethod
