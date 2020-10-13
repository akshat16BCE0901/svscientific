HttpRequestService = function($http,$q){

    var service = function(){};

    service.prototype.executeGetRequest = function(url){
        var defferred = $q.defer();
        console.log("GET request is "+url);
        $http.get(url).then(function successCallBack(response){
            defferred.resolve(response);
        }).then(function errorCallBack(response){
            defferred.reject(response);
        });
        return defferred.promise;
    }

    service.prototype.executePostRequest = function(url,params){
        var deferred = $q.defer();
        console.log("POST request is"+url);
        $http.post(url,params,{
            headers: { 
                "content-type": "application/x-www-form-urlencoded"
            }
        }).then(function successCallBack(response){
            deferred.resolve(response);
        }).then(function errorCallBack(response){
            deferred.reject(response);
        });
        return deferred.promise;
    }

    service.prototype.executeJsonPostRequest = function(url,json){
        var deferred = $q.defer();
        console.log("JSON POST request is"+url);
        var config = {
            headers: {
                "Content-type" : "application/json"
            }
        };
        $http.post(url,json,config).then(function successCallBack(response){
            deferred.resolve(response);
        }).then(function errorCallBack(response){
            deferred.reject(response);
        });
        return deferred.promise;
    }

    return new service();
}
HttpRequestService.$inject = ["$http","$q"];
angular.module("myapp").factory("HttpRequestService",HttpRequestService);