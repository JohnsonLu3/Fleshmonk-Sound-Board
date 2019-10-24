const path = require('path');
const fs = require('fs');

const directoryPath = "./api/SoundClips";

class WordList{

    getWordList(){
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

    wordExist(query){
        
        if(getWordList().includes(query.toLowerCase()))
            return true;
        return false;
    }
}
module.exports.WordList;