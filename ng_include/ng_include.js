/// <reference path = "angular.min.js" />

//Angular JS ng-incude
var myApp = angular
.module("ng_incude",[])
.controller("myController", function($scope){
        var employees =[
            {name:"Amit",dateofBirth:new Date("November 23,1988"),gender:"Male", salary:50000.5585},
            {name:"Rakesh",dateofBirth:new Date("November 23,1989"),gender:"Male", salary:51000},
            {name:"Mukund",dateofBirth:new Date("November 23,1990"),gender:"Male", salary:52000},
            {name:"Sunil",dateofBirth:new Date("November 23,1991"),gender:"Male", salary:53000},
            {name:"Tanmoy",dateofBirth:new Date("November 23,1992"),gender:"Male", salary:54000},
        ];
                    $scope.employees=employees;
                    $scope.employeeView="EmployeeTable.html";
                        });

