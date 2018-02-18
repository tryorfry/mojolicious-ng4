'use strict';

angular.module('mojoApp')
    .controller('OrderCtrl', function ($scope, $http) {
        $http.get('/api/product/list').then(function (response) {
            console.log(response.data);
            $scope.products = response.data;
            $scope.myCart = [];
            $scope.addToCart = function (p) {
                $scope.myCart.push(p);
                $scope.query = ''; // clean the text box after adding
            };
    
            $scope.removeFromCart = function (i) {
                $scope.myCart.splice(i, 1); 
            };
        });
        
});
