/// <reference path = "angular.min.js" />

//Angular JS anchorscroll

angular.module("anchorScroll",[])
                    .controller("anchorScrollController",
                               function($scope, $location, $anchorScroll){
                        $scope.scrollTo = function(scrollLocation){
                            $location.hash(scrollLocation);
                            $anchorScroll.yOffset = 20;
                            $anchorScroll();
                        }
                    })
                      