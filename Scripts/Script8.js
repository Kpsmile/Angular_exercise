/// <reference path = "angular.min.js" />

//Handling events in Angular JS
var myApp = angular
            .module("myModule8",[])
            .controller("myController", function($scope){
                    var technologies =[
                        {name:"C#",likes:0,dislikes:0},
                        {name:"Java",likes:0,dislikes:0},
                        {name:"SQL",likes:0,dislikes:0},
                        {name:"Python",likes:0,dislikes:0},
                    ];
                    $scope.technologies=technologies;
                    
                    $scope.incrementLikes= function(technology){
                        technology.likes++ ;
                    }
                    
                    $scope.incrementDislikes= function(technology){
                        technology.dislikes++;
                    }
                    
                        });

