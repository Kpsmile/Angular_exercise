angular.module('myModel', [])
                .controller("myController", function($scope, stringService){
                    $scope.transformString = function(input){
                        $scope.output = stringService.processString(input);
                    }
                })