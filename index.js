var app = require("express")();
var http = require("http").Server(app);
var io = require("socket.io")(http);

app.get("/", function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get("/testPage", function(req, res) {
  res.send("<h2>You have reached the testPage</h2>");
});

io.on('connection', function(socket) {
  console.log("Someone has connected.");

  socket.on("msg", function(message) {
    console.log(message);
    io.emit("message", message);
  });

});

http.listen(8080, function() {
  console.log("Listening on *:8080");
});
