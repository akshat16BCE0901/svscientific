var PurchaseOrderService = function(HttpRequestService){

    var service = function(){};

    service.prototype.addNewPurchaseOrder = function(json){
        return HttpRequestService.executeJsonPostRequest("/api/purchaseorder/savepurchaseorder",json);
    }

    service.prototype.addNewOrder = function (json) {
        return HttpRequestService.executeJsonPostRequest("/api/purchaseorder/saveorder",json);
    }


    return new service();
}

PurchaseOrderService.$inject = ["HttpRequestService"];
myapp.factory('PurchaseOrderService',PurchaseOrderService);