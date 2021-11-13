import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
function Diplay404() {
    return (
        <div>
            <Router>
                <Link to="/">Home Page</Link><br />
                <Link to="/about">About Page</Link><br/>
                <Link to="/login">Login Page</Link> - No Page
                <Switch>
                    <Route path="/" exact={true}><Hone /></Route>
                    <Route path="/about"><About /></Route>
                    <Route path="*"><Page404 /></Route>
                </Switch>
            </Router>
        </div>
    )
}

function Hone() {
    return (
        <>
            <h3> Home page</h3>
            <p> Its Home page</p>
        </>
    )
}

function About() {
    return (
        <>
            <h3> About page</h3>
            <p> Its About page</p>
        </>
    )
}

function Page404() {
    return (
        <>
            <h3> Page 404</h3>
            <p> This page not found !!!</p>
        </>
    )
}
export default Diplay404
