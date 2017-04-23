(function(){
	'use strict';

	angular
		.module('starter')
		.factory('signageService', signageService);
		
	signageService.$inject = [];
		
	function signageService(){
		
		var signage = null;
		initiateSigns();
		
		var service = {
			getSignage: getSignage,
			showSignage: showSignage
		};	

		return service;
				
		function showSignage(current, target){	
			var pt = turf.point([current.coords.longitude, current.coords.latitude]);
        	var target = turf.point([parseFloat(target.data.lon), parseFloat(target.data.lat)]);
			for(var feature in signage){
				var signagePolygon = turf.polygon(signage[feature].features[1].geometry.coordinates);
				var sightPolygon = turf.polygon(signage[feature].features[2].geometry.coordinates);
				var isInside = turf.inside(pt, signagePolygon) && turf.inside(target, sightPolygon);
			}
		};		
		
		function getSignage(){
			return signage;
		};		
		
		function initiateSigns(){
		signage = [
{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          7.633996009826659,
          51.97201336927354
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              7.632456421852112,
              51.97112438809962
            ],
            [
              7.635573148727417,
              51.97112438809962
            ],
            [
              7.635573148727417,
              51.97303121453681
            ],
            [
              7.632456421852112,
              51.97303121453681
            ],
            [
              7.632456421852112,
              51.97112438809962
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              7.628438472747802,
              51.97317000982678
            ],
            [
              7.638459205627441,
              51.97317000982678
            ],
            [
              7.638459205627441,
              51.97944839473549
            ],
            [
              7.628438472747802,
              51.97944839473549
            ],
            [
              7.628438472747802,
              51.97317000982678
            ]
          ]
        ]
      }
    }
  ]
}
				];
			};
		};
})();