function registerSocketHandlers(io){
  io.on('connection',socket=>{
    socket.on('joinRoom',room=>{});
    socket.on('leaveRoom',room=>{});
    socket.on('chatMessage',data=>{});
  });
}
module.exports={registerSocketHandlers};