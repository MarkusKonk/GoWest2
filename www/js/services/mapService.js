angular.module('starter.services', [])

.factory('mapService', function(){
	
	var map = null;
	var routeElements = [];
	
	var initMap = function(){
		var options = {timeout: 10000, enableHighAccuracy: true};
	 
	    var latLng = new google.maps.LatLng(51.962022, 7.624095);
	 
	    var mapOptions = {
	      center: latLng,
	      zoom: 15,
	      mapTypeId: google.maps.MapTypeId.ROADMAP
	    };
	 
	    map = new google.maps.Map(document.getElementById("map"), mapOptions);
	    console.log(navigator.geolocation.getCurrentPosition(function(position){
	    	console.log(position)
	    }));
	    var longpress = false;

    	google.maps.event.addListener(map,'click', function (event) {
        	    (longpress) ? setMarkerForRouting(event.latLng) : null;
        });

	    google.maps.event.addListener(map, 'mousedown', function(event){
      	          start = new Date().getTime();           
        });

    	google.maps.event.addListener(map, 'mouseup', function(event){
                end = new Date().getTime();
                    longpress = (end - start < 500) ? false : true;         

        });
        
        var geoloccontrol = new klokantech.GeolocationControl(map, map.getZoom());
	    
	    return map;
	};
	
	var Latitude = undefined;
	var Longitude = undefined;

	document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {

    var onSuccess = function(position) {
    	Latitude = position.coords.latitude;
    	Longitude = position.coords.longitude;
    	console.log(position.coords)
    	map.setCenter({lat:Latitude, lng:Longitude});
    };

    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }

	navigator.geolocation.getCurrentPosition(onSuccess, onError);
  	}
	
 	var setMarkerForRouting = function(location){	
 		if (routeElements.length < 2){
	 		var marker = new google.maps.Marker({
			    position: new google.maps.LatLng(location.lat(), location.lng()),
			    draggable: true			  	
			});
			routeElements.push(marker);
			for (marker in routeElements){
				routeElements[marker].setMap(map);
			}
			if (routeElements.length == 2) routing();
		}else{
			deleteRoutingElements();
		}
 	};
 	
 	var deleteRoutingElements = function(){
 		for (elem in routeElements){
 			routeElements[elem].setMap(null);
 		}
 		routeElements = new Array();
 	};
 	
 	var routing = function(){
 		var directionsService = new google.maps.DirectionsService();	
		var request = {
		    origin: routeElements[0].position,
		    destination: routeElements[1].position,
		    travelMode: google.maps.TravelMode.WALKING,
		};		
		directionsService.route(request, function(response, status) {
		  if (status == google.maps.DirectionsStatus.OK) {
		    var route = new google.maps.Polyline({path:response.routes[0].overview_path});
		    route.setMap(map);
		    routeElements.push(route);
		  }
		});			
 	};
	
	return {
		initMap: initMap
	};
});