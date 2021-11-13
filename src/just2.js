import logo from './logo.svg';
import './App.css';
import React,{useState,Props} from 'react';
import {UserContext,ChannelContext} from './App'


function Just2(){
    return (
        <>
        <UserContext.Consumer>
            {
                user => {
                    return (
                        <ChannelContext.Consumer>
                            {
                                channel => {
                                    return <div> User Context value {user},  channel context value {channel }</div>
                                }
                            
                            }
                        </ChannelContext.Consumer>
                    )
                }
            }
        </UserContext.Consumer>
           <h1> Hello World</h1>
            
        </>
    );
}
export default Just2
