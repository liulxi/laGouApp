'use strict';

angular.module('app',['ui.router','ngCookies']);
var globalParam={};
var states=true;
'use strict';

angular.module('app').config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
	$stateProvider
		.state('main',{
		url:'/main',
		// params:{'paramsObj':null},
		templateUrl:'view/main.html',
		controller:'mainCtrl',
	}).state('search',{
		url:'/search',
		templateUrl:'view/search.html',
		controller:'searchCtrl',
	}).state('me',{
		url:'/me',
		templateUrl:'view/me.html',
		controller:'meCtrl',
	}).state('show',{
		url:'/show/:id',
		templateUrl:'view/show.html',
		controller:'showCtrl',
	}).state('company',{
		url:'/company/:id',
		templateUrl:'view/company.html',
		controller:'companyCtrl',
	}).state('login',{
		url:'/login',
		templateUrl:'view/login.html',
		controller:'loginCtrl',
	}).state('regist',{
		url:'/regist',
		templateUrl:'view/regist.html',
		controller:'registCtrl',
	}).state('mySend',{
		url:'/mySend',
		templateUrl:'view/mySend.html',
		controller:'mySendCtrl'
	}).state('myFavorite',{
		url:'/myFavorite',
		templateUrl:'view/myFavorite.html',
		controller:'myFavoriteCtrl'
		});
	$urlRouterProvider.otherwise('main');

}]);
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

'user strict';
angular.module('app').directive('appPositionList', [function () {
	return {
		restrict: 'A',
		replace:true, 
		templateUrl: 'view/template/content.html'
	};
}]);
//
angular.module('app').directive('appPositionList1', [function () {
	return {
		restrict: 'A',
		replace:true, 
		templateUrl: 'view/template/content1.html'
	};
}]);
//
angular.module('app').directive('appPositionList2', [function () {
	return {
		restrict: 'A',
		replace:true, 
		templateUrl: 'view/template/content2.html'
	};
}]);
angular.module('app').directive('appNav', [function () {
	return {
		restrict: 'A',
		replace:true, 
		templateUrl: 'view/template/nav.html'
	};
}]);
angular.module('app').directive('appSelect', [function () {
	return {
		restrict: 'A',
		replace:true, 
		templateUrl: 'view/select.html'
	};
}]);
angular.module('app').directive('appLogin', [function () {
	return {
		restrict: 'A',
		replace:true, 
		templateUrl: 'view/template/goLogin.html'
	};
}]);



'user strict';
angular.module('app').directive('favoriteHead', [function () {
	return {
		restrict: 'A',
		replace:true, 
		templateUrl: 'view/template/favoriteHead.html'
	};
}]).directive('favoriteContent', [function () {
	return {
		restrict: 'A',
		replace:true, 
		templateUrl: 'view/template/favorite.html'
	};
}]);
'user strict';

angular.module('app').directive('appFooter', [function () {
	return {
		restrict: 'A',
		replace:true, //只能有一个根元素
		templateUrl: 'view/template/footer.html'
	};
}]);
//
angular.module('app').directive('appFooter1', [function () {
	return {
		restrict: 'A',
		replace:true, //只能有一个根元素
		templateUrl: 'view/template/footer1.html'
	};
}]);




'user strict';

angular.module('app').directive('appHead', [function () {
	return {
		restrict: 'A',
		replace:true, //只能有一个根元素
		templateUrl: 'view/template/head.html'
	};
}]);
//
angular.module('app').directive('appHead1', [function () {
	return {
		restrict: 'A',
		replace:true, //只能有一个根元素
		templateUrl: 'view/template/head1.html'
	};
}]);
//
angular.module('app').directive('appHead2', [function () {
	return {
		restrict: 'A',
		replace:true, //只能有一个根元素
		templateUrl: 'view/template/head2.html'
	};
}]);

//
angular.module('app').directive('appHeadSearch', [function () {
	return {
		restrict: 'A',
		replace:true, //只能有一个根元素
		templateUrl: 'view/template/head-search.html'
	};
}]);
'user strict';

angular.module('app').directive('appLoginpage', [function () {
	return {
		restrict: 'A',
		replace:true, //只能有一个根元素
		templateUrl: 'view/template/loginPage.html'
	};
}]);
//
'user strict';

angular.module('app').directive('appRegistpage', [function () {
	return {
		restrict: 'A',
		
		replace:true, //只能有一个根元素
		templateUrl: 'view/template/registPage.html'
	};
}]);
//
'user strict';
angular.module('app').directive('sendHead', [function () {
	return {
		restrict: 'A',
		replace:true, 
		templateUrl: 'view/template/sendHead.html'
	};
}]).directive('sendContent', [function () {
	return {
		restrict: 'A',
		replace:true, 
		templateUrl: 'view/template/send.html'
	};
}]);