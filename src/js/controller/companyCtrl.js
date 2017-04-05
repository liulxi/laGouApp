'use strict';

angular.module('app').controller('companyCtrl', ['$scope', '$http', '$state', function($scope, $http, $state) {
    $http({
        method: 'get',
        url: 'data/company.json?' + $state.params.id,
        responseType: 'json'
    }).then(function(resp) {
        $scope.company = resp.data;
        console.log(resp.data);
    }, function(resp) {
        console.log('请求失败：' + resp.status + ',' + resp.statusText);
    });
     //切换
    $scope.name = 'IOS前段工程师';
    $scope.time = '2016-04-16 23:30';
    $scope.salary = '15k-25k';
    $scope.flag=true;
    $scope.showMess=function(item){
        console.log(item);
        console.log(item.positionList[0].name);
        $scope.name = item.positionList[0].name;
        $scope.time = item.positionList[0].createdDate;
        $scope.salary = item.positionList[0].salary;
        $scope.flag = !$scope.flag;
    }
    
    // 返回上一页
     $scope.back=function(){
        history.back();
    }

}])
