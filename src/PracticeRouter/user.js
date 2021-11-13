import React from 'react'
import { withRouter } from 'react-router-dom'

function User(props) {
    return (
        <div>
            <h3>User Component</h3>
            <h4>Hey, This is user no. - {props.match.params.id}</h4>
            <h4>Hey, This is user name. - {props.match.params.name}</h4>
        </div>
    )
}

export default withRouter(User)
