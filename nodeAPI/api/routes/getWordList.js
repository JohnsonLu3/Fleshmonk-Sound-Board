const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

const directoryPath = "./api/SoundClips";

function getWordList(){
	let list = [];
	
	list = fs.readdirSync(directoryPath, function (err, files) {
		//handling error
		if (err) {
			return console.log('Unable to scan directory: ' + err); 
		} 

	});
	
	for(var i = 0; i < list.length; i++){
		let fn = list[i];
		fn = fn.split(".");
		list[i] = fn[0];
	}
	
	return list;
}

function wordExist(query){
	
	if(getWordList().includes(query.toLowerCase()))
		return true;
	
	return false;
}

function getWordFile(query){
	fs.readFile('/path/to/my/audiofile.wav', function (err, data) {
		  if (err) throw err;
		  var options = {
			host: 'remotehost.com',
			path: '/upload/wav',
			method: 'POST',
			headers: { 'Content-Type': 'audio/wav' }
		  };
		  var req = http.request(options, function(res) {
			// Handle a successful response here...
		  });
		  req.on('error', function(e) {
			// Handle an error response here...
		  });
		  // Write the audio data in the request body.
		  req.write(data);
		  req.end();
	});
}

router.get('/', (req, res, next) => {
	wordList = getWordList();
	res.status(200).json({
		message: "get word list...",
		list: wordList
	});
});

router.get('/:q', (req, res, next) => {
	const query = req.params.q;
	
	if(wordExist(query)){
		res.status(200).json({
			query : query,
			message: "Word exist"
		});   
	}else{
	   res.status(200).json({
		   query: query,
			message: "Word does not exist"
		});
	}
});

module.exports = router;
