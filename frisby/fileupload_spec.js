var frisby = require('frisby');
var fs = require('fs');
var path = require('path')

var filePath = path.resolve(__dirname, '../testfile.txt');
var fileSize = fs.statSync(filePath).size;
var fileContent = fs.readFileSync(filePath);

console.log("filepath = " + filePath + " fileSize = " + fileSize + " fileContent = " + fileContent);

frisby.create('File upload test')
  .post('http://localhost:8000/uploadfile',
    {rawContent: fileContent})
  .expectStatus(200)
  /*.expectHeaderContains('content-type', 'application/json')
  .expectJSON({
    data: 'data:application/octet-stream;base64,' + fileContent.toString('base64'),
    headers: {
      "Content-Type": "application/octet-stream",
      "Content-Length": String(fileSize)
    },
    url: "http://localhost:8000/uploadfile",
    json: null,
    files: {},
    form: {}
  })
  .expectJSONTypes({
    data: String
  })*/
  .toss();