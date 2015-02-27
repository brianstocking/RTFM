var app = angular.module('rtfmApp', ['firebase', 'ngRoutes']);

app.config(function($routeProvider){

   $routeProvider
    .when('/login',{


    })
        .when('/threads',{

        })

        .when('/threads/:threadId',{

        })
        .otherwise({
            redirectTo: '/login'
        })
})