var app=angular
               .module("myModule",[])
               .controller("myController",function($scope,stringService){
				$scope.change=function(input){
					
					$scope.output=stringService.processString(input);
				}	   
				   
			   });