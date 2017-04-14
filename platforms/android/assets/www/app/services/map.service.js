(function(){
	'use strict';

	angular
		.module('starter')
		.factory('mapService', mapService);
		
	mapService.$inject = [];
		
	function mapService(){
		var service = {
			initiateMap : initiateMap
		};

		return service;

		function initiateMap($scope){
			angular.extend($scope, {
			    	tiles: {
	            		url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
	          		},
			        center: {
			            lat: 51.966505, 
			            lng: 7.623405,
			            zoom: 15
			        },
			        defaults: {
			            scrollWheelZoom: false,
			            tileLayer: "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
		                tileLayerOptions: {
	        				opacity: 1,
	        				detectRetina: true,
	        				reuseTiles: true,
	      				}
			        },
			        events: {
			        	map: {
			        		enable: ['click','mousedown','mouseup'],
			        		logic: 'emit'
		        		}
		        	},
		        	controls: {
    					custom: [
        					L.control.locate({ follow: true })
    					]
					}
			});			
		};

	};
})();