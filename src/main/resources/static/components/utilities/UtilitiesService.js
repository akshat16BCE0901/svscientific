var UtilitiesService = function(HttpRequestService){
    var service = function(){}

    service.prototype.listAllMakes = function(){
        return HttpRequestService.executeGetRequest("http://localhost:8080/api/utilities/getallmakes");
    }

    service.prototype.addNewMake = function(json){
        return HttpRequestService.executeJsonPostRequest("http://localhost:8080/api/utilities/insertmake",json);
    }

    service.prototype.listAllCounterParties = function(){
        return HttpRequestService.executeGetRequest("http://localhost:8080/api/utilities/getallcounterparties"); 
    }

    service.prototype.addNewCounterParty = function(json){
        return HttpRequestService.executeJsonPostRequest("http://localhost:8080/api/utilities/insertcounterparty",json);
    }

    service.prototype.listAllMaterials = function(){
        return HttpRequestService.executeGetRequest("http://localhost:8080/api/utilities/getallmaterials");
    }

    service.prototype.addNewMaterial = function(json){
        return HttpRequestService.executeJsonPostRequest("http://localhost:8080/api/utilities/insertmaterial",json);
    }

    service.prototype.listAllQuantities = function(){
        return HttpRequestService.executeGetRequest("http://localhost:8080/api/utilities/getallquantities");
    }

    service.prototype.addNewQuantity = function(json){
        return HttpRequestService.executeJsonPostRequest("http://localhost:8080/api/utilities/insertquantity",json);
    }

    return new service();
}
UtilitiesService.$inject = ["HttpRequestService"];
myapp.factory("UtilitiesService",UtilitiesService);