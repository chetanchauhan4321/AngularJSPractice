
var app=angular
               .module("myModule",[])
               .controller("myController",function($scope,$location,$anchorScroll){
				 $scope.scrollTo= function(scrollLocation){
					 $location.hash(scrollLocation);
					 $anchorScroll.yOffset=-20;
					 $anchorScroll();
				 }
				 
			   });