import React from 'react'
import './style.css'
import style from './custom.module.css'
import {Alert,Button} from 'react-bootstrap'

function Style() {
    return (
        <div className="primary col-lg-8">
            <h1 className="h1"> Hello </h1>
            <h2 style={{color:'yellow',backgroundColor:'green'}} > data </h2>
            <h2 className={style.success}> Yogesh </h2>
         {
  <Alert variant="danger">
    This is a danger alert—check it out!
  </Alert>
}
        </div>
        
    )
}

export default Style
