var PurchaseOrderController = function($scope,PurchaseOrderService,UtilitiesService){
    $scope.message="working";
    $scope.numrows= 0;
    $scope.rows = ["a"];

    $scope.allMakes = [];
    $scope.allCounterParties = [];
    $scope.allMaterials = [];
    $scope.allQuantities = [];
    $scope.temporaryOrders = [{
        "material" : {
            "id" : 2
        },
        "make" : {
            "id" : 1
        },
        "numitems" : 5,
        "quantity" : {
            "id" : 4
        },
        "catid": "CAT",
        "rate" : 15.4,
        "per" : "EACH",
        "disc" : "18%",
        "hsncode" : "SAMPLEHSN",
        "gst" : "18%"
    }];

    $scope.addRowToTempTable = function(obj){
        $scope.temporaryOrders.push(obj);
    }

    $scope.addRows = function(){
        for(var i=0;i<$scope.numrows;i++){
            $scope.rows.push("a");
        }
        PurchaseOrderService.addNewPurchaseOrder();
    }

    $scope.removeSelectedRows = function(){
        console.log("Function called removeSelectedRows");
        var newarr = [];
        angular.forEach($scope.temporaryOrders, function (value) {
            console.log("Value is "+value);
            if (!value.Remove) {
                newarr.push(value);
            }
        });
        console.log("New arr is "+newarr);
        $scope.temporaryOrders = newarr;
    }

    $scope = displayData = function(){
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

        // PurchaseOrderService.addNewOrder(objToAdd)
        //     .then(function(response){
        //         console.log(response.data);
        //         console.log(JSON.stringify(objToAdd)+" added successfully");
        //     }).catch(function(error){
        //     console.log("Error is --"+error);
        // });
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