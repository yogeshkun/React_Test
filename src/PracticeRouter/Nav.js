import React from 'react'


import { Link, Route } from 'react-router-dom'
function Nav() {
    return (
        <div>
            <Link to="/"> Home Page</Link>
            <Link to="/contact"> Contact Page</Link>
            {/* <a href="/contact">Contact</a> */}
        </div>
    )
}

export default Nav
