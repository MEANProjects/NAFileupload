var fs = require('fs');
var path = require('path')

var filePath = path.resolve(__dirname, '../testfile.txt');
var fileSize = fs.statSync(filePath).size;
var fileContent = fs.readFileSync(filePath);

describe('angularjs file upload test ', function () {
  it('should upload file', function () {
    browser.get('http://localhost:8000');

    element(by.css('input[type="file"]')).sendKeys(filePath);
    element(by.id('upload_button')).click();
  });
});