import logo from './logo.svg';
import './App.css';
import React,{useState,Props,useContext} from 'react';
import { UserContext, ChannelContext } from './App';
import Just2 from './just2';


function Test1(){
    const user = "Yogesh"
    const  channel = useContext(ChannelContext)

    return (
        <div className="App">
            {channel}
            <button >H</button>
            {user}
        </div>
    );
}
export default Test1
