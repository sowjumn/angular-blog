(function() {
  var app = angular.module('personal', []);

  app.factory('RestaurantData', function() {

    var firstDataSet = {name: 'Spices-2', visitors: '400', ratings: '4'};
    var secondDataSet = [{name: 'Spices-2', visitors: '400', ratings: '4'}, 
      {name: 'BurmaSuperStar', visitors: '1000', ratings: '5'},
      {name: 'kitchenStory', visitors: '3000', ratings: '5.5'}      
    ]
    return firstDataSet;
  });

  app.controller('NameController', ['$scope', 'RestaurantData', function($scope, RestaurantData) {
    $scope.restaurantInfo = RestaurantData;
  }]); 


  app.controller('VisitorController', ['$scope', 'RestaurantData', function($scope, RestaurantData) {
    $scope.visitors = RestaurantData.visitors;
  }]); 

  app.directive('NameList', function() {
    return {
      restrict: 'E',
      templateUrl: 'name-list.html'
    }
  });
}) (); 