angular.module('app',[])
  .controller('DateController', function($scope) {
    $scope.now = Date.now();
  });