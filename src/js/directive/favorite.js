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