import './App.css';
import React,{setState,Props} from 'react';

class Mam extends React.Component{
    constructor(){
        super();
        this.state={
            name:"Yogesh",
            counter:0
        }
        console.log('cons')
    }
    componentDidMount(){
        // console.log('didmout')
    }
    componentDidUpdate(preProps,preState,snapShot){

        console.log('didupdate ')
    }
    shouldComponentUpdate(){

        console.log('Yogesh',this.state.counter)
        if(this.state.counter < 5 && this.state.counter < 10 ){
             return true;
        }
       
    }
    render(){
        //this.setState({name:"SAU"})
        return(
            <div className="App">
                <h1>Hello World {this.state.counter}</h1>
                <button 
                    onClick={()=> this.setState({counter:this.state.counter+1})}>
                        Click</button>
            </div>
        )
    }
}
export default Mam