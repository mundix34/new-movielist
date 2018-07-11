import React from 'react';
import Item from './Item';
// import './App.css';

export default function DisplayMovies(props){
    let movieOnDisplay = props.movies.map((movie, i) =>{
        return (
            <div className="output">
          <Item movie= {movie} deleteM={props.deleteM} editM = {props.editM}/>

           
            </div>
        )
    })
    return(
        <div className = "output">{movieOnDisplay}


        </div>

    )
}





