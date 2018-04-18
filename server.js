var express = require('express');
var app = new express();

app.use('/', express.static(__dirname));
// app.use('/node_modules', express.static(__dirname) + "/node_modules");
// app.use('/service', express.static(__dirname) + "/service");
// app.use('/controller', express.static(__dirname) + "/controller");

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, '/index.html'));
});
app.listen(process.env.PORT || 4200, function(){
	console.log("server listening on port 4200, please browse to http://localhost:4200")
})
