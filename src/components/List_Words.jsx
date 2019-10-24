import React from 'react';
import '../scss/wordList.scss';

class List_Words extends React.Component  {
		
	constructor(props) {
		super(props);	
	}
	
	render(){
		
		const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

		return (
			<div className="wordList">
				<h2>available words</h2>
				
				<div className="flex">
					{
						letters.map((value, index) => {
							return this.letterContainer(value, letters);
						})
					}
				</div>
			</div>
		);
	}
	
	letterContainer = (letter) =>{		
		const list = this.props.wordList;
		const addWord = this.props.addWord;
		if(list != null){
			return(
				<div className="letterContainer">
					<h3>{letter}</h3>	
					<ul>
						{
							list.map((word, index) =>{
								let start = word[0].toLowerCase();
								if(start === letter){
								   return (<li key={"li_" + word} ><button onClick={addWord.bind(this, word)}>{word}</button></li>)
								}
								return null;
							})
						}
					</ul>
				</div>
			);
		}else{
			return;
		}
	}
}
export default List_Words;