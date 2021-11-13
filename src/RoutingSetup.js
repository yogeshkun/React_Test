import React from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'

function RoutingSetup() {
    return (
        < >
        <Router>
            <Link to="/home"> Home Page</Link>
            <Link to="/about"> About Page</Link>
            <Route path="/home"> <Home /> </Route>
            <Route path="/about"> <About /> </Route>
            
            
        </Router>
        </>
    )
}
function Home() {
    return (
        <>
            <h3>Home page</h3>
            <p> This is Home page !!!</p>
        </>
    )
}
function About() {
    return (
        <>
            <h3>About page</h3>
            <p> This is About page !!!</p>
        </>
    )
}

export default RoutingSetup
