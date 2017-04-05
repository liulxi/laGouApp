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