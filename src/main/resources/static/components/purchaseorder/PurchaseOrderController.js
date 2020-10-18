var PurchaseOrderController = function($scope,PurchaseOrderService,UtilitiesService){
    var jq = $.noConflict();
    $scope.message="working";
    $scope.numrows= 0;
    $scope.rows = ["a"];
    var datenow = new Date();
    $scope.entrydate = datenow;

    $scope.allMakes = [];
    $scope.allCounterParties = [];
    $scope.allMaterials = [];
    $scope.allQuantities = [];
    $scope.temporaryOrders = [];
    $scope.allPurchaseOrders = [];
    $scope.allPOsWithMaterialsList = [];

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
        if($scope.purchaseorderid===undefined || $scope.purchaseorderid ==""){
            window.alert("Purchase order ID cannot be empty");
        }
        else{
            $scope.temporaryOrders.forEach(function(order){
                order.purchaseorderid = $scope.purchaseorderid;
            });
            console.log($scope.temporaryOrders);

            $scope.temporaryOrders.forEach(function(order){
                PurchaseOrderService.addNewOrder(order)
                    .then(function(response){
                        console.log(response.data);
                    }).catch(function(error){
                    console.log("Error is --"+error);
                });
            });

            var POObject = {
                "purchaseorderid" : $scope.purchaseorderid,
                "counterparty" : {
                    "id" : $scope.counterpartyname
                }
            };
            PurchaseOrderService.addNewPurchaseOrder(POObject)
                .then(function(response){
                    console.log(response.data);
                }).catch(function(error) {
                console.log("Error is --" + error);
            });
        }
    }
    $scope.addRow = function(){
        var objToAdd = {
            "purchaseorderid" : $scope.purchaseorderid,
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

    $scope.listAllOrders = function(){
        PurchaseOrderService.listAllOrders().then(function(httpData){
            console.log("HttpData :"+httpData.data);
            $scope.allOrders = httpData.data;
            console.log("All Orders are -- "+$scope.allMaterials);
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

    $scope.populateAllPOs = function(){
        PurchaseOrderService.listAllPurchaseOrders().then(function(httpData){
            console.log("HttpData :"+httpData.data);
            $scope.allPurchaseOrders = httpData.data;
            console.log("All Purchase orders are -- "+$scope.allPurchaseOrders);
            $scope.allPurchaseOrders.forEach(function (purchaseOrder) {
                var obj = purchaseOrder;
                obj.allOrders = null;
                console.log(purchaseOrder);
                PurchaseOrderService.listAllOrdersByPOID(purchaseOrder.purchaseorderid).then(function(orders){
                    console.log("HttpData :"+orders.data);
                    console.log(orders.data);
                    obj.allOrders = orders.data;
                }).catch(function(error){
                    console.log("Error is --"+error);
                });
                $scope.allPOsWithMaterialsList.push(obj);
            });
            console.log($scope.allPOsWithMaterialsList);
        }).catch(function(error){
            console.log("Error is --"+error);
        });
    }
    this.$onInit = async function () {
        await $scope.listAllMakes();
        await $scope.listAllMaterials();
        await $scope.listAllQuantities();
        await $scope.listAllCounterParties();
        await $scope.populateAllPOs();
    }
};
PurchaseOrderController.$inject = ["$scope","PurchaseOrderService","UtilitiesService"];
myapp.controller("PurchaseOrderController",PurchaseOrderController);