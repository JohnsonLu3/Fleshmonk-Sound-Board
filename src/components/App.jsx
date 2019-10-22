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
			</div>
		);
	}
}
export default App;
