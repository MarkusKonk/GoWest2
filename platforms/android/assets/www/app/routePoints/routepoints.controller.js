(function(){
    'use strict';

    angular
        .module('starter')
        .controller('RoutepointsController', RoutepointsController);

        RoutepointsController.$inject = ['$scope', 'mapService'];

        function RoutepointsController($scope, mapService){
        	var rpoints = this;
        		      	
        	$scope.$on('$ionicView.enter', function() {
    			rpoints.locations=mapService.getDestination();
    			console.log(rpoints.locations);
			});
        }
})();