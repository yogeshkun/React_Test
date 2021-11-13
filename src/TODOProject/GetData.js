import React, { useEffect, useState ,useReducer } from 'react'
import { Form, Button, Container, Row, Col, Table } from 'react-bootstrap'
import './style.css';
function GetData(props) {
    console.warn(props.data)
    return (
        <>
        <h1>Hello </h1> 
            <Col style={{ backgroundColor: 'lightblue' }}>
                <h6 style={{ paddingTop: '10px' }}> Tasks </h6>
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
                        {props.data.map((item) =>
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.Work}</td>
                                <td>{item.created_on}</td>
                                <td><Button variant="success">Done</Button></td>
                            </tr>
                        )}

                    </tbody>
                </Table>
            </Col>
        </>
    )
}

export default GetData
