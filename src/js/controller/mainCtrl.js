'use strict';

// 后端交互  ajax 请求
angular.module('app').controller('mainCtrl', ['$scope','$http','$state','$stateParams', function($scope,$http,$state,$stateParams){
	$scope.states=states;
	$http({
		method:'get',
		url:'data/positionList.json',
		responseType:'json'
	}).then(function(resp){
		$scope.list=resp.data;
	},function(resp){
		console.log('请求失败：'+resp.status+','+resp.statusText);
	});
	//跳转到登录界面
	$scope.toLogin=function(){
		$state.go('login');
	}
	// console.log(states);
	// console.log(JSON.parse($state.params.paramsObj));
	if(states!=true){
		$scope.states=states;
		$scope.tologinspan=globalParam;
		
	}


	

}])

