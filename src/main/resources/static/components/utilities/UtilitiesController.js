var utilities = function($scope,UtilitiesService){
    $scope.message="working";
    $scope.content = ["Akshat"];
    $scope.allMakes = [];
    $scope.allCounterParties = [];
    $scope.allMaterials = [];
    $scope.allQuantities = [];
    $scope.makeName ="";
    $scope.materialName ="";
    $scope.quantityName="";
    $scope.abbreviation = "";
    $scope.counterpartyName = "";
    $scope.counterpartyEmail = "";
    var jq = $.noConflict();

    $scope.listAllMakes = function(){
        UtilitiesService.listAllMakes().then(function(httpData){
            console.log("HttpData :"+httpData.data);
            $scope.allMakes = httpData.data;
            console.log("All Makes are -- "+$scope.allMakes);
        }).catch(function(error){
            console.log("Error is --"+error);
        });
        
    }

    $scope.addNewMake = function(){
        var makeName = $scope.makeName;
        var jsonRequest = {
            "name": makeName
        }
        console.log(jsonRequest);
        UtilitiesService.addNewMake(jsonRequest)
        .then(function(response){
            console.log(response.data);
        }).catch(function(error){
            console.log("Error is --"+error);
        });
    }

    $scope.listAllMaterials = function(){
        UtilitiesService.listAllMaterials().then(function(httpData){
            console.log("HttpData :"+httpData.data);
            $scope.allMaterials = httpData.data;
            console.log("All Materials are -- "+$scope.allMaterials);
        }).catch(function(error){
            console.log("Error is --"+error);
        });
        
    }

    $scope.addNewMaterial = function(){
        var materialName = $scope.materialName;
        var jsonRequest = {
            "name": materialName
        }
        console.log(jsonRequest);
        UtilitiesService.addNewMaterial(jsonRequest)
        .then(function(response){
            console.log(response.data);
        }).catch(function(error){
            console.log("Error is --"+error);
        });
    }

    $scope.listAllQuantities = function(){
        UtilitiesService.listAllQuantities().then(function(httpData){
            console.log("HttpData :"+httpData.data);
            $scope.allQuantities = httpData.data;
            console.log("All Quantities are -- "+$scope.allQuantities);
        }).catch(function(error){
            console.log("Error is --"+error);
        });
        
    }

    $scope.addNewQuantity = function(){
        var quantityName = $scope.quantityName;
        var abbreviation = $scope.abbreviation;
        var jsonRequest = {
            "name": quantityName,
            "abbreviation": abbreviation
        }
        console.log(jsonRequest);
        UtilitiesService.addNewQuantity(jsonRequest)
        .then(function(response){
            console.log(response.data);
        }).catch(function(error){
            console.log("Error is --"+error);
        });
    }

    $scope.listAllCounterParties = function(){
        UtilitiesService.listAllCounterParties().then(function(httpData){
            console.log("HttpData :"+httpData.data);
            $scope.allCounterParties = httpData.data;
            console.log("All Counterparties are -- "+$scope.allCounterParties);
        }).catch(function(error){
            console.log("Error is --"+error);
        });
        
    }

    $scope.addNewCounterParty = function(){
        var counterpartyName = $scope.counterpartyName;
        var counterpartyEmail = $scope.counterpartyEmail;
        var jsonRequest = {
            "name": counterpartyName,
            "email": counterpartyEmail
        }
        console.log(jsonRequest);
        UtilitiesService.addNewCounterParty(jsonRequest)
        .then(function(response){
            console.log(response.data);
        }).catch(function(error){
            console.log("Error is --"+error);
        });
    }

    $scope.initial = function(){
        jq('.datatable-class').DataTable();
    }

    $scope.listAllMakes();
    $scope.listAllMaterials();
    $scope.listAllQuantities();
    $scope.listAllCounterParties();
    $scope.initial();

};
utilities.$inject = ["$scope","UtilitiesService"];
myapp.controller("UtilitiesController",utilities);