var express = require('express'),
	path = require('path'),
	app = new express();


app.use('/', express.static(__dirname));
// app.use('/node_modules', express.static(__dirname) + "/node_modules");
// app.use('/service', express.static(__dirname) + "/service");
// app.use('/controller', express.static(__dirname) + "/controller");

app.get('/', function (req, res) {
	res.render('index.html');
});
app.listen(process.env.PORT || 4200, function(){
	console.log(__dirname);
	console.log("server listening on port 4200, please browse to http://localhost:4200")
})
