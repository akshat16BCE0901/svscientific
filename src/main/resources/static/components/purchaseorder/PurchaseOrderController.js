var PurchaseOrderController = function($scope,PurchaseOrderService,UtilitiesService){
    $scope.message="working";
    $scope.numrows= 0;
    $scope.rows = ["a"];

    $scope.allMakes = [];
    $scope.allCounterParties = [];
    $scope.allMaterials = [];
    $scope.allQuantities = [];
    $scope.temporaryOrders = [];

    $scope.addRowToTempTable = function(obj){
        $scope.temporaryOrders.push(obj);
    }

    $scope.removeSelectedRows = function(){
        console.log("Function called removeSelectedRows");
        console.log("Temporary array is "+$scope.temporaryOrders);
        var newarr = [];
        $scope.temporaryOrders.forEach(function (value) {
            console.log("Value is "+value);
            if (!value.Remove) {
                newarr.push(value);
            }
        });
        console.log("New arr is "+newarr);
        $scope.temporaryOrders = newarr;
    }

    $scope.displayData = function(){
        console.log($scope.temporaryOrders);
    }
    $scope.addRow = function(){
        var objToAdd = {
            "material" : {
                "id" : $scope.materialName
            },
            "make" : {
                "id" : $scope.makeName
            },
            "numitems" : $scope.numitems,
            "quantity" : {
                "id" : $scope.quantity
            },
            "catid": $scope.catid,
            "rate" : $scope.rate,
            "per" : $scope.per,
            "disc" : $scope.disc,
            "hsncode" : $scope.hsncode,
            "gst" : $scope.gst
        };
        console.log("Entered model is ====> "+JSON.stringify(objToAdd));
        $scope.addRowToTempTable(objToAdd);
    }

    $scope.listAllMakes = function(){
        UtilitiesService.listAllMakes().then(function(httpData){
            console.log("HttpData :"+httpData.data);
            $scope.allMakes = httpData.data;
            console.log("All Makes are -- "+$scope.allMakes);
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

    $scope.listAllQuantities = function(){
        UtilitiesService.listAllQuantities().then(function(httpData){
            console.log("HttpData :"+httpData.data);
            $scope.allQuantities = httpData.data;
            console.log("All Quantities are -- "+$scope.allQuantities);
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
    this.$onInit = function () {
        $scope.listAllMakes();
        $scope.listAllMaterials();
        $scope.listAllQuantities();
        $scope.listAllCounterParties();
    }
};
PurchaseOrderController.$inject = ["$scope","PurchaseOrderService","UtilitiesService"];
myapp.controller("PurchaseOrderController",PurchaseOrderController);