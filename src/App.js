import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import ListItems from './components/ListItems';
import DisplayMovies from './components/DisplayMovies';
// import Button from './components/Button';
import SideBar from './components/SideBar';
import axios from 'axios';


class App extends Component {
  constructor(){
    super()
    this.state = {
      movies: [],
            id: '',
            title: '',
            genre: '',
            year: '',
            rating: ''

    }
        this.addTitle= this.addTitle.bind(this);
        this.addId = this.addId.bind(this);
        this.addGenre = this.addGenre.bind(this);
        this.addYear= this.addYear.bind(this);
        this.addRating = this.addRating.bind(this);
        this.updateMovies = this.updateMovies.bind(this);
        this.editMovie = this.editMovie.bind(this);
        this.deleteMovie = this.deleteMovie.bind(this);
        this.postMovie = this.postMovie.bind(this);
        this.searchMovie = this.searchMovie.bind(this);
        this.addSearchTitle=this.addSearchTitle.bind(this);
        


        
  }
  componentDidMount(){
    axios.get('/api/movies').then((res) =>{
      this.setState({
        movies:res.data
      })
    })
  }
  addId(val){
    this.setState({ 
        id: val
    })

}
  

  addTitle(val){
    this.setState({ 
        title: val
    })

}
addGenre(val) {
  this.setState({
      genre: val
  })

}
addYear(val) {
  this.setState({
      year: val
  })

}
addRating(val) {
  this.setState({
      rating: val
  })

}
addSearchTitle(val){
  this.setState({
    title: val
  })
}


updateMovies() {
let newMovies = [...this.state.movies]
newMovies.push({title: this.state.title, year: this.state.year, genre: this.state.genre, rating: this.state.rating})
this.setState({
  movies: newMovies
})
}
searchMovie(){
  // console.log(res);
  
  axios.get( '/api/movies').then( (res) => {

    this.setState({movies: res.data})
  })

}
postMovie() {
  let newMovie= {
    title: this.state.title,
    genre: this.state.genre,
    year: this.state.year,
    rating: this.state.rating
  };
  
 

 
  axios.post('/api/movies', newMovie).then((res) => {
    this.setState({
      movies: res.data
    })
  })
}

deleteMovie(id) {
  
  axios.delete('/api/movies/'+id).then((res) => {
    // console.log(res);
    this.setState({
      movies: res.data
    })
  })
}
editMovie(id, details) {
  // console.log(res);
  
  
  
  axios.put('/api/movies/'+ id, details).then((res) => {
    alert('Successfully edited')
    this.setState({
      movies: res.data
    })
  })
}

  render() {

    return (
      <div>
      <div className="header">
      <Header/>        
      </div>
      <div className = "body-area">
      <ListItems 
      addT = {this.addTitle} 
      addG= {this.addGenre} 
      addR = {this.addRating}
      addY= {this.addYear}
      addI ={this.addId}
      searchT={this.searchMovie}
      updateM= {this.updateMovies} 
      postM ={this.postMovie} 
      deleteM = {this.deleteMovie}
      editM = {this.editMovie}
      addSearchT={this.addSearchTitle}


        />

      <DisplayMovies movies = {this.state.movies} deleteM = {this.deleteMovie}
      editM = {this.editMovie}
/>
      <SideBar search = {this.searchMovie}/>




        </div>
      </div>
    );
  }
}

export default App;
