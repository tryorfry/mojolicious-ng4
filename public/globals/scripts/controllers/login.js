"use strict";

angular.module('mojoApp')
    .controller('LoginCtrl', function ($scope) {
        var self = this;

        $scope.login = function () {
            alert($scope.email);        
            console.log(self.email);
        };
});

    
