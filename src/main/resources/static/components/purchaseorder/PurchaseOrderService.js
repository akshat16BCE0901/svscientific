var PurchaseOrderService = function(HttpRequestService){

    var service = function(){};

    service.prototype.addNewPurchaseOrder = function(){

    }

    return new service();
}

PurchaseOrderService.$inject = ["HttpRequestService"];
myapp.factory('PurchaseOrderService',PurchaseOrderService);