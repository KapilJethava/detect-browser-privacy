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
const express = require('express');
const path = require('path');
const fs = require('fs');
const PORT = process.env.PORT || 5000

express()
	.use(express.static(__dirname))
	.get('/', (req, res)=>{
		console.log(__dirname + '/index.html')
		// fs.readFile('./index.html',(err, data) => {
		// 	if(err) {
		// 		res.send(__dirname + '/index.html' + JSON.stringify(err));
		// 		// res.write(err);
		// 		// res.end();
		// 	} else {
		// 		res.send(data);
		// 	}


		// })
		fs.readdir(__dirname, function (err, items) {
			res.send(items);
		});
	})
	// .use(express.static(__dirname + '/assets/css'))
	// .use(express.static(__dirname + '/node_modules'))
	// .use(express.static(__dirname + '/controller'))
	// .use(express.static(__dirname + '/service'))
	// .get('/', (req, res) => {
	// 	try{
	// 		res.writeHead(200, {'Content-Type':'text/html'})
	// 		res.sendFile('index.html');
	// 	} catch(e){
	// 		res.status(200).send(e);
	// 	}
	// })
	.listen(PORT, () => console.log(`Listening on ${PORT}`))

// const http = require('http');
// const fs = require('fs');

// const onRequest = (req, res) => {
// 	res.writeHead(200, {'Content-Type':'text/html'});
// 	fs.readFile('./index.html', (err, data)=>{
// 		if(err){
// 			res.write('you will resolve this in next attempt');
// 		} else {
// 			res.write(data);
// 		}
// 		res.end();
// 	})
// }
// http.createServer(onRequest).listen(process.env.PORT || 6666);
