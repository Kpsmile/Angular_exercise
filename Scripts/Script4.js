/// <reference path = "angular.min.js" />

var myApp = angular
            .module("myModule4",[])
            .controller("myController", function($scope){
                    var country ={
                        name:"India",
                        capital:"Delhi",
                        flag:"Images/kp.png"
                                    };
                    $scope.country=country;
                        });

