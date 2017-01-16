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
				$scope.currentPage = 0;
				$scope.itemsPerPage = 3;
				$scope.gap = 3;
				$scope.groupToPages();
				if(null == data){
					$scope.errorMsg = "There are no results for outlet id: " + $scope.searchCode;
				}
			}, fail);
	    };
     	
	    $scope.groupToPages = function () {
	        $scope.pagedContacts = [];	        
	        for (var i = 0; i < $scope.contacts.length; i++) {
	            if (i % $scope.itemsPerPage === 0) {
	                $scope.pagedContacts[Math.floor(i / $scope.itemsPerPage)] = [ $scope.contacts[i] ];
	            } else {
	                $scope.pagedContacts[Math.floor(i / $scope.itemsPerPage)].push($scope.contacts[i]);
	            }
	        }
	    };
	    	    
	    $scope.range = function (size,start, end) {
	        var ret = [];
	           if (size < end) {
	            end = size;
	            if(size<$scope.gap){
	                 start = 0;
	            }else{
	                 start = size-$scope.gap;
	            }
	        }
	        for (var i = start; i < end; i++) {
	            ret.push(i);
	        }
	        return ret;
	    };
	    
	    $scope.prevPage = function () {
	        if ($scope.currentPage > 0) {
	            $scope.currentPage--;
	        }
	    };
	    
	    $scope.nextPage = function () {
	        if ($scope.currentPage < $scope.pagedContacts.length - 1) {
	            $scope.currentPage++;
	        }
	    };
	    
	    $scope.setPage = function () {
	        $scope.currentPage = this.n;
	    };
	}
	]);