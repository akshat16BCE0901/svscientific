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

myapp.controller("QuotationController",function($scope){
    var quotations = [
        {
            "id" : 1,
            "quotId" : "SV01102020",
            "ctrptyname" : "Daurala Organics",
            "materialName" : "Beaker",
            "quantity" : 500,
            "unitOfMeasurement" : "Units",
            "entryDate" : "01-10-2020",
            "followUpDate" : "04-10-2020",
            "completed" : "Yes"
        },
        {
            "id" : 2,
            "quotId" : "SV02102020",
            "ctrptyname" : "ABC trading Co.",
            "materialName" : "Pottasium sulphate",
            "quantity" : 500,
            "unitOfMeasurement" : "Litres",
            "entryDate" : "02-10-2020",
            "followUpDate" : "05-10-2020",
            "completed" : "No"
        },
        {
            "id" : 3,
            "quotId" : "SV03102020",
            "ctrptyname" : "Daurala Organics",
            "materialName" : "Iodine",
            "quantity" : 500,
            "unitOfMeasurement" : "Kilograms",
            "entryDate" : "03-10-2020",
            "followUpDate" : "07-10-2020",
            "completed" : "Yes"
        }
    ];
    $scope.quotations = quotations;
});