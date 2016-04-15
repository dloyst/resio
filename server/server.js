"use strict";
const express = require('express');
const http = require('http');
const fs = require('fs');
const path = require('path');
const reactEngine = require('react-engine');
const bodyParser = require('body-parser');
// var app = require('http').createServer(handler)
//var io = require('socket.io')(app);

var app = express();
//var io = require('socket.io')(app);
app.listen(3000);

app.use(express.static('client'));
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + './../client/index.html'));
});
app.get('/client/bundle.js', function (req, res) {
  res.sendFile(path.join(__dirname + './../client/bundle.js'));
});

// io.on('connection', function (socket) {
//   socket.emit('news', { hello: 'world' });
//   socket.on('my other event', function (data) {
//     console.log(data);
//   });
// });

// function handler (req, res) {
//   fs.readFile(__dirname + req.url,
//   function (err, data) {
//     if (err) {
//       res.writeHead(500);
//       return res.end('Error loading index.html');
//     }

//     res.writeHead(200);
//     res.end(data);
//   });
// }

// io.on('connection', function(socket){
//   console.log('a user connected');

//   socket.on('Response', function(data) {
//   	//Send data to presenter
//   	socket.emit('responseDate', data);

//   })

//   socket.on('disconnect', function(){
//     console.log('user disconnected');
//   });
// });
