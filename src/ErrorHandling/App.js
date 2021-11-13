import React from 'react'
import Hero from './Hero'
import ErrorBoundary from '../ErrorBoundary'
function App() {
    return (
        <div>
        <ErrorBoundary>
        <Hero heroName="Batman"></Hero>
        </ErrorBoundary>
        <ErrorBoundary>
        <Hero heroName="Joker"></Hero>
        </ErrorBoundary>
        <ErrorBoundary>
        <Hero heroName="SuperMan"></Hero>
        </ErrorBoundary>
        
            
            
        </div>
    )
}

export default App
