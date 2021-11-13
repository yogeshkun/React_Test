import React, { Component } from 'react'

class ErrorBoundary extends Component {

    constructor(props){
        super(props)
        this.state = {
            hasError: false
        }
    }
    static getDerivedStateFromError(error) { 
       
        return {
                hasError : true
        }
    }

    componentDidCatch(error,info){
        return (
            <div>
                <h1> Yogesh</h1>
            </div>
        )
    }
    render() {
        if(this.state.hasError){

            return <h3> Something went wrong! </h3>
            
        }
        else{
            return this.props.children
        }
    }
}

export default ErrorBoundary
