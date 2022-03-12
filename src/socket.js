const express=require('express')
const serverless=require('serverless-http')
const app=express()
const router=express.Router();
module.exports.handler=serverless(app)
const { Server } = require("socket.io");
const io = new Server(server);



router.get('/',(req,res)=>{
    res.sendFile(__dirname + '../dist/index.hmtl');
})



io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
    socket.on('chat message', (msg) => {
        console.log('message: ' + msg);
        io.emit('chat message', msg);
      });
    socket.broadcast.emit('hi');  
  });
  
  app.use('/.netlify/functions/socket',router);
