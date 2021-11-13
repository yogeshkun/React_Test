import React, { useReducer, useEffect } from 'react'
import axios from 'axios';

const initialState = {
    loading: true,
    error: '',
    post: {},
    name:"yogi"
}

const reducer = (state, dispatch) => {
    console.log("yOGESH",dispatch)
    console.log("yOGESH2",state)


    

    switch (dispatch.type) {
        case 'SUCCESS':
            return {
                loading: false,
                post: dispatch.payload,
                error: "",
                name:dispatch.name
            }
        case 'ERROR':
            return {
                loading: false,
                post:{},
                error: "Something went wrong"
            }
            default:
                return state
    }
}
function Datafetch2() {
    const [state,dispatch]=useReducer (reducer,initialState)
    //console.log('hello0')
    useEffect(()=>{
        axios.get('https://jsonplacehoder.typicode.com/posts/1')
        
        .then(response => {
            
           dispatch({type:'SUCCESS',payload:response.data,name:"Asiya"})
           
           console.log(response)
        })
        .catch(error => { 
            dispatch({type:'ERROR',err:"ASiyas error "})
            console.log(error)
            
        })
    },[])
    //console.log('hello1')
    return (
        <div>
            {
                //console.log('hello2')
            }
                {state.loading?
                 "Loading"
                 :state.name} <br/>
            
                {state.error ? state.error : null}
            
        </div>
    )
}

export default Datafetch2
