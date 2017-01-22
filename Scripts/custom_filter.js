/// <reference path = "angular.min.js" />

//Angular JS  Custom filters
var myApp = angular
.module("customfilter",[])
.controller("myController", function($scope){
        var employees =[
            {name:"Amit",dateofBirth:new Date("November 23,1988"),gender:1, salary:50000.5585},
            {name:"Rakesh",dateofBirth:new Date("November 23,1989"),gender:1, salary:51000},
            {name:"Mukund",dateofBirth:new Date("November 23,1990"),gender:2, salary:52000},
            {name:"Sunil",dateofBirth:new Date("November 23,1991"),gender:3, salary:53000},
            {name:"Tanmoy",dateofBirth:new Date("November 23,1992"),gender:2, salary:54000},
        ];
                    $scope.employees=employees;
                        });

