angular.module('camelCase', []).controller("myController", function($scope, stringService){
  $scope.toCamelCase = function(input) {
    $scope.outputStr = stringService.toCamelCase(input);
  }
})