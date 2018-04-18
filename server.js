var express = require('express');
var app = new express();
app.use('/', express.static('public'))
app.use(express.static(__dirname));
app.listen(4200, function(){
	console.log("server listening on port 4200, please browse to http://localhost:4200")
})
