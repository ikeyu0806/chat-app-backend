var express = require('express');
var app = express();
var http = require('http').Server(app);
const io = require('socket.io')(http);
const PORT = process.env.PORT || 4000;

app.get('/' , function(req, res){
  res.sendFile(__dirname+'/index.html');
});

io.on('connection',function(socket){
  socket.on('message', function(data){
    console.log('message: ' + data.body);
    console.log('senderId: ' + data.senderId);
    socket.emit('message', data)
  })
}); 

http.listen(PORT, function(){
  console.log('server listening. Port:' + PORT);
});
