'use strict';

/* Services */
var outletServices = angular.module('outletServices', ['ngResource']);

outletServices.factory('Outlet', ['$resource',function($resource){
	 return $resource('../vp-contact-tool/api/:dest/:id/contacts',
			 {
		 		dest:"outlet"
		 	 }, 		 
	 		 {	 
		 		get:{
    				method: "GET",
    				isArray: true,
    				cache:false,
    				params:{
    					id: "@id"
    				}		    				    	
    			}
	 	    }
	 );
 }
 ]);

outletServices.factory('OutletSearchService', ['$resource',function($resource){
	 return $resource('data/Outlets.json');
}
]);

