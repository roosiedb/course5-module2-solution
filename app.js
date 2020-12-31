(function() {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.userInput = "";
    $scope.countItems = 0;
    $scope.message = "Please enter data first";

    $scope.keyUp = function() {
      var totalItems = countItems($scope.userInput);
      $scope.countItems = totalItems;
    };

    $scope.setMessage = function() {
      $scope.message = setMessage($scope.countItems);
    }
  };

  function countItems(string) {
    var itemsArray = string.split(',');
    var tmpCount = 0;
    for (var i=0; i<itemsArray.length; i++) {
      if (itemsArray[i].trim().length>0) {
        tmpCount++;
      }
    }
    return tmpCount;
  }

  function setMessage(countItems) {
    var tmpMessage = "Please enter data first";
    if (countItems > 0 & countItems <= 3) {
      tmpMessage = "Enjoy!";
    };
    if (countItems > 3) {
      tmpMessage = "Too much!";
    };
    return tmpMessage;
  }

}) ();
