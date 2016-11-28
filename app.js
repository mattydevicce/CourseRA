(function() {
'use strict';

angular.module('NameCalculator', [])

.controller('NameCalculatorController', function($scope) {

	$scope.name = '';
	$scope.totalValue = 0;
	var alphabet = 'abcdefghijkmnopqrstuvwxyz';
	$scope.displayNumeric = function() {
		var total = 0;
		for (var i=0; i < $scope.name.length; i++) {
			total += alphabet.indexOf($scope.name[i].toLowerCase()) + 1;	
		}
		$scope.totalValue = total;
	}

});

})();