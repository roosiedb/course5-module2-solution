(function() {
  'use strict';

  var initialShoppingList = [
    {
      name: "oranges",
      quantity: "4"
    },
    {
      name: "bananas",
      quantity: "3"
    },
    {
      name: "apples",
      quantity: "2"
    },
    {
      name: "milk",
      quantity: "5"
    },
    {
      name: "cookies",
      quantity: "3" 
    }
  ];

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var toBuyList = this;

    toBuyList.items = ShoppingListCheckOffService.getItemsToBuy();

    toBuyList.btnBought = function(itemIndex) {
      ShoppingListCheckOffService.addItemToAlreadyBought(itemIndex);
      ShoppingListCheckOffService.removeItemFromToBuy(itemIndex);
    };
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var boughtList = this;

    boughtList.items = ShoppingListCheckOffService.getItemsBought();
  }

  function ShoppingListCheckOffService() {
    var service = this;

    var itemsToBuy = initialShoppingList;
    var itemsBought = [];

    service.getItemsToBuy = function() {
      return itemsToBuy;
    };

    service.getItemsBought = function() {
      return itemsBought;
    };

    service.addItemToAlreadyBought = function(itemIndex) {
      itemsBought.push(itemsToBuy[itemIndex]);
    };

    service.removeItemFromToBuy = function(itemIndex) {
      itemsToBuy.splice(itemIndex, 1);
    };
  };
}) ();
