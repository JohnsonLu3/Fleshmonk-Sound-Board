const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const sox = require('sox');
const SoxCommand = require('sox-audio');
const command = SoxCommand();

const WordList = require('../utils/WordList.js');
const directoryPath = "./api/SoundClips/";
const tempPath = "./api/tmp/";

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
    
    let inputFiles = {};
    for(let i = 0; i < words.length; i++){
        wordPath = getWordFile(words[i]);
        if(wordPath != null){
            inputFiles[words[i]] =  fs.readFileSync(wordPath).toString('base64');
        }
    }
    return inputFiles;
}

 function recursiveStreamWriter(writeStream, inputFiles) {
    if(inputFiles.length == 0) {
        console.log('Done!')
        return;
    }

    let nextFile = inputFiles.shift(); 
    var readStream = fs.createReadStream(nextFile);

    readStream.pipe(writeStream, {end: false});
    readStream.on('end', () => {
        console.log('Finished streaming an audio file');
        recursiveStreamWriter(inputFiles);
    });
}

function getWordFile(word){
    let path = directoryPath + word + ".wav"

    if(wordExist(word)){
        return path;
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