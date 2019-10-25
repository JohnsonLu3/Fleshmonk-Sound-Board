import React from 'react';

class Word_Audio extends React.Component  {
	
	
	constructor(props) {
		super(props);	
	}
	
	render(){
		
		return(
			<div>
				<p>{this.props.word}</p>
				<audio
					controls
					id={"audio_" + this.props.word} 
					src={"data:audio/wav;base64," + this.props.audioData}
					className="audioPlayer" >
					 Your browser does not support the
					 <code>audio</code> element.
				</audio>
			</div>
		);
	}
}export default Word_Audio;