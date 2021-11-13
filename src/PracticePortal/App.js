import React from 'react'
import ReactDOM from 'react-dom'
function App() {
    return ReactDOM.createPortal (  
            <h1>New Portal</h1>,document.getElementById('New-portal')
    )
}

export default App
