import React,{useRef} from 'react'

function Uncontrolled() {
    let inputRef = useRef(null)
    function submit(e) {
        e.preventDefault();
        console.log("input field 1",inputRef.current.value)
        let input3 = 
        

        
        console.log("input3",input3)
    }
    
    return (
        <div>
            <form onSubmit={submit}>
                <input ref={inputRef} type="text" /><br />
                <input type="text" id="input3" /><br />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Uncontrolled
