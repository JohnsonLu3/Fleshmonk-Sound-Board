import React from 'react';
import $ from 'jquery';
import toWav from 'audiobuffer-to-wav';
import '../scss/App.scss';
import fleshmonk from '../image/fleshmonk.png';
import testAudio from '../media/example/speakers.wav';
import List_Words from './List_Words.jsx';
import Word_Audio from './Word_Audio.jsx'

var state = {}

class App_Main extends React.Component {
  	
	constructor(props) {
		super(props);
		this.API_ADDRESS = "http://ec2-52-23-226-177.compute-1.amazonaws.com:8080/";
		this.state = {
		  	error: null,
		  	isLoaded: false,
		  	clips: [],
			generated: []
		};
	}
	
	componentDidMount() {
		fetch( this.API_ADDRESS + "getWordList")
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
					<br/>
					<strong> Currently you can only use the words that are available below.</strong>
				</p>
				
				{
					error != null ? 
						(<div className="ErrorMsg">Error -- Could not connect to server</div>)
					:
						(<div></div>)
				}
				
				<div id="audioContainer" className="hide">
					{
						this.state.generated != null ? ( <button onClick={this.playAudio.bind(this, this.state.generated)}>Play <i className="fas fa-play" aria-hidden="true"></i></button>) : (null)
					}
					<span>
						{
							this.state.generated != null ?
								( this.state.generated.map((pair, index) => ( 
									<Word_Audio key={index} index={index} word={Object.keys(pair)[0]} audioData={pair[Object.keys(pair)[0]]}/>
								)))
							:
							(null)

						}
					</span>
				</div>
				
				<div id="req_container">
					<input id="req_input" type="text" placeholder="Stay Fleshy..."/>
					<button id="clear_input" onClick={this.clearInput}>X</button>
				</div>
				
				<button id="req_generate" onClick={this.generate}>
					generate
				</button>
				
				<div id="fleshmonk_container">
					<img id="fleshmonk_logo" src={fleshmonk} alt="fleshmonk logo"/>
				</div>
				
				<List_Words wordList = {clips} addWord={this.addWord}></List_Words>
			</main>
		);
	}
	
	generate = () =>{
		let query = this.getQuery();
		fetch(this.API_ADDRESS + "generate/" + query)
		  .then(res => res.json())
		  .then(
			(result) => {
				this.setState({
					isLoaded: true,
					generated: result.data
				});
				if(this.state.generated != null){
					let audioContainer = document.getElementById("audioContainer");
					audioContainer.classList.remove('hide');
				}
			},
			(error) => {
			  this.setState({
				isLoaded: true,
				error
			  });
			}
		  );
		
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
		return;
	}
	
	clearInput = () =>{
		let req_input = document.getElementById("req_input");
		req_input.value = "";
		let audioContainer = document.getElementById("audioContainer");
		audioContainer.classList.add('hide');
		
		let sounds = document.getElementsByClassName('audioPlayer');
  		for(let i=0; i < sounds.length; i++){
			sounds[i].pause();	
		} 
		
		return;
	}
	
	playAudio = (pairs) =>{
		let players = []
		let ids = []
		for(let i = 0; i < pairs.length; i++){
			//audio_" + this.props.word + "_" + this.props.index
			players.push(document.getElementById("audio_" + Object.keys(pairs[i])[0]  + "_" + i));
			ids.push("audio_" + Object.keys(pairs[i])[0]  + "_" + i);
		}
		
		
		for(let i = 0; i < ids.length; i++){
			if(i+1 < ids.length){
				players[i].setAttribute("onEnded", this.getNext(ids[i+1]));
			}
		}
		players[0].play();
	}
			
//	playNext = (nextPlayer) =>{
//		console.log("ended" + nextPlayer)
//		setTimeout(function(){ nextPlayer.play(); }, 100);
//	}
//	
	getNext = (id) =>{
		let prefix = "setTimeout(function(){ ";
		let getEleStr = "document.getElementById(\""
		let postfix = "\").play(); }, 50);"
		return prefix + getEleStr + id + postfix;
	}
}
export default App_Main;
