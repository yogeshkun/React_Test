
import React, { useState, Props } from 'react';
import { Table } from 'react-bootstrap'
import Reuse from './ReuseComponent'
function Student() {

    const students = [
        {
            id:1,
            name: 'Yogesh',
            email: 'Yogesh@gmail.com',
            phone: 8975179779,
            address: [
                { Hn: 99, City: 'Sindurg', Country: 'India' },
                { Hn: 10, City: 'Pune', Country: 'India' },
                { Hn: 35, City: 'Mumbai', Country: 'India' },

            ]
        },
        {
            id:2,
            name: 'SAu',
            email: 'sau@gmail.com',
            phone: 111,
            address: [
                { Hn: 99, City: 'Sindurg', Country: 'India' },
                { Hn: 10, City: 'Pune', Country: 'India' },
                { Hn: 35, City: 'Mumbai', Country: 'India' },

            ]
        },
        {
            id:3,
            name: 'asiya',
            email: 'asiya@gmail.com',
            phone: 46548,
            address: [
                { Hn: 99, City: 'Sindurg', Country: 'India' },
                { Hn: 10, City: 'Pune', Country: 'India' },
                { Hn: 35, City: 'Mumbai', Country: 'India' },

            ]
        }
    ]
    // const [data,setData] = useState(['Anil','Yogesh','SAm','Gisnon'])

    return (
        <div>
            <Table striped bordered hover variant="dark">
                <tbody>
                    <tr>
                        <th>Sr</th>
                        <th>Name</th>
                        <th>Address </th>
                    </tr>
                    {
                        students.map((data, i) =>

                            <tr key={number.toString(data.name)}>
                                <td> {data.id}</td>
                                <td>{data.name}</td>
                                <td>{
                                    data.address.map((item, j) =>
                                        <Table striped bordered hover variant="dark">
                                            <tbody>

                                                <tr key={j}>

                                                    <td> {item.Hn}</td>
                                                    <td> {item.City}</td>
                                                    <td> {item.Country}</td>
                                                </tr>

                                            </tbody>
                                        </Table>
                                    )}
                                </td>

                             </tr>

                        )
                    }
                </tbody>
            </Table>
            <button>+</button>

                 

        </div>
    )
}

export default Student;