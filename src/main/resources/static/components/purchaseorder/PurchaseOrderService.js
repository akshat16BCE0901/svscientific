var PurchaseOrderService = function(HttpRequestService){

    var service = function(){};

    service.prototype.addNewPurchaseOrder = function(json){
        return HttpRequestService.executeJsonPostRequest("/api/purchaseorder/savepurchaseorder",json);
    }

    service.prototype.addNewOrder = function (json) {
        return HttpRequestService.executeJsonPostRequest("/api/purchaseorder/saveorder",json);
    }

    service.prototype.listAllOrders = function(){
        return HttpRequestService.executeGetRequest("/api/purchaseorder/getallorders");
    }
    service.prototype.listAllPurchaseOrders = function(){
        return HttpRequestService.executeGetRequest("/api/purchaseorder/getallpurchaseorders");
    }

    service.prototype.listAllOrdersByPOID = function(POId){
        return HttpRequestService.executeGetRequest("/api/purchaseorder/getallordersbypoid?purchaseorderid="+POId);
    }


    return new service();
}

PurchaseOrderService.$inject = ["HttpRequestService"];
myapp.factory('PurchaseOrderService',PurchaseOrderService);