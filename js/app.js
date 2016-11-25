var app = angular.module('choreApp',[]);

app.run(function($rootScope){
	$rootScope.word = 'app loading';
	console.log($rootScope.word);
});

app.controller("ChoreCtrl",['$scope',function($scope){
	$scope.logChore = function(arg){
	alert(arg + " is done");
	};
}]);

app.directive('kid',function(){
	return{
		restrict:'E',
		scope: {
			done: "&"
		},
		template: '<input type="text" ng-model="chore">'+
			'{{ chore }}'+
			'<div ng-click="done({chore: chore})">Im done</div><br>'
	};
});