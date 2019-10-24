import React from 'react';
import '../scss/App.scss';
import fleshmonk from '../image/fleshmonk.png';
import List_Words from './List_Words.jsx';
var state = {}

class App_Main extends React.Component {
  
	constructor(props) {
		super(props);
		this.state = {
		  	error: null,
		  	isLoaded: false,
		  	clips: [],
			generated: null
		};
	}
	
	componentDidMount() {
		fetch("https://localhost:44313/getWordList")
		  .then(res => res.json())
		  .then(
			(result) => {
			  this.setState({
				isLoaded: true,
				clips: result.list
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
					Fleshmonk Sound Board. Compile sounds from the YouTuber <a href="https://www.youtube.com/user/MrWilkins88">Fleshmonk</a> and generate your own voice clips! In the future maybe support for auto generated voice.
				</p>
				
				{
					error != null ? 
						(<div className="ErrorMsg">Error -- Could not connect to server</div>)
					:
						(<div></div>)
				}
				
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
				
				<List_Words wordList = {clips} addWord={this.addWord}></List_Words>
			</main>
		);
	}
	
	generate = () =>{
		let query = this.getQuery();
		fetch("https://localhost:44313/generate/" + query)
		  .then(res => res.json())
		  .then(
			(result) => {
			  this.setState({
				isLoaded: true,
				generated: result.data
			  });				
			},
			(error) => {
			  this.setState({
				isLoaded: true,
				error
			  });
			}
		  )
		
		return;
	}
	
	getQuery = () =>{
		let req_input = document.getElementById("req_input");
		if(req_input != null){
			let query = req_input.value;
			query = query.trim();
			return query;
		}
	}
	
	addWord = (word) =>{
		console.log("add " + word);
		let req_input = document.getElementById("req_input");
		req_input.value = req_input.value + " " + word;
	}
}
export default App_Main;
