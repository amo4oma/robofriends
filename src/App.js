import React,{Component} from 'react';
import CardList from './CardList'
import {robots} from './robots'
import 'tachyons';
import './App.css';
import Scroll from './Scroll';

import Nav from './Nav'
// import Nav from './Nav.js';


class App extends Component{
constructor() {
    super()
    this.state = {
      robots: [],
      searchfield:''
    }
  }
componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response=> response.json())
  .then(user=> this.setState({robots:robots}));

}
  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value})

  }
     render(){
        const filtered= this.state.robots.filter(robots=>{
      return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })
        return (
     
        <div className ='tc'>

        
          <h1> Robot Freinds </h1>
          <h2>This React App made By Ahmed Obad</h2>
           <Nav searchChange={this.onSearchChange}/>

           
             <Scroll>
            <CardList robots={filtered} />
          </Scroll>
             
            
             
             
        </div>
    );
}
} 



export default App;
