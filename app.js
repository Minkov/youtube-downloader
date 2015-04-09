/* global require, console */

(function(){
    "use strict";
    var fs = require("fs");
    var ytdl = require("ytdl-core");
    var lazy = require("lazy");

    var folderpath = "./videos/";

    if(!(fs.existsSync(folderpath))){
        fs.mkdirSync(folderpath);
    }

    new lazy(fs.createReadStream('./input.txt'))
    .lines.forEach(function(url){
        url = url.toString();
        ytdl.getInfo(url, function(err, info){
            console.log("Downloading Video: " + info.title);
            var filepath = folderpath + info.title + ".mp4";            
            ytdl(url).pipe(fs.createWriteStream(filepath));
        });
    });
}());