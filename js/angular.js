var app = angular.module("contact", []);
app.controller("formCtrl", ['$scope', function($scope) {
	
        $scope.ph_numbr = /^\+?\d{12}$/;
        $scope.eml_add = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
}]);