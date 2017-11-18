var app=angular
               .module("myModule",[])
			   .filter("gender",function(){
				   return function(gender){
					   switch(gender){
					   case 1:
					   return "Male";
					   case 2:
                       return "Female";
					   
                       case 3:
					   return "Not Disclosed";					   
				   }
				   }
			   })
               .controller("myController",function($scope){
				   var employees=[
				   
				   {name:"Ben",dateOfBirth:new Date("November 23,1980"),gender:1,salary:100000.00},
				   {name:"Chetan",dateOfBirth:new Date("January 16,1997"),gender:2,salary:300000.00},
				   {name:"Akash",dateOfBirth:new Date("February 23,1986"),gender:1,salary:200000.00},
				   {name:"Mohan",dateOfBirth:new Date("February 23,1985"),gender:2,salary:500000.00},
				   {name:"Deepak",dateOfBirth:new Date("February 23,1987"),gender:3,salary:300000.00},
				   {name:"Sohan",dateOfBirth:new Date("February 23,1989"),gender:1,salary:600000.00},
				   {name:"Rohan",dateOfBirth:new Date("February 23,1990"),gender:2,salary:700000.00}
				   
				   
				  
				  
				  ];
				   	$scope.employees=employees;		   
				   	
			   });