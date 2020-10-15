var PurchaseOrderController = function($scope,PurchaseOrderService,UtilitiesService){
    $scope.message="working";
    $scope.numrows= 0;
    $scope.rows = ["a"];

    $scope.allMakes = [];
    $scope.allCounterParties = [];
    $scope.allMaterials = [];
    $scope.allQuantities = [];

    $scope.addRows = function(){
        for(var i=0;i<$scope.numrows;i++){
            $scope.rows.push("a");
        }
        PurchaseOrderService.addNewPurchaseOrder();
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