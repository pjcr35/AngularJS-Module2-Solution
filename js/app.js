(function() {

    angular.
    module('ShoppingListCheckOff', []).
    controller("ToBuyShoppingController", ToBuyShoppingController).
    controller("AlreadyBoughtShoppingController", AlreadyBoughtShoppingController).
    service("ShoppingListCheckOffService", ShoppingListCheckOffService);

    ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];

    function ToBuyShoppingController(ShoppingListCheckOffService) {
        var toBuy = this;

        toBuy.items = ShoppingListCheckOffService.getItemsToBuy();
        toBuy.message = "Everything is bought!";
        toBuy.buy = function(item) {
            ShoppingListCheckOffService.buyItem(item);
        };
    }

    AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];

    function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
        var alreadyBought = this;

        alreadyBought.items = ShoppingListCheckOffService.getItemsBought();
        alreadyBought.message = "Nothing bought yet";
    }

    function ShoppingListCheckOffService() {
        var service = this;

        var CATALOG = [{
            name: 'Ferrari',
            quantity: 5
        }, {
            name: 'Chocolate Ice Creams',
            quantity: 10
        }, {
            name: 'Apples',
            quantity: 100
        }, {
            name: 'Chairs',
            quantity: 25
        }, {
            name: 'Candies',
            quantity: 1500
        }];

        var itemsToBuy = CATALOG;
        var itemsBought = [];

        service.getItemsToBuy = function() {
            return itemsToBuy;
        };

        service.getItemsBought = function() {
            return itemsBought;
        };

        service.buyItem = function(item) {
            var index = itemsToBuy.indexOf(item);
            if (index !== -1) {
                itemsToBuy.splice(index, 1);
                itemsBought.push(item);
            }
        };
    }

})();
