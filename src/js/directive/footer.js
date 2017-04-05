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



