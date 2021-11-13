import React, { useEffect, useState } from 'react'
import '../App.css'
import { Table } from 'react-bootstrap';

function Data() {
    const [data, setData] = useState([]);
    const [del, setID] = useState(0);
    //console.log(typeof id);



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
                
            })
        })

        
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
                            <td><button onClick={()=>Delete(item.id)}>Delete</button></td>
                        </tr>
                    )}
                </tbody>
            </Table>
                        
        </div>
    )
}



export default Data
