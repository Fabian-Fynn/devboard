/*
 @Author:
 Fabin Hoffmann
*/

var app = require('express')();
var express = require('express');
var http = require('http').Server(app);
var io = require('socket.io')(http, {path: '/public/socket.io'})
var _ = require('underscore');

//express
app.use(express.static(__dirname + '/public'));
app.get('/', function(req, res){
  res.sendFile(__dirname + '/client.html');
});


//socket functions
io.on('connection', function(socket){
  console.log('User connected');
  io.emit('connected','Hello Mate!');
});


http.listen(3333, function(){
  console.log('There we go ♕');
  console.log('Gladly listening on http://127.0.0.1:3333');
});
