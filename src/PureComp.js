import React, { PureComponent } from 'react'

export default class PureCom extends PureComponent {
    constructor() {
        super();
        this.state= {
            count:1
        }
    }
    render() {
        console.log('Rendering')
        return (
            <div>
                <h1> Count  {this.state.count}</h1>
                <button onClick={()=>this.setState({
                  
                    count:this.state.count +1
                    })}>Click mE</button>
            </div>
        )
    }
}
