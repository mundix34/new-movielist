import React, {Component} from 'react';
import Button from './Button';
// import './App.css';

export default class Item extends Component{
    // console.log(props);
    constructor(props) {
        super(props)
        this.state = {
            id:props.movie.id,
            title: props.movie.title,
            genre:props.movie.genre,
            year: props.movie.year,
            rating: props.movie.rating


        }
    }
    editTitle(val){
        this.setState({
            title:val
        })
    }
    editGenre(val){
        this.setState({
            genre:val
        })
    }
    editYear(val){
        this.setState({
            year:val
        })
    }
    editRating(val){
        this.setState({
            rating:val
        })
    }
    render(){
    
    return(
        
        <div className = "output">
                           <ul>
        <input className= "Input" onChange={(e)=>this.editTitle(e.target.value)} value={this.state.title}></input>
        <input className= "Input" onChange={(e)=>this.editGenre(e.target.value)}value={this.state.genre}></input>
        <input className= "Input" onChange={(e)=>this.editYear(e.target.value)}  value= {this.state.year}></input>
        <input className= "Input" onChange={(e)=>this.editRating(e.target.value)} value= {this.state.rating}></input>
        </ul>
        {/* <Button className = "button" name = 'Edit Movie' buttonClick = {props.editM} /> */}
        <div className = "outputbutton">
        <Button className = "button" name = 'Delete' buttonClick = {this.props.deleteM} />
        
        <button className= "button" onClick = {()=> {this.props.editM(this.props.movie.id, this.state)}}>Edit</button>
        </div>

 
                
        </div>
    )
}
}