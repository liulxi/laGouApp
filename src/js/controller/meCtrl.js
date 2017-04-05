'use strict';

// 后端交互  ajax 请求
angular.module('app').controller('meCtrl', ['$scope','$state', function($scope,$state){
	$scope.states=states;
	
	if(states!=true){
		// $scope.states=states;
		$scope.globalName=globalParam;
		$scope.pic="images/head.png";		
		$scope.exitLogin=function(){
			states=!states;
			$state.go('main');
		}		
	}

}])

