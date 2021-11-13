import React, { useEffect, useState } from 'react'
import '../App.css'
import { Table } from 'react-bootstrap';

function Data() {
    const [data, setData] = useState([]);
    const [del, setID] = useState(0);
    const [userId,setUserid] = useState(null);
    //console.log(typeof id);

    //Api data in state
    const [name,setName] = useState("");
    const [last,setLast] = useState("");
    const [num,setAge] = useState(0);
    let age = parseInt(num);

    useEffect(() => {
        GetData()
    }, [])

    function GetData(){
        fetch('http://localhost:3000/Student')
            .then((result) => {
                //result.json() Its coverting the URL in json
                result.json().then((resp) => { //After converting, it again return promise.
                    //console.log(resp) //This is the result. Its in JSON format.
                    setData(resp)
                    setName(resp[0].name)
                    setLast(resp[0].last)
                    setAge(resp[0].age)
                    setUserid(resp[0].id)
                })
            })
    }

    function Delete(id){
        fetch(`http://localhost:3000/Student/${id}`,{
            method:'DELETE'
        }).then((result)=>{
            result.json().then((response)=>{
                console.warn(response)
                GetData()
                setID(id)
            })
        })

        alert(id)
    }
    function Update(id){
       
        let item = data[id-1]
        setName(item.name)
        setLast(item.last)
        setAge(item.age)
        setUserid(item.id)
    }

    function UpdateData(){
        let item = {name,last,age,userId}
        fetch(`http://localhost:3000/Student/${userId}`,{
            method:'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        }).then((result)=>{
            result.json().then((response)=>{
                console.warn(response)
                GetData()
                
            })
        })
        // console.log(name,last,age,userId)
    }

    //console.log(data)
    return (
        <div className="App">
            <h1> Lets Fetch API</h1>
            <h3> Last deleted - {del} </h3>

            <br></br><br></br>

            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>name</th>
                        <th>last</th>
                        <th>age</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) =>
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.last}</td>
                            <td>{item.age}</td>
                            <td>
                                <button onClick={()=>Delete(item.id)}>Delete</button>
                                <button onClick={()=>Update(item.id)}>Update</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>
            <div>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}  placeholder="first"/><br/><br/>
            <input type="text" value={last} onChange={(e)=>setLast(e.target.value)} name="last" placeholder="last"/><br/><br/>
            <input type="number" value={age} onChange={(e)=>setAge(e.target.value)} name="age" placeholder="age"/><br/><br/>
            <button type="button" onClick={()=>UpdateData()} >Submit</button>
            </div>
        </div>
    )
}



export default Data
