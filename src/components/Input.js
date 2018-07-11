import React from 'react';
export default function Input (props){
    return(
        <input className = "input" onChange={(e) => props.addR(e.target.value)}

placeholder="Enter Rating"
>
</input>
    )
}
