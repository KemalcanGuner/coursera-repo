(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

 function LunchCheckController($scope) {
  $scope.name = "";
  $scope.message = "";

  $scope.sayMessage = function (){
    const words = $scope.name.split(',');
    var length = words.length;
    console.log(length);
    if (length <= 3 || $scope.name != ""){$scope.message = "Enjoy!";}
    if (length > 3){$scope.message = "Too much";}
    if ($scope.name == ""){$scope.message = "Please enter data first";}
  };

};

})();
