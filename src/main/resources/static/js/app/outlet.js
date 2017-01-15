
var outletTool = angular.module('outletTool',[
										'ui.router',
										'outletControllers',
										'outletServices'
									]);

 
outletTool.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
	    $urlRouterProvider.otherwise('/home')	
		$stateProvider
            .state('home', {
            	url: '/home',
                templateUrl: 'pages/search.html',
                controller: 'OutletSearchCtrl'
            });
   }]);