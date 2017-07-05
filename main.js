/**
 * Created by michael on 7/6/2017.
 */
var http = require('http');
var addtwo = require('./addtwo.js').addtwo;

http.createServer(function (req,res) {
    var base = 10;
    console.log(addtwo(base));
}).listen(8124);

console.log('Server running at port 8124/');