let express = require('express');
var app = require('express')();
var http = require('http').Server(app);
let io = require('socket.io')(http);

app.get('/', function(req, res){
  console.log('Servidor Funcionando')
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  io.emit('mensagem','Um usuário entrou na sala:' + socket.id);
  
  socket.on('mensagem', function(msg){
    io.emit('mensagem',socket.id +': '+ msg);
  });

  socket.on('disconnect', function(){
    io.emit('mensagem','Um usuário foi disconectado:' + socket.id);
  });
});

http.listen(3000, function(){
  console.log('Usando porta 3000');
});
