angular.module('app',[])
  .filter("smiley",function(){
	  return function(text){
		  return '\u263A ' + text + ' \u263A';
	  }
  })
  .filter('localize', function(locales, $locale) {
    return function(key) {
      var locale = locales[$locale.id] || locales['en-us'];
      return locale[key];
    }
	})	
  .controller('ItemsController', function($scope, items,filterFilter,currencyFilter,$locale) {
	$scope.items=items;
	$scope.redItems   = filterFilter(items, {color: 'red'});
	$scope.priceItems   = filterFilter(items, {price: 2.75});
	
	console.log($locale.id);
  });