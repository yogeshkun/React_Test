
// import React, { useEffect, useState ,useReducer } from 'react'
// import { Form, Button, Container, Row, Col, Table } from 'react-bootstrap'

// const initialState = {
//     Task_No: 0,
//     Work: "New",
//     created_on: new Date().toLocaleString(),
// }


// function reducer(state, dispatch) {
//     console.log(dispatch)

//     switch (dispatch.type) {
//         case 'Add':
//             state.Work = dispatch.data;

//             return state;
//         case 'decrement':
//             return { count: state.count - 1 };
//         case 'rest':
//             return initialState;
//         default:
//             throw new Error();
//     }
// }




// function PostData(props) {
    
//     return (
//         <>
//             <Col>
//                 <Form>

//                     <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
//                         <Form.Label> Enter your stuffs - </Form.Label>
//                         <Form.Control as="textarea" onChange={(e) => props.setWork(e.target.value)} rows={15} />
//                     </Form.Group>
//                     <Button style={{}} onClick={(e) => props.dispatch({ type: "Add", data: work })} variant="outline-info">Info</Button>{' '}
//                 </Form>
//             </Col>

//         </>
//     )
// }

// export default PostData
// const initialState = {
//     Task_No: 0,
//     Work: "Yogesh",
//     created_on: new Date().toLocaleString(),
// }

// const reducer = (state, dispatch) => {
//      console.log("yOGESH",dispatch)
//      console.log("yOGESH2",state)




//     switch (dispatch.type) {
//         case 'SUCCESS':
//             state.Work = dispatch.payload;
//         return state
//              break;   
//         case 'ERROR':
//             return {
//                 loading: false,
//                 post: {},
//                 error: "Something went wrong"
//             }
//         default:
//             return state
//     }
// }

// function ToDo() {
//     const [state, dispatch] = useReducer(reducer, initialState)
//     const [data, setData] = useState([]);
//     const [del, setID] = useState(0);
//     const [work, setWork] = useState("");


   
//     console.log("state",data)
//     useEffect(() => {
//         GetData()
//         setData([state])
//     }, [])


//     function GetData(){
//         axios.get('http://localhost:3000/Student')

//         .then(response => {

//             dispatch({ type: 'SUCCESS', payload: response.data, name: "Asiya" })

//             console.log(response.data)
//         })
//         .catch(error => {
//             dispatch({ type: 'ERROR', err: "ASiyas error " })
//             console.log(error)

//         })

//     }


