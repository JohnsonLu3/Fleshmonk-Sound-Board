const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const WordList = require('../utils/WordList.js');

const directoryPath = "./api/SoundClips/";

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

function wordExist(word){
    
    if(getWordList().includes(word.toLowerCase()))
        return true;
    return false;
}

function generate(query){
    words = query.split(" ");
    return getWordFile(words[0]);
}


function getWordFile(word){
    let path = directoryPath + word + ".wav"

    if(wordExist(word)){
        let file = fs.readFileSync(path);
        return file.toString('base64'); 
    }else{
        return null;
    }
}

router.get('/', (req, res, next) => {
	res.status(200).json({
		message: "Query was not provided"
	});
});

router.get('/:q', (req, res, next) => {
	const query = req.params.q;
	
	res.status(200).json({
			query : query,
            data: generate(query)
	});   
});

module.exports = router;
