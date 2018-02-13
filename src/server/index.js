const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);
const path = require("path");


app.use(express.static(path.join(__dirname, "./../../")));

app.get('/', function(req, res,next) {
  res.sendFile(path.join(__dirname, "./../../index.html"));
});

io.on('connection', function (socket) {
  console.log("new client connected" , socket);
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});

io.on('message', (socket) => {
  socket.broadcast.emit('message', {content: "this is a test message"});
});

server.listen(3000, () => {
  console.log("Listening on Port 3000");
});

