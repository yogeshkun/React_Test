import React,{Component} from 'react';

class Yogi extends Component{

    constructor(){
        super();
        this.state={
            data:1
        }
    }
    apple(){
        this.setState({data:this.state.data+1})
    
    }
    render(){
        return (

            <div className="Yogi">
              <h1> {this.state.data} </h1>
              <button onClick={()=>this.apple()}> Click Me  </button>
              <h1> </h1>
            </div>
          );
}
}
  

export default Yogi;
        
