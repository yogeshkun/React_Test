import React from 'react'
import Col from './Col'
import logo from './logo.svg';
import './App.css';
function Fragment(data) {
    function ParentAlert(data){
        alert(data)
      console.log(data)
    }
    return (
        <div className="App">
            

                <Col alert={ParentAlert} />
       
        </div>
    )
}

export default Fragment
