import React from 'react';
import Cardd from './Cardd';



const CradList = ({ robots }) => {
	const cardLoop = robots.map((user, i ) =>{
		return <Cardd key={i} 
		id = {robots[i].id} 
		name ={robots[i].name}
		 email= {robots[i].email} />
	})
return cardLoop
}



export default CradList;