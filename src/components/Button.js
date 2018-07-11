import React from 'react';
// import './App.css';

export default function Button(props){
    return(
        <button className = "button" onClick = {()=> props.buttonClick()}> {props.name} </button>
    )
}






