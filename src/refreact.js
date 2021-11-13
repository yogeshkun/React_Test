import React, {createRef, Component } from 'react'

export default class RefReact extends Component {
    constructor(props) {
        super();
        this.inputRef = createRef();
        this.helloRef = createRef();
    }
    componentDidMount(){
// this.inputRef.current.value='1000'
    }
    getVal(){
        console.log(this.inputRef.current.value)
        this.inputRef.current.style.color="red"
        
        //this.helloRef.current.style.backgroundColor="yellow"
        this.helloRef.current.value=this.inputRef.current.value +2
    }   
    render() {
        return (
            <div>
                <h1> Ref in React </h1>
                <input type="text"  ref={this.inputRef}/>
                <input type="text" ref={this.helloRef,this.inputRef}/>
                <button onClick={()=>this.getVal()}>Check Ref</button>
            </div>
        )
    }
}
