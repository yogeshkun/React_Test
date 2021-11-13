 
 //using state api fetch

 import React,{useState,useEffect} from 'react'
 import axios from 'axios'

 function Datafetch1() {
    const [loading,setLoading]  = useState(true)
    const [error,setError] = useState("")
    const [post,setPost]  = useState({})
    //const api = post.map((apis)=> <div>{apis} </div>)
    
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => {
            setLoading(true)
            setPost(response.data)
            setError('')
            
        })
        .catch(error => { 
            setLoading(false)
            setPost({})
            setError('Something went wrong')

        })
    },[])
   
    return (
         <div>
             {/* {
                 post.map(apis => (
                     <div> <p>{apis.countriesRoute}</p>  </div>
                 ))
             }
             */}
             {console.log(post)}
            {loading? "Loading":post} <br/>
            
            {error ? error : null}
             
           
         </div>
        
        
     )
 }
 
 export default Datafetch1
 