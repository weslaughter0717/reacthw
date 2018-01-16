import React from 'react';
import './Game/Game.css';


const PicRow = ({links, randomize}) => links.map(currentItem=>
		<div className="col-3" onClick={()=>{randomize(currentItem)}}>
			<img src={currentItem} className="img-fluid" alt="scenery"></img>
		</div>
	);

export default PicRow;