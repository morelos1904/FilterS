angular.module('app',[])
  .controller('ItemsController', function($scope, items) {
    $scope.items = items;
  });