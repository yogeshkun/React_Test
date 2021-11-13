import React from 'react'
import Home from './Home'
import Nav from './Nav'
import Contact from './Contact'
import { Link, Route } from 'react-router-dom'
import DynamicRouting from './DynamicRouting'
function App() {
    return (
        < >

            <Nav></Nav>
           
            <Route path="/contact"><Contact /> </Route>
            <Route path="/" exact={true}> <Home /> </Route>
        
        <br></br>
        <DynamicRouting/>
        </>
    )
}


export default App
