import './App.css';
import React,{useState,Props} from 'react';
import Parent from './Parent';

class Toggle extends React.Component {
    constructor() {
        super();
        this.state={
            show:true
        }
    } 
    componentDidMount(){
         console.log('didmout')
    }
    componentDidUpdate(preProps,preState,snapShot){

        console.log('didupdate ')
    }
    shouldComponentUpdate(){

        console.log('shouldComponentUpdate')
        return true;
        
    }
    render() {
        console.log('-------')
        return (
            
            <div className="App"> 
                <h1>Student</h1>
                {
                    this.state.show ? <Parent /> :  <h2>No parents data</h2>
                }
                <button onClick={()=>this.setState({show:!this.state.show})}>Toogle </button>
                
            </div>
        )
    }
}

export default Toggle