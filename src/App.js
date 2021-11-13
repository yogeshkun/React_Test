import logo from './logo.svg';
import './App.css';
import React,{useState,Props} from 'react';
//import Countertwo from './Reducerfirst';
//import Teacher from './Teacher'
//import Student from './Student';
//import Just1 from './just1';
//import Usememo from './usememo'
//import RefReact from './refreact'
//import Usereffunction from './usereffunction'
// import ControlledJS from './controlled'
//import HOC from './HOC'
import Uncontrolled from './uncontrolled'
export const UserContext = React.createContext()
export const ChannelContext = React.createContext()


// function Counter(){
//   const [count,setCount] = useState(0)
//   return ( 
//   <div> 
//       <h4> {count} </h4>
//       <button onClick={()=>setCount(count+1)}>+</button>
     
//   </div>
//   )
// }


function App(){
    return (
        <>
          {/* <Usememo /> */}
          {/* <RefReact/> */}
          {/* <Usereffunction/> */}
          {/* <ControlledJS/>   */}
          {/* <Uncontrolled/> */}
          {/* <HOC/> */}
          <h3> Hello APP</h3>
        </>
    );
 }

// use global variable to store global state

// Using props in constructor 
//  class App extends React.Component {
//   constructor(props) {
//     super();
    
//     this.state={
//       Student: {
//         data:"Yogesh",
        
//         name : "Yogesh",
//         roll : 41
//       },
//       place: props.place,
//     };
//   }
//   render() {
    
//     return(
//       <div className="App">
//         <h1> Hello World {this.state.place}</h1>
//         <h1> Yogesh peoos {this.props.name} place {this.props.place} </h1>
//         <h1> Student Name -  {this.state.Student.name} and Roll no {this.state.Student.roll} </h1>
//       </div>
//     )
//   }
// }

// export class Adi extends React.Component {
//   constructor(props) {
//     super();
    
//     this.state={
//       Student: {
//         data:"Yogesh",
        
//         name : "Yogesh",
//         roll : 41
//       },
//       place: props.color,
//     };
//   }
//   render() {
    
//     return(
//       <div className="App">
//         <h1> adi </h1>
//         <h1> Hello World {this.state.place}</h1>
//         <h1> Yogesh peoos {this.props.name} place {this.props.place} </h1>
//         <h1> Student Name -  {this.state.Student.name} and Roll no {this.state.Student.roll} </h1>
//       </div>
//     )
//   }
// }


//form 
  // const [name,setName] = useState("");
  // const [tnc,setTnc] = useState(false);
  // const [interest,setInterest] = useState("");
  // function getFormData(e){
  //   console.log(name,tnc,interest)
  //   e.preventDefault();
  // }
  // function clear(){
  //   setName = (""
  //   );
  //   console.log(name)
  // }
  // return (

  //   <div className="App"> 
  //    <h1> Hello World</h1>
  //    <form onSubmit={getFormData}>
  //     <input type="text" placeholder="Enter Name" onChange={(e)=>setName(e.target.value)}/>
  //     <br/><br/>
  //     <select onChange={(e)=>setInterest(e.target.value)}>
  //       <option>Select the option</option>
  //       <option>Marvel</option>
  //       <option>Avergers</option>
  //       <option>Iron man</option>
  //     </select>
  //     <br/><br/>
  //     <input type="checkbox" onChange={(e)=>setTnc(e.target.checked)}/>
      
  //     <span>Accept terms </span>

  //     <br/><br/>
  //     <button type="submit">Submit </button>
  //     <button onClick={()=>clear()}>Clear</button>

  //     </form>
  //   </div> 
  // );




  export default App;
  