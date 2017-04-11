(function(){
    'use strict';

    angular
        .module('starter')
        .controller('MapController', MapController);

        MapController.$inject = ['$rootScope', '$scope', '$http'];

        function MapController($rootScope, $scope, $http){
        	
        	$rootScope.routepoints=[];
        	
		    angular.extend($scope, {
		        center: {
		            lat: 51.966505, 
		            lng: 7.623405,
		            zoom: 15
		        },
		        defaults: {
		            scrollWheelZoom: false
		        },
		        events: {
		        	map: {
		        		enable: ['click','mousedown','mouseup'],
		        		logic: 'emit'
		        	}
		        }
		    });
		    
		    function addToRoute(location){
		    	$http.get(" http://nominatim.openstreetmap.org/reverse?format=json&lat="+location.leafletEvent.latlng.lat+"&lon="+
		    																	location.leafletEvent.latlng.lng+"&zoom=18&addressdetails=1")
		    	.then(function(res){
		    		$rootScope.routepoints.push(res.data);
		    		console.log("added")
		    	})
		    	.catch(function(err){
		    	});
		    };
		    
		    $scope.$on('leafletDirectiveMap.click', function(event, wrap){
       			//$scope.eventDetected = "click";
       			//reverseGeocoding(wrap.leafletEvent.latlng.lat, wrap.leafletEvent.latlng.lng);
    		});
    		
		    
    		$scope.$on('leafletDirectiveMap.mousedown', function(event, wrap){
       			$scope.eventDetected = "mousedown";
       			$scope.startTime = new Date().getTime();
    		});
    		
    		$scope.$on('leafletDirectiveMap.mouseup', function(event, wrap){
       			$scope.eventDetected = "mouseup";
       			$scope.endTime = new Date().getTime();
       			if($scope.endTime - $scope.startTime > 800){
  					addToRoute(wrap);     				
       			}
    		});    		 
        }
})();