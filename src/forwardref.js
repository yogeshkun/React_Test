import React,{forwardRef} from 'react'

function Forwardref(props,reff) {
    return (
        <div>
            <input type="text" ref={reff}/>
        </div>
    )
}

export default forwardRef(Forwardref)
