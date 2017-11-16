var express = require('express');
var app = express();
var port = 3000;
app.use(express.static(__dirname));
app.get('/', function(req, res) {
    res.redirect('/app');
});
app.listen(port);
console.log('server started on: localhost:' + port);
