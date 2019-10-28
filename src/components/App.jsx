import React from 'react';
import '../scss/App.scss';
import App_Main from './App_Main.jsx';
import App_Header from './App_Header.jsx';

var state = {}

class App extends React.Component {
  
	render(){
		return (
			<div className="App">
				<App_Header/>
				<App_Main/>
				
				<footer>
					<img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="react logo"/>
					<p>Made by Johnson Lu with React.js</p>	
				</footer>
			</div>
		);
	}
}
export default App;
