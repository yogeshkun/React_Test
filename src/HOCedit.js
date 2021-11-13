import React from 'react'

function HocRed(props){
    return(
        <p style={{backgroundColor:'red',width:100,fontSize:'20px',paddingBottom:'10px'}}><props.cmp /> </p>
    )
}
export default HocRed
