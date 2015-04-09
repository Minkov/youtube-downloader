/* global require */

var fs = require("fs");
var ytdl = require("ytdl-core");

var urls = ["https://www.youtube.com/watch?v=5aesDGwW4fU"];

var folderPath = "./videos/";
ytdl.getInfo(url, function(err, info){
    var filepath = folderPath + info.title + '.mp4';
        
    console.log(info.title);    
    if(err) throw err;

});
