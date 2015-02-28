var app = angular.module('rtfmApp', ['firebase', 'ngRoute']);

app.config(function($routeProvider) {


    $routeProvider
        .when('/login', {
            templateUrl: 'js/login/login.html',
            controller: 'loginCtrl'
        })
        .when('/threads',{
            templateUrl: 'js/threads/threads.html',
            controller: 'ThreadCtrl'

        })

        .when('/threads/:threadId',{

        })
        .otherwise({
            redirectTo: '/login'
        })
})

app.run(function($rootScope, $location, EnvironmentService){
    $rootScope.$on('$routeChangeStart', function(event, next, current){

        if (EnvironmentService.getUsername() ){
            $rootScope.username = EnvironmentService.getUsername()

        }

        else {
            $location.path('/login')
        }


    })
})
