var express = require('express');
var app = express();
var port = 3000;
app.use(express.static(__dirname + '/node_modules'));
app.use(express.static(__dirname + '/app'));
app.listen(port);
console.log('server started on: localhost:' + port);
