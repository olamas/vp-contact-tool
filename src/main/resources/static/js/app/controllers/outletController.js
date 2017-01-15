'use strict';

outletControllers.controller('OutletSearchCtrl', ['$scope', 'Outlet','OutletSearchService', '$stateParams', '$state',
	   function($scope, Outlet,OutletSearchService,$stateParams,$state) {
		function fail(errorObj){
			$scope.loading = false;
			if(errorObj.status == "404"){
				$scope.errorMsg = "Outlet not found in Database";
			}else {
				if(errorObj.config.method == 'DELETE' && errorObj.data.contains('ConstraintViolationException')){
					$scope.errorMsg = "Cannot delete item. Please make sure it is not in use in other section";
				} else {
					$scope.errorMsg = "Something went wrong :(    Error: " + errorObj.status;
				}	
			} 
		}

		$scope.header="Outlet Search"
		$scope.searchLabel = "Outlet";
	    $scope.searchBody = "../partials/rootCause-search-body.html";
	    	    
	    $scope.loading = true;
		$scope.editing = false;
		$scope.errorMsg=null;		
		$scope.successMsg = null;
		$scope.items =[];
				
		$scope.items=OutletSearchService.query( function(data){
			$scope.loading = false;
			$scope.items = data;
			if(null == data){
				$scope.errorMsg = "There are no Outlets ";
			}
		}, fail);	
		
		$scope.search = function(){			 
			$scope.loading = true;
			$scope.editing = false;
			$scope.errorMsg=null;		
			$scope.successMsg = null;
			$scope.contacts =[];
			$scope.searchCode = $scope.selectedOutlet.id;
			$scope.searchOutlet = $scope.selectedOutlet.name;
			Outlet.get({id: $scope.searchCode}, function(data){
				$scope.loading = false;
				$scope.contacts = data;
				if(null == data){
					$scope.errorMsg = "There are no results for name " + $scope.searchCode;
				}
			}, fail);
	    };
	    
	    if($stateParams.outletId){
			$scope.search($stateParams.outletId);
		}
	}
	]);