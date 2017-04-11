(function(){
    'use strict';

	angular.module('starter', ['ionic', 'leaflet-directive', 'ngCordova'])
	.config(config)
	.run(function($ionicPlatform) {
  		$ionicPlatform.ready(function() {

	    	if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      			cordova.plugins.Keyboard.disableScroll(true);
		    }
    
    		if (window.StatusBar) {
      			// org.apache.cordova.statusbar required
      			StatusBar.styleDefault();
    		}
  		});
	});
	
	config.$inject = ['$stateProvider', '$urlRouterProvider'];
	
	function config($stateProvider, $urlRouterProvider) {

  		$stateProvider

	  // setup an abstract state for the tabs directive
    	.state('tab', {
    		url: '/tab',
    		abstract: true,
    		templateUrl: 'templates/tabs.html'
  		})

  		.state('tab.map', {
    		url: '/map',
    		views: {
      			'tab-map': {
        		templateUrl: 'app/map/tab-map.html',
        		controller: 'MapController',
        		controllerAs: 'mapctrl'
     			}
    		}
  		})

  		.state('tab.routepoints', {
      		url: '/routepoints',
      		views: {
        		'tab-routepoints': {
          		templateUrl: 'app/routePoints/tab-routepoints.html',
          		controller: 'RoutepointsController',
          		controllerAs: 'rpoints'
        		}	
      		}
    	})
    
    	.state('tab.chat-detail', {
      		url: '/chats/:chatId',
      		views: {
        		'tab-chats': {
          		templateUrl: 'templates/chat-detail.html'
        		}
      		}
    	})

  		.state('tab.directions', {
    		url: '/directions',
    		views: {
      			'tab-directions': {
        		templateUrl: 'app/directions/tab-directions.html',
        		controller: 'DirectionsController',
        		controllerAS: 'directionsctrl'
      			}
    		}
  		});

	  // if none of the above states are matched, use this as the fallback
  		$urlRouterProvider.otherwise('/tab/map');

	}
})();
