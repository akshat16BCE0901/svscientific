var PurchaseOrderService = function(HttpRequestService){

    var service = function(){};

    service.prototype.addNewPurchaseOrder = function(){
        console.log("Added New Purchase Order");
    }

    return new service();
}

PurchaseOrderService.$inject = ["HttpRequestService"];
myapp.factory('PurchaseOrderService',PurchaseOrderService);