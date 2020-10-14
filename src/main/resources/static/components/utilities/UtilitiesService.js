var UtilitiesService = function(HttpRequestService){
    var service = function(){}

    service.prototype.listAllMakes = function(){
        return HttpRequestService.executeGetRequest("/api/utilities/getallmakes");
    }

    service.prototype.addNewMake = function(json){
        return HttpRequestService.executeJsonPostRequest("/api/utilities/insertmake",json);
    }

    service.prototype.listAllCounterParties = function(){
        return HttpRequestService.executeGetRequest("/api/utilities/getallcounterparties"); 
    }

    service.prototype.addNewCounterParty = function(json){
        return HttpRequestService.executeJsonPostRequest("/api/utilities/insertcounterparty",json);
    }

    service.prototype.listAllMaterials = function(){
        return HttpRequestService.executeGetRequest("/api/utilities/getallmaterials");
    }

    service.prototype.addNewMaterial = function(json){
        return HttpRequestService.executeJsonPostRequest("/api/utilities/insertmaterial",json);
    }

    service.prototype.listAllQuantities = function(){
        return HttpRequestService.executeGetRequest("/api/utilities/getallquantities");
    }

    service.prototype.addNewQuantity = function(json){
        return HttpRequestService.executeJsonPostRequest("/api/utilities/insertquantity",json);
    }

    return new service();
}
UtilitiesService.$inject = ["HttpRequestService"];
myapp.factory("UtilitiesService",UtilitiesService);