const express = require('express');
const path = require('path');
const fs = require('fs');
const PORT = process.env.PORT || 5000

express()
	.use(express.static(__dirname))
	.use(express.static(__dirname + '/assets/css'))
	.use(express.static(__dirname + '/node_modules'))
	.use(express.static(__dirname + '/controller'))
	.use(express.static(__dirname + '/service'))
	.get('/', (req, res) => {
		try{
			res.set('Content-Type', 'text/html');
			res.render('index.html');
		} catch(e){
			res.status(200).send(e);
		}
	})
	.listen(PORT, () => console.log(`Listening on ${PORT}`));
