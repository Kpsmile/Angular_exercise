/// <reference path = "angular.min.js" />

var myApp = angular
            .module("myModule7",[])
            .controller("myController", function($scope){
                    var countries =[
                                    {
                                        name:"UK",
                                        cities:[
                                            {name:"London"},
                                            {name:"Manchester"}
                                            ]
                                    },
                                    {               
                                        name:"INDIA",
                                        cities:[
                                            {name:"DELHI"},
                                            {name:"BLR"},
                                            {name:"MUB"}
                                            ]
                                    },
                                    {
                                        name:"NEPAL",
                                        cities:[
                                            {name:"KATHMANDU"},
                                            {name:"JNKPUR"},
                                            {name:"EVERST"}
                                            ]
                                    }
                                  ];
                    $scope.countries=countries;
                        });

