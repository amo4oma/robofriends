import React, { Component } from 'react';
import  Button  from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const  Cardd =({name , email , id})=> {
    const randomid = Math.floor(Math.random() * 100);
		return(

		<div className= 'bg-light-blue dib br3 pa3 ma2 grow bw2 shadow5' style={{ width: '18rem' }}>
  <img alt='photo' src={`https://robohash.org/${randomid+id}?200x200` }/>
     <h2>{name}</h2>
     <p>{email}</p>



</div>
);
	
}
export default Cardd;