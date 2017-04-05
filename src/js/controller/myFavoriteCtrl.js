'use strict';

// 后端交互  ajax 请求
angular.module('app').controller('myFavoriteCtrl', ['$scope','$state','$http', function($scope,$state,$http){
	if(states!=true){
		$http({
			method:'get',
			url:'data/myFavorite.json',
			responseType:'json'
		}).then(function(resp){
			$scope.list=resp.data;
		},function(resp){
			console.log('请求失败：'+resp.status+','+resp.statusText);
		});
		$scope.flag=true;
	}
	$scope.back=function(){
			$state.go('show');
	}

	$scope.image=false;
        $scope.img='images/star-active.png';
        $scope.chooseImg=function(){
            $scope.image=!$scope.image;
            if($scope.image){
                $scope.img='images/star-active.png';
            }else{
                $scope.img='images/star.png';
            }
        }
		

}])

