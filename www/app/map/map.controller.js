(function(){
    'use strict';

    angular
        .module('starter')
        .controller('MapController', MapController);

        MapController.$inject = ['$scope','$rootScope', '$http', 'mapService', '$ionicPopup', '$location'];

        function MapController($scope, $rootScope, $http, mapService, $ionicPopup, $location){
        	document.addEventListener("deviceready", function () {
        		$rootScope.currentPosition;
        		
        		function success(res){
        			console.log("Found location");
        			$rootScope.currentPosition=res;
        		};
        		
        		function error(err){
        			console.log(err);
        		};
        		
        		navigator.geolocation.getCurrentPosition(success, error);	
        	});
        	
        	$rootScope.routepoints=[];
        	
        	
			mapService.initiateMap($scope);
		    
		    function addToRoute(location){
		    	$http.get(" http://nominatim.openstreetmap.org/reverse?format=json&lat="+location.leafletEvent.latlng.lat+"&lon="+
		    															location.leafletEvent.latlng.lng+"&zoom=18&addressdetails=1")
		    	.then(function(res){
		    		$rootScope.routepoints.push(res.data);
		    		console.log("added");
		    	})
		    	.catch(function(err){
		    		console.log(err);
		    	});
		    };
		    
    		$scope.$on('leafletDirectiveMap.contextmenu', function(event, wrap){
			      var confirmPopup = $ionicPopup.confirm({
			         title: 'Title',
			         template: 'Are you sure?',
			         okText: "Show direction"
			      });
			
			      confirmPopup.then(function(res) {
			         if(res) {
			         	mapService.addDestination(wrap);	
		         	   	$location.path("/tab/directions");
			         }
			      });
    		});
    		
        }
})();