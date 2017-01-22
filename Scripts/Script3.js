/// <reference path = "angular.min.js" />

var myApp = angular
            .module("myModule3",[])
            .controller("myController", function($scope){
                    var employee ={
                        firstName:"Kp",
                        lastName:"Singh"
                                    };
                    $scope.employee=employee;
//    $Scope.message = "Angular JS Tutotrial"
                        });

//myApp.controller("myController", function($scope){
//    var employee ={
//        firstName:"Kp",
//        lastName:"Singh"
//    };
//    $scope.employee=employee;
////    $Scope.message = "Angular JS Tutotrial"
//});