(function() {
  'use strict';

  var shoppingList = [
    {name: "cookies", quantity: 10}, {name: "cokies2", quantity: 11}, {name: "cookies3", quantity: 12}
  ];




  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController);
  .controller('AlreadyBoughtController', AlreadyBoughtController);
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ShoppingListCheckOffService.$inject['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var itemAdder = this;
      itemAdder.itemName = "";
      itemAdder.itemQuantity = "";

      itemAdder.addItem = function() {
      ShoppingListCheckOffService.addItem(itemAdder.itemName, itemAdder.itemQuantity);
    };
  };

  ShoppingListCheckOffService.$inject['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService {
    var showList = this;
    showList.items = ShoppingListCheckOffService.getItems();
  };

  function ShoppingListCheckOffService() {
    var service = this;
    var items = [];

    service.addItem = function(itemName, quantity) {
      var item = {
        name = itemName,
        quantity = quantity
      };
      items.push(item);
    };

    service.getItems = function() {
      return items;
    };
  };













}) ();
