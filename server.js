// var express = require('express'),
// 	app = new express();

// app.use(express.static(__dirname));
// app.get('/',function(req,res){
// 	res.render('index.html')
// })

// app.listen(process.env.PORT || 4200, function () {
// 	console.log(__dirname);
// 	console.log("server listening on port 4200, please browse to http://localhost:4200")
// })
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
	.use(express.static(__dirname))
	.get('/', (req, res) => res.render('index.html'))
	.listen(PORT, () => console.log(`Listening on ${PORT}`))
