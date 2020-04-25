import React, { Component } from 'react';
import  Button  from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const  Cardd =({name , email , id})=> {
		return(

		<div className= 'bg-light-blue dib br3 pa3 ma2 grow bw2 shadow5' style={{ width: '18rem' }}>
  <img alt='photo' src={`https://robohash.org/${id}?200x200` }/>
     <h2>{name}</h2>
     <p>{email}</p>

    <Button variant="primary">Go somewhere</Button>

</div>
);
	
}
export default Cardd;