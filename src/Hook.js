import './App.css';
import React, { useState, useEffect } from 'react';

const Hook = () => {
    const [data,setdata] = useState({name:{firstname:"John",lastname:"Kun"}})
    const [count,setcount] = useState(100)
    

    return (

        <div className="App">
            <h1>Student {console.log("Yogesh"+data.name.firstname)}</h1>
            <h2>data </h2>
           

        </div>
    )

}

export default Hook
