var app =  angular.module('rtfmApp')

app.controller('loginCtrl', function(EnvironmentService, $scope, $location){

    $scope.env = EnvironmentService.getEnv()

    //$scope.logMeIn = function(username){
    //    alert(username)
    //}

    $scope.go = function(username){
        $location.path('/threads/')
    };

})

