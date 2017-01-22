/// <reference path = "angular.min.js" />

var myApp = angular
            .module("filter_by_multiple_properties",[])
            .controller("myController", function($scope){
                    var employees =[
            {name:"Amit",dateofBirth:new Date("November 23,1995"),gender:"Male", salary:50000,city:"Bangalore"},
            {name:"XYZ",dateofBirth:new Date("November 23,1998"),gender:"Female", salary:51000,
            city:"Ghy"},
            {name:"Mukund",dateofBirth:new Date("November 23,1990"),gender:"Male", salary:52000,city:"Patna"},
            {name:"Sunil",dateofBirth:new Date("November 23,1991"),gender:"Male", salary:53000,
            city:"Delhi"},
            {name:"Tanmoy",dateofBirth:new Date("November 23,1992"),gender:"Male", salary:54000,city:"Chennai"}
        ];
         $scope.employees=employees;
         $scope.search = function(item){
            if($scope.searchText == undefined){
                return true;
                }
            else{
             if(item.name.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1 ||
                      item.city.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1
                    )
                return true;
                }
                return false;

            }
                        });

