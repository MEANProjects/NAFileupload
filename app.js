
// This application uses express as its web server
// for more info, see: http://expressjs.com
var express = require('express');


// create a new express server
var app = express();

// serve the files out of ./public as our main files
app.use(express.static(__dirname + '/public'));


// start server on the specified port and binding host
app.listen(8000, '0.0.0.0', function() {
  // print a message when the server starts listening
  console.log("server starting on localhost:8000");
});