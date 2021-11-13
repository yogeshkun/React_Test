import React, { useEffect, useState, useReducer } from 'react'
import { Form, Button, Container, Row, Col, Table } from 'react-bootstrap'
import './style.css';
import GetData from './GetData'
//import PostData from './PostData'





function ToDo() {
    const [data, setData] = useState([]);
    const [del, setID] = useState(0);
    const [work, setWork] = useState("");

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        GetData()
    }, [])

    function GetData() {
        fetch('http://localhost:3000/ToDo')
            .then((result) => {
                //result.json() Its coverting the URL in json
                result.json().then((resp) => { //After converting, it again return promise.
                    //console.log(resp) //This is the result. Its in JSON format.
                    setData(resp)
                })
            })
    }
    // function UpdateData(){
    //     let item = {state}
    //     fetch(`http://localhost:3000/Student/${userId}`,{
    //         method:'PUT',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(item)
    //     }).then((result)=>{
    //         result.json().then((response)=>{
    //             console.warn(response)
    //             GetData()

    //         })
    //     })
    //     // console.log(name,last,age,userId)
    // }
    // function UpdateData(e){
    //     //e.preventDefault();
    //     //console.log({name,last,age});
    //     let data = state;
    //     fetch('http://localhost:3000/ToDo',{
    //         method:"POST",
    //         headers:{
    //             'Accept':'application/json',
    //             'Content-Type':'application/json'
    //         },
    //         body:JSON.stringify(data)
    //     }).then((result)=>{
    //         console.log(result)
    //     })

    // }

    return (
        <>
            <div style={{}}>
                <h1>To-Do project</h1>
            </div>
            <br></br>
            <div>
                <Container fluid="md">
                    <Row>
                        {/* <PostData dispatch={dispatch()} /> */}
                        <br></br><br></br><br></br>

                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col>
                        </Col>
                        <Col style={{ backgroundColor: '#fcba03' }}>
                            <h6 style={{ paddingTop: '10px' }}> Tasks Completed  </h6>
                            <Table className="table" style={{ paddingTop: '50px' }} hover variant="white" responsive>
                                <thead>
                                    <tr>
                                        <th>No.</th>
                                        <th>Task</th>
                                        <th>CreatedOn</th>
                                        <th>Opration</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((item) =>
                                        <tr>
                                            <td>{item.id}</td>
                                            <td>{work}</td>
                                            <td>{item.created_on}</td>
                                            <td><Button variant="danger">Delete</Button></td>
                                        </tr>
                                    )}

                                </tbody>
                            </Table>
                        </Col>


                    </Row>
                </Container>
            </div>

        </>
    )
}


export default ToDo
