var PurchaseOrderController = function($scope,PurchaseOrderService,UtilitiesService){
    $scope.message="working";
    $scope.numrows= 0;
    $scope.rows = ["a"];
    $scope.addRows = function(){
        for(var i=0;i<$scope.numrows;i++){
            $scope.rows.push();
        }
    }
};
PurchaseOrderController.$inject = ["$scope","PurchaseOrderService","UtilitiesService"];
myapp.controller("PurchaseOrderController",purchaseOrder);