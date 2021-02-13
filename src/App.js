import React,{useState, useEffect} from 'react';
import CardList from './CardList'
import {robots} from './robots'
import 'tachyons';
import './App.css';
import Scroll from './Scroll';

import Nav from './Nav'
// this component used to be a class component and it has been updated to a function component and now it is using the 
// React Hooks 

function App(){
// constructor() {
//     super()
//     this.state = {
//       robots: [],
//       searchfield:''
//     }
//   }
// componentDidMount(){
//   fetch('https://jsonplaceholder.typicode.com/users')
//   .then(response=> response.json())
//   .then(user=> this.setState({robots:robots}));

// }
    const [robots , setRobots] = useState([]);
    const [searchfield , setSearchfield] = useState('');
    const [refresh , setRefresh] = useState(0);

  //  const didMount = useEffect({
  //     fetch('https://jsonplaceholder.typicode.com/users')
  //       .then(response=> response.json())
  //       .then(user=> setRobots({user}));
  //   })

  useEffect(()=>{
          fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(user=> setRobots(user));
        console.log(refresh);
  }, [refresh])
    const onSearchChange = (event) => {
      const searchlistener = event.target.value;
      setSearchfield(searchlistener);
      
  }

       const filtered = robots.filter(robots=>{
      return robots.name.toLowerCase().includes(searchfield.toLowerCase())
    })
        return (
     
        <div className ='tc'>

        
          <h1> Robot Friends </h1>
          <h2>This React App made By Ahmed Obad</h2>
           <Nav searchChange={onSearchChange}/>
           <button onClick={()=> setRefresh(refresh+1)} className="f6 link dim ph3 pv2 mb2 dib white bg-purple" >Refresh Robots</button>

           
             <Scroll>
            <CardList robots={filtered} />
          </Scroll>
             
            
             
             
        </div>
    );

} 



export default App;
