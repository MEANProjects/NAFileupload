angular.module('nafileupload', [])
  .controller('fileuploadController', ['$scope', '$http', function ($scope, $http) {
    $scope.test = "test string";

    $scope.updateFile = function (files) {
      $scope.fileTobeUploaded = files[0];
    };

    $scope.uploadFile = function () {
      console.log("chosen file = " + $scope.fileTobeUploaded);

      if (!$scope.fileTobeUploaded) {
        return;
      }

      //instantiate filereader
      var reader = new FileReader();
      var rawData = [];

      reader.loadend = function () {
      };


      //callback on file load complete
      reader.onload = function (e) {
        rawData = e.target.result;

        //convert to unit8 to send to backend
        var data = new Uint8Array(rawData);
        var arr = new Array();
        for (var i = 0; i != data.length; ++i)
          arr[i] = String.fromCharCode(data[i]);

        var binaryStr = arr.join("");

        $http.post("/uploadfile", {"rawContent": binaryStr}).then(function (response) {
          alert("succesfully sent the file to backend");
        }).catch(function (err, status) {
          alert("File was not sent to backend, error code = " + err);
        });

      };

      // read the file object
      reader.readAsArrayBuffer($scope.fileTobeUploaded);
    }
  }]);