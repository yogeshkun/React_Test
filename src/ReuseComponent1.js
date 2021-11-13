
import React, { useState, Props } from 'react';
import { Table } from 'react-bootstrap'
import Reuse from './ReuseComponent'
function ResuseComp() {

    const students = [
        {
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

        
            {
                students.map((item) =>
                   
                    <Reuse data={item} />
                )
            }

        </div>
    )

}
export default ResuseComp