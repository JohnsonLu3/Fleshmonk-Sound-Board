const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

function getWordList(){
	let list = [];
	const directoryPath = "./api/SoundClips";
	
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
	const directoryPath = "./api/SoundClips";
	
	if(getWordList().includes(query.toLowerCase()))
		return true;
	
	return false;
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
