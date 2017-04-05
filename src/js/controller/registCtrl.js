'use strict';

angular.module('app').controller('registCtrl', ['$scope', '$state', '$cookieStore', function($scope, $state, $cookieStore) {
    //返回登录界面
    $scope.backLogin = function() {
        history.back();
    }
    $scope.compPhone = function(obj) {
        return obj.id == $scope.id;
    }
    $scope.compPwd = function(obj) {
            return obj.pwd == $scope.pwd;
        }

     $scope.flag1=false;
     $scope.flag2=false;
     $scope.flag3=false;
        //验证电话
    $scope.doCheckPhone = function() {
        if (!/^[a-zA-Z_][a-zA-Z0-9_]{2,16}$/.test($scope.id)) {
            $scope.spanPhone = "用户名id不正确";
            return;
        }else{
        	 $scope.spanPhone = " ";
        	  $scope.flag1=true;
        }
    }
    $scope.doCheckPwd = function() {
        if (!/^\d{6,10}$/i.test($scope.pwd)) {
            $scope.spanPhone = "密码不正确";
            return;
        }else{
        	$scope.spanPhone = " ";
        	 $scope.flag2=true;
        }
    }
 
    //获取验证码
    $scope.str="发送短信";
    $scope.getNum=function(){
		var str="";
			for(var i=1;i<=4;i++){
				var n=Math.floor(Math.random()*62);
				if(n<10){
					str+=n;
				}else if(n<36){
					str+=String.fromCharCode(n+55);
				}else{
					str+=String.fromCharCode(n+61);
				}
			}
			$scope.str=str;
			return str;
	}
	//验证验证码
	$scope.doCheckNum=function(){
		if($scope.str===$scope.sed){
			$scope.spanSed='';
			 $scope.flag3=true;
		}else{
			$scope.str=" ";
			$scope.str="发送短信";
			$scope.spanSed='验证码不正确';
		}
	}
	//提交注册
	$scope.registSubmit=function(){
		if( $scope.flag1 &&  $scope.flag2 && $scope.flag3){
			var time = new Date().getTime() + 5000;
			$cookieStore.put('user', { id: $scope.id, pwd: $scope.pwd }, {
                expires: new Date(new Date().getTime() + 5000)
            });
			$state.go('login');
		}
	}



















}])
