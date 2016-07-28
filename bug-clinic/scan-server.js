//  scan-server.js
   var createServer = require("http").createServer;
   var server = createServer(function (req, res) {
     res.end("hello");
   });
   server.on("error", function (err) {

   server.listen(9876, function () {
     console.log("listening");
   });
