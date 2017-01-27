// This application uses express as its web server
// for more info, see: http://expressjs.com
var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');

// create a new express server
var app = express();

// serve the files out of ./public as our main files
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.post('/uploadfile', function (req, res) {
  console.log("Raw file content = " + req.body.rawContent);

  fs.writeFile("test", req.body.rawContent, function (err) {
    if (err) {
      return console.log(err);
    }

    console.log("The file was saved!");
  });

  res.status(200).send("successfully received the content");
})


// start server on the specified port and binding host
app.listen(8000, '0.0.0.0', function () {
  // print a message when the server starts listening
  console.log("server starting on localhost:8000");
});