/// <reference path = "angular.min.js" />

var myApp = angular
            .module("myModule6",[])
            .controller("myController", function($scope){
                    var employees =[
                        {firstName:"Kp",lastName:"Singh",gender:"Male", salary:50000},
                        {firstName:"Kp1",lastName:"Singh1",gender:"Male", salary:510000},
                        {firstName:"Kp2",lastName:"Singh2",gender:"Male", salary:520000},
                        {firstName:"Kp3",lastName:"Singh2",gender:"Male", salary:530000}
                    ];
                    $scope.employees=employees;
                        });

