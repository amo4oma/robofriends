import React from 'react';

const Nav =({searchfield,searchChange})=> {
return (
	<div className= 'pa2'>
<input className='bg-light-blue dib br3 pa3 ma2  ' type='search' 
	placeholder='search robots'
	onChange={searchChange}/>

</div>
	);
}
export default Nav;