import React,{useState} from "react";

class Profile extends React.Component {
    componentWillUnmount() {
        console.log("Component is unmount ")
    }
    render() {
        console.log('#############')
        return (
            <div className="App"> 
                <h1>Parents </h1>
            </div>
        )
    }
}
export default Profile;