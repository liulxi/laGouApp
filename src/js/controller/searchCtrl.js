'use strict';

// 后端交互  ajax 请求
angular.module('app').controller('searchCtrl', ['$scope', '$http', function($scope, $http) {
    $http({
        method: 'get',
        url: 'data/positionList.json',
        responseType: 'json'
    }).then(function(resp) {
        $scope.list = resp.data;
    }, function(resp) {
        console.log('请求失败：' + resp.status + ',' + resp.statusText);
    });
//给城市、薪水、公司规模绑定click事件
    $scope.flag = false;
    $scope.flag1 = false;
    $scope.flag2 = false;
    $scope.select = function(e) {
        $scope.city = [];//清空数据
        //发送请求获取数据
        $http({
            method: 'get',
            url: 'data/city.json',
            responseType: 'json'
        }).then(function(resp) {
            $scope.city = resp.data;
            // console.log($scope.city);
        }, function(resp) {
            console.log('请求失败：' + resp.status + ',' + resp.statusText);
        });
        $scope.flag = !$scope.flag;
    }

    $scope.select1 = function(e) {
        $scope.salary = [];
        $http({
            method: 'get',
            url: 'data/salary.json',
            responseType: 'json'
        }).then(function(resp) {
            $scope.salary = resp.data;
        }, function(resp) {
            console.log('请求失败：' + resp.status + ',' + resp.statusText);
        });
        $scope.flag1 = !$scope.flag1;
    }

    $scope.select2 = function(e) {
        $scope.scale = [];
        $http({
            method: 'get',
            url: 'data/scale.json',
            responseType: 'json'
        }).then(function(resp) {
            $scope.scale = resp.data;
        }, function(resp) {
            console.log('请求失败：' + resp.status + ',' + resp.statusText);
        });
        $scope.flag2 = !$scope.flag2;
    }
















    $scope.calc = function(e) {
        // history.back();
        $scope.flag = false;
        $scope.flag1 = false;
        $scope.flag2 = false;
    }

}])
