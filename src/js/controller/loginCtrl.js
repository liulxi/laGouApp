'use strict';

// 后端交互  ajax 请求
angular.module('app').controller('loginCtrl', ['$scope', '$http', '$state', '$cookieStore', function($scope, $http, $state, $cookieStore) {
    //获取注册的cookie值  
    var getCookie = $cookieStore.get('user');
    $scope.flag1 = false;
    $scope.flag2 = false;

    $scope.checkPhone = function() {
        $scope.spanCheckPwd = '密码错误';
        if ($scope.id === getCookie.id) {
            $scope.spanCheckPhone = '';
        } else {
            $scope.flag1 = !$scope.flag1;
            $scope.spanCheckPhone = '用户名不存在';

        }
    }
    $scope.loginSubmit = function() {

        if ($scope.pwd !== getCookie.pwd) {
            $scope.spanCheckPwd = '密码错误';
            $scope.flag2 = !$scope.flag2;
            $scope.pwd = '';
        } else {
            $http({
                method: 'get',
                url: 'data/login.json',
                responseType: 'json'
            }).then(function(resp) {
                globalParam = resp.data;
                states=!states;
                $state.go('main');

            }, function(resp) {
                console.log('请求失败：' + resp.status + ',' + resp.statusText);
            });
        }
    }

}])
