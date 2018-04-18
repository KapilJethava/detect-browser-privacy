var express = require('express'),
	app = new express();

app.use(express.static(__dirname));
app.get('/',function(req,res){
	res.render('index.html')
})

app.listen(process.env.PORT || 4200, function () {
	console.log(__dirname);
	console.log("server listening on port 4200, please browse to http://localhost:4200")
})
