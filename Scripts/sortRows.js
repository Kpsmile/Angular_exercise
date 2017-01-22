/// <reference path = "angular.min.js" />

//Angular JS Sort Rows
var myApp = angular
.module("myModule11",[])
.controller("myController", function($scope){
        var employees =[
            {name:"Amit",dateofBirth:new Date("November 23,1995"),gender:"Male", salary:50000},
            {name:"XYZ",dateofBirth:new Date("November 23,1998"),gender:"Female", salary:51000},
            {name:"Mukund",dateofBirth:new Date("November 23,1990"),gender:"Male", salary:52000},
            {name:"Sunil",dateofBirth:new Date("November 23,1991"),gender:"Male", salary:53000},
            {name:"Tanmoy",dateofBirth:new Date("November 23,1992"),gender:"Male", salary:54000},
        ];
                    $scope.employees=employees;
                    $scope.sortColumn="name";
                    $scope.reverseSort =false;
    
    $scope.sortData = function(column){
        $scope.reverseSort= ($scope.sortColumn == column)? !$scope.reverseSort: false;
        $scope.sortColumn=column;
        }
    $scope.getSortClass = function(column){
        if($scope.sortColumn == column){
            return $scope.reverseSort ? 'arrow-down': 'arrow-up';
        }
        return '';
        
    }
});

