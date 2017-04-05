'use strict';

angular.module('app').controller('showCtrl', ['$scope', '$http', '$state', function($scope, $http, $state) {
     $scope.tospan='去登录';
    $http({
        method: 'get',
        url: 'data/position.json?' + $state.params.id,
        responseType: 'json'
    }).then(function(resp) {
        $scope.list = resp.data;
        // console.log(resp.data);
    }, function(resp) {
        console.log('请求失败：' + resp.status + ',' + resp.statusText);
    });

    $http({
        method: 'get',
        url: 'data/company.json?' + $state.params.id,
        responseType: 'json'
    }).then(function(resp) {
        $scope.company = resp.data;
        // console.log(resp.data);
    }, function(resp) {
        console.log('请求失败：' + resp.status + ',' + resp.statusText);
    });
    //返回上一页
    $scope.back=function(){
        history.back();
    }
    $scope.sender=function(){
         $state.go('login');
  
    }

    console.log(states);
    if(states!=true){
        $scope.states=states;
        $scope.image=false;
        $scope.img='images/star.png';
        $scope.chooseImg=function(){
            $scope.image=!$scope.image;
            if($scope.image){
                $scope.img='images/star-active.png';
                setTimeout(function(){
                    $state.go('myFavorite');
                }, 1000);
               
            }else{
                $scope.img='images/star.png';
            }
        }
        $scope.tospan='投个简历';
        $scope.sender=function(){
            $scope.image=!$scope.image;
            if($scope.image){
                 $scope.tospan='已投递';
                 setTimeout(function(){
                     $state.go('mySend');
                }, 1000)
            }else{
                 $scope.tospan='投个简历'; 
              }
        }
        
    }
  

}])
