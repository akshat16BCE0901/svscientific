var myapp = angular.module("myapp",["ui.router"]);

myapp.config(function($stateProvider,$locationProvider,$urlRouterProvider){

    $stateProvider
        .state('home',{
            url : '/home',
            views : {
                'home' : {
                    template : '<h1>abc</h1>',
                    controller : "HomeCtrl"
                }
            }
        })
        .state('quotations',{
            url : '/quotations',
            views : {
                'quotations' : {
                    templateUrl : 'quotations.html',
                    controller : "QuotationController"
                }
            }
        })
        .state('emails',{
            url : '/emails',
            views : {
                'emails' : {
                    templateUrl : 'emails.html',
                    controller : 'EmailController'
                    
                }
            }
        })
        .state('newmailform',{
            url : '/newmailform',
            views : {
                'newmailform' : {
                    templateUrl : 'newmailform.html',
                    controller : 'NewEmailController'
                    
                }
            }
        })
        .state('viewallpurchaseorders',{
            url : '/viewallpurchaseorders',
            views : {
                'viewallpurchaseorders' : {
                    templateUrl : 'viewallpurchaseorders.html',
                    controller : 'PurchaseOrderController'
                    
                }
            }
        })
        .state('addnewpurchaseorder',{
            url : '/addnewpurchaseorder',
            views : {
                'addnewpurchaseorder' : {
                    templateUrl : 'addnewpurchaseorder.html',
                    controller : 'PurchaseOrderController'
                    
                }
            }
        })
        .state('updatepurchaseorder',{
            url : '/updatepurchaseorder',
            views : {
                'updatepurchaseorder' : {
                    templateUrl : 'updatepurchaseorder.html',
                    controller : 'PurchaseOrderController'
                    
                }
            }
        })
        .state('utilities',{
            url : '/utilities',
            views : {
                'utilities' : {
                    templateUrl : 'utilities.html',
                    controller : 'UtilitiesController'
                    
                }
            }
        })
        .state('viewallutilities',{
            url : '/viewallutilities',
            views : {
                'viewallutilities' : {
                    templateUrl : 'viewallutilities.html',
                    controller : 'UtilitiesController'

                }
            }
        });
        
    $urlRouterProvider.otherwise("/home");
});

myapp.controller("QuotationController",function($scope){
    $scope.message="ABC message";
});

myapp.controller("HomeCtrl",function(){});
myapp.controller("EmailController",function(){});
myapp.controller("NewEmailController",function(){});
myapp.controller("QuotationController",function(){});