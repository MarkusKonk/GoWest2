(function(){
    'use strict';

    angular
        .module('starter')
        .controller('DirectionsController', DirectionsController);

        DirectionsController.$inject = ['$rootScope','$scope', '$cordovaDeviceOrientation', '$cordovaGeolocation', 'mapService', 'signageService'];
		
        function DirectionsController($rootScope, $scope, $cordovaDeviceOrientation, $cordovaGeolocation, mapService, signageService){
			var directionsctrl=this;
			
			document.addEventListener("deviceready", function () {
				
				directionsctrl.heading = null;
				directionsctrl.position = null;
				directionsctrl.rotation = null;
				directionsctrl.destinationBearing = null;
				directionsctrl.destination=mapService.getDestination()[0];
				
				function onCompassUpdate(heading) {					
					directionsctrl.rotation = Math.round(360 - heading.magneticHeading) + 'deg';
        			directionsctrl.heading = Math.round(heading.magneticHeading);
        			var pos=new LatLon($rootScope.currentPosition.coords.latitude,$rootScope.currentPosition.coords.longitude);
        			var des=new LatLon(directionsctrl.destination.data.lat, directionsctrl.destination.data.lng);
        			directionsctrl.destinationBearing = Math.round(pos.bearingTo(des));
					directionsctrl.diff = directionsctrl.destinationBearing - directionsctrl.heading + 'deg';
					$('#txtheading').html(directionsctrl.heading + "&#176".sup() + " ");
        			$('#imgNeedle').css('-webkit-transform', 'rotate(' + directionsctrl.diff + ')');
				};
					
				function onCompassError(error) {
					console.log(err);
				};
					
				var options = {
					frequency: 1000,
				    filter: false     // if frequency is set, filter is ignored
				};
					
				directionsctrl.test = navigator.compass.watchHeading(onCompassUpdate, onCompassError, options);
				
				function onSuccess(res){
					$rootScope.currentPosition=res;
					signageService.showSignage(res, directionsctrl.destination);
				};
				
				function onError(err){
					console.log(err)
				};
				
				var geolocationOptions={ maximumAge: 3000, timeout: 5000, enableHighAccuracy: true };
				
				navigator.geolocation.watchPosition(onSuccess, onError);
				
			});		    
   
   		}
})();


//51.972122, 7.633966

//North: 52.001168, 7.631488
//East: 51.981222, 8.065917
//South: 51.750564, 7.648437
//West: 51.987989, 7.219970
//destinationBearing = Math.round(currentPosition.bearingTo(destinationPosition));
//currentPosition = new LatLon(position.coords.latitude, position.coords.longitude);