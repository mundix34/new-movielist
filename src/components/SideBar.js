import React from 'react';
// import Button from './Button';
export default function SideBar(props){
return (
    <div className = "sideBar">
    <h2> Movies you like!</h2>
    <p> This page allows you to share movies information with friends. you can add movies watched and search from the list based on what your friends liked.</p>
    <hr className="hr"/>
    <h4>Features</h4>
    <ul>
        <li>Lets you add Movies with your own rating.</li>
        <li>Get existing movies based on what everyone has been adding</li>
        <li>Edit an entry</li>
        <li>Delete an entry</li>
        
    </ul>
    {/* <Button class = "button" name = 'Search' buttonClick = {props.searchMovie} /> */}

    </div>
        
    
)

}