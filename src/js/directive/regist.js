'user strict';

angular.module('app').directive('appRegistpage', [function () {
	return {
		restrict: 'A',
		
		replace:true, //只能有一个根元素
		templateUrl: 'view/template/registPage.html'
	};
}]);
//