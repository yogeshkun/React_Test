import React from 'react'


function Hero(props) {
    if( props.heroName==='Joker' ) { 
        throw new Error('Not a Hero!')
    }
    return (
        <div>
            {props.heroName}
        </div>
    )
}

export default Hero
