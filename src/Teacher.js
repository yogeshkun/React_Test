import logo from './logo.svg';
import './App.css';
import React,{useState,Props} from 'react';
import Teacher from './Teacher'
import Student from './Student';


function App() {

  const [status,change] =  useState(true)
  return (

    <div className="App"> 
      {
        status? <h1> Hello World</h1>:null
      }
      
      <button onClick={()=>change(false)}>Hide </button>
      <button onClick={()=>change(true)}>show </button>
    </div> 
  );
}



export  default  App;
