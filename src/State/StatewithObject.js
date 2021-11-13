import React from 'react'

function StatewithObject() {
    const [data,setData] = React.useState([{id:2}])
    //const [item,setItem] = React.useState({gender:'male',phone:899999})
    console.warn(data.age)
     return (
        <div>
            <h1>Name - {data.name}</h1>
            <h2>Age - {data.age}</h2>
        

            <input type="text" placeholder="Name" value={data.name} 
                onChange={(e)=>setData([...data,{
                        id : id+1
                }])}/>
                
            {/* <input type="text" placeholder="age" value={data.age}
                onChange={(e)=>setData({...data,age:e.target.value})}/> */}

                {/* <br></br>
                <br></br>
                <br></br>

                <h1>Email - {item.phone}</h1>
            <h2>Phone - {item.gender}</h2>
            <input type="text" placeholder="Name" value={item.phone} 
                onChange={(e)=>setItem({...data,phone:e.target.value})}/>
                
            <input type="text" placeholder="age" value={item.gender}
                onChange={(e)=>setItem({...data,gender:e.target.value})}/> */}
        </div>
    )
}

export default StatewithObject
