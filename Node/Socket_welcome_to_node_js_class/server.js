
//connection for socket//
const express = require('express');
const app  = express();

const http = require('http').createServer(app);

const io = require('socket.io')(http);

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html');
})
io.on('connection',(socket)=>{
    console.log(socket.id+" new user");
    socket.on('chat',()=>{
        socket.emit('msg',"Hello from nodejs");
    })
})


http.listen(5000,()=>{
    console.log("Servre is running....")
})