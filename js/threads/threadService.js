var app =  angular.module('rtfmApp')

app.service('threadService', function(EnvironmentService, $firebase){

    var firebaseUrl = EnvironmentService.getEnv().firebase;

    this.getThreads = function () {
        return $firebase(new Firebase(firebaseUrl + '/threads'));
    }

    this.getThread =function (threadId) {
        return $firebase(new Firebase(firebaseUrl + '/threads/' + threadId));
    }
})