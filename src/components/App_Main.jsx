import React from 'react';
import '../scss/App.scss';
import fleshmonk from '../image/fleshmonk.png';

var state = {}

class App_Main extends React.Component {
  
	constructor(props) {
		super(props);
		this.state = {
		  error: null,
		  isLoaded: false,
		  clips: []
		};
	}
	
	  componentDidMount() {
		fetch("https://localhost:44313/SoundBoard")
		  .then(res => res.json())
		  .then(
			(result) => {
			  this.setState({
				isLoaded: true,
				clips: result
			  });				
			},
			(error) => {
			  this.setState({
				isLoaded: true,
				error
			  });
			}
		  )
	  }
	
	render(){
		
		const { error, isLoaded, clips } = this.state;
		
		return (
			<main className="">
				<p className="desc">
					Fleshmonk Sound Board. Compile sounds from the YouTuber <a href="https://www.youtube.com/user/MrWilkins88">Fleshmonk</a> and generate your own voice clips!
				</p>
				
				<p style={{"color": "white"}}>

				</p>
				
				<div id="req_container">
					<input id="req_input" type="text" placeholder="I'm Fleshmonk..."/>
				</div>
				
				<button id="req_generate" onClick={this.generate}>
					generate
				</button>
				
				<div id="fleshmonk_container">
					<img id="fleshmonk_logo" src={fleshmonk} />
				</div>
				
			</main>
		);
	}
	
	generate = () =>{
		return;
	}
}
export default App_Main;
