import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import User from './user'
function DynamicRouting() {
    const Users = [
        { id: 101, Name: 'Yogesh', Age: 20 },
        { id: 102, Name: 'Milind', Age: 21 },
        { id: 103, Name: 'Prasad', Age: 20 },
        { id: 104, Name: 'Ginson', Age: 19 },
    ]
    return (
        <div>
            <Router>
                <h3> Dyanamic Routing </h3>

                {Users.map((item) =>
                    <div style={{ textAlign: 'center', backgroundColor: 'yellow' }}>
                        <Link to={'/user/'   + '/' + item.Name}>
                            <h4>{item.Name}</h4>
                            <br></br>
                        </Link>
                    </div>
                )}
                <Switch>
                <Route path="/user/:id/:name"> <User/></Route>
                </Switch>
            </Router>

        </div>
    )
}

export default DynamicRouting
