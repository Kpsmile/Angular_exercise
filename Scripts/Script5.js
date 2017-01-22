/// <reference path = "angular.min.js" />

var myApp = angular
            .module("myModule5",[])
            .controller("myController", function($scope){
                    var employee ={
                        firstName:"Kp",
                        lastName:"Singh",
                        gender:"Male"
                                    };
                    $scope.employee=employee;
                        });

