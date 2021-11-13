import React, { useEffect, useState } from 'react'
import '../App.css'
import { Table } from 'react-bootstrap';

function App() {
    const [data, setData] = useState([]);
    const [id, setID] = useState(0);
    //console.log(typeof id);
    let num = parseInt(id);
    console.log(typeof num);
 
    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((result) => {
                //result.json() Its coverting the URL in json
                result.json().then((resp) => { //After converting, it again return promise.
                    //console.log(resp) //This is the result. Its in JSON format.
                    setData(resp)
                })
            })
    }, [])

    //console.log(data)
    return (
        <div className="App">
            <h1> Lets Fetch API</h1>
            <h3> Enter your ID - {id} </h3>
            <input type="text" onChange={(e) => setID(e.target.value)} />

            <br></br><br></br>

            <ShowData data={data} id={num} />
        </div>
    )
}


function ShowData(prop) {
    
  
    return (
        <>
            {
                prop.data.map((item) =>

                    item.id === prop.id ?

                        <Table striped bordered hover variant="dark">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Title</th>
                                    <th>Body</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.title}</td>
                                    <td>{item.body}</td>
                                </tr>
                            </tbody>
                        </Table>


                        : null

                )


            }

        </>
    )
}
export default App
