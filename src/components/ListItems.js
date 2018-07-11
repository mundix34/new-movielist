import React, { Component } from 'react';
import Button from './Button';
import Input from './Input';
// import './App.css';

class ListItems extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            title: '',
            genre: '',
            year: '',
            rating: ''


        }
    }

    render() {
        return (
            <div className="output">
                <input className = "input" onChange={(e) => this.props.addT(e.target.value)}

                    placeholder="Enter Title"
                >
                </input>
                <input className = "input" onChange={(e) => this.props.addG(e.target.value)}

                    placeholder="Enter Genre"
                >
                </input>
                <input className = "input" onChange={(e) => this.props.addY(e.target.value)}

                    placeholder="Enter Year"
                >
                </input>
                <Input className = "input" addR= {this.props.addR} />
                {/* <Button className = "button" name = 'Add Movie' buttonClick = {this.props.postM} /> here is WHERE IT CONNECTS TO MY SERVER TO POST!!!! */}
                <Button className = "button" name = 'Add Movie' buttonClick = {this.props.updateM} />
                <br/>
                <input className = "input" onChange={(e) => this.props.addSearchT(e.target.value)}

                    placeholder="Search by Title"
                >
                </input>
                <button className= "button" onClick = {()=> {this.props.searchT(this.state.title )}}>Search</button>
                </div>

                
               
               

        )
    }
}





    export default ListItems;