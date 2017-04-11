(function(){
    'use strict';

    angular
        .module('starter')
        .controller('RoutepointsController', RoutepointsController);

        RoutepointsController.$inject = ['$rootScope', '$scope'];

        function RoutepointsController($rootScope, $scope){
        	var rpoints = this;
        		rpoints.locations=$rootScope.routepoints;
        		console.log(rpoints);
        }
})();