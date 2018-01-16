import React from 'react';


const PageHeader = ({score}) =>
			<div>
				<header className="App-header">
				  <img src={"https://image.freepik.com/free-vector/abstract-logo-with-colorful-leaves_1025-695.jpg"} className="App-logo" alt="logo" />
				  <ul className="nav">
				  	<li className="nav-item mx-auto">
				  		<h1 className="App-title">Time To Start Clicking!</h1>
				  	</li>
				  	<li className="nav-item mx-auto">
				  		<h1 className="App-title">Score: {score}</h1>
				  	</li>
				  </ul>
				</header>
				<p className="App-intro">
				  To get started, click a moving picture. Then click a different one.
				</p>
				<p className="App-intro">
				  You get a point for every new picture you click. If you click a picture you have already clicked the score resets! 
				</p>
			</div>

export default PageHeader;