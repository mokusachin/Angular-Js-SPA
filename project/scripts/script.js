var app = angular.module("Demo",["ngRoute"])
                .config(function($routeProvider){
                    $routeProvider
                    .when("/home",{
                        templateUrl:"templates/home.html",
                        controller:"homeController"
                    })
                    .when("/user",{
                        templateUrl:"templates/user.html",
                        controller:"userController"
                    })
                })
                .controller("homeController", function ($scope){

                })
                .controller("userController", function ($scope){
                  $scope.courses=["Sachin","patrick","martin","isabelle"];
                })