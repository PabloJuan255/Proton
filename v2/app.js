let express = require('express');
var app = require('express')();
var http = require('http').Server(app);
let io = require('socket.io')(http);

app.get('/', function(req, res){
  console.log('Servidor Funcionando')
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  var frases = ['O ' + socket.id + ' entrou na sala com Pizza! ','O ' + socket.id + ' entrou na sala com refrigerante!','O ' + socket.id + ' entrou na sala se sentido Poderoso!','O ' + socket.id + ' entrou na sala se sentido Alegre!','O ' + socket.id + ' entrou na sala se sentido um Hacker!']  
  io.emit('mensagem',frases[Math.floor(Math.random() * 5)]);
  
  socket.on('mensagem', function(msg){
    io.emit('mensagem',socket.id +': '+ msg);
  });
  
  var frases_sair = ['Que pena,'+socket.id+',volte depois!','Permaneça aqui,'+socket.id+',nem faz muito tempo que está aqui!']
  socket.on('disconnect', function(){
    io.emit('mensagem',frases_sair[Math.floor(Math.random() * 2)]);
  });
});

http.listen(3000, function(){
  console.log('Usando porta 3000');
});
