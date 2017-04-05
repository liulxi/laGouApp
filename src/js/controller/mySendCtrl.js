'use strict';

// 后端交互  ajax 请求
angular.module('app').controller('mySendCtrl', ['$scope','$state', '$http','$filter',function($scope,$state,$http,$filter){
	if(states!=true){
		$scope.states=states;
		$http({
				method:'get',
				url:'data/myPost.json',
				responseType:'json'
			}).then(function(resp){
				$scope.list=resp.data;
			},function(resp){
				console.log('请求失败：'+resp.status+','+resp.statusText);
			});
		
		$scope.back=function(){
			history.back();
		}
		$scope.flag1=true;
		$scope.flag2=false;
		$scope.flag3=false;
		
		$scope.show1=function(){
			$scope.flag1=true;
			$scope.flag2=false;
			$scope.flag3=false;
			$http({
				method:'get',
				url:'data/myPost.json',
				responseType:'json'
			}).then(function(resp){
				$scope.list=resp.data;
			},function(resp){
				console.log('请求失败：'+resp.status+','+resp.statusText);
			});
		
			
		}
		$scope.show2=function(){
			$scope.flag1=false;
			$scope.flag2=true;
			$scope.flag3=false;
			$http({
				method:'get',
				url:'data/myPost.json',
				responseType:'json'
			}).then(function(resp){
			
				$scope.list=resp.data;
				var result=[];
				angular.forEach($scope.list,function(data,index,arr){
					// console.log(data.state);
					// console.log(arr[index]);
					if(data.state*1===1){
						result.push(arr[index]);
					}
				});
				$scope.it=result;
		
			},function(resp){
				console.log('请求失败：'+resp.status+','+resp.statusText);
			});
		
		}
		$scope.show3=function(){
			$scope.flag1=false;
			$scope.flag2=false;
			$scope.flag3=true;
			$http({
				method:'get',
				url:'data/myPost.json',
				responseType:'json'
			}).then(function(resp){
			
				$scope.list=resp.data;
				var result=[];
				angular.forEach($scope.list,function(data,index,arr){
					if(data.state*1===-1){
						result.push(arr[index]);
					}
				});
				$scope.it=result;
		
			},function(resp){
				console.log('请求失败：'+resp.status+','+resp.statusText);
			});
		}
	}
	

}])

