import React from 'react';
import '../scss/App.scss';

var state = {}

class App_Main extends React.Component {
  
	render(){
		return (
			<main className="">
				<p className="desc">
					Fleshmonk Sound Board. Compile sounds from the YouTuber <a href="https://www.youtube.com/user/MrWilkins88">Fleshmonk</a> and generate your own voice clips!
				</p>
				<input id="req_input" type="text" placeholder="I'm FleshMonk"/>
			</main>
		);
	}
}
export default App_Main;
