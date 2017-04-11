(function(){
    'use strict';

    angular
        .module('starter')
        .controller('DirectionsController', DirectionsController);

        DirectionsController.$inject = ['$rootScope', '$scope', '$cordovaDeviceOrientation', '$cordovaGeolocation'];
		
        function DirectionsController($rootScope, $scope, $cordovaDeviceOrientation, $cordovaGeolocation){
			
			var directionsctrl=this;
			
			document.addEventListener("deviceready", function () {
				directionsctrl.startCompass=startCompass;
				var currentPosition=new LatLon(51.972122, 7.633966);
				var destinationPosition=new LatLon(51.981222, 8.065917);
				//var destinationBearing = Math.round(currentPosition.bearingTo(destinationPosition));
				//var diff = destinationBearing - currentHeading;
				var watch_value=0;
	
				function onCompassUpdate(heading) {
					document.getElementById('heading').innerHTML = 'Heading: ' + heading.magneticHeading;
					
					var rotation = Math.round(360 - heading.magneticHeading) + 'deg';
        			var dir = Math.round(heading.magneticHeading);


        			$('#txtheading').html(dir + "&#176".sup() + " ");
        			$('#imgNeedle').css('-webkit-transform', 'rotate(' + rotation + ')');
				};
					
				function onCompassError(error) {
					console.log(err);
				};
				
				function startCompass(){
			        var options = null;
			
			        if (watch_value == 0) {
			            options = {
			                frequency: 100
			            };
			
			            watch_value = navigator.compass.watchHeading(compassSucess, compassError, options);
			
			            //$(this).html('Stop watching');
			        } else {
			            navigator.compass.clearWatch(watch_value);
			            watch_value = 0;
			
			            //$(this).html('Stop Watching');
			        }
			    };
					
				var options = {
					frequency: 1000,
				    filter: false     // if frequency is set, filter is ignored
				};
					
				navigator.compass.watchHeading(onCompassUpdate, onCompassError, options);
				
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