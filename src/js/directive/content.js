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


