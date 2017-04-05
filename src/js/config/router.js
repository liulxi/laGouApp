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