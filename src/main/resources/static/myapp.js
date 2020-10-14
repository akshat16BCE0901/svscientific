var myapp = angular.module("myapp",["ui.router"]);

myapp.config(function($stateProvider,$locationProvider,$urlRouterProvider){

    $stateProvider
        .state('Home',{
            url : '/home',
            template : '<h1>abc</h1>',
            controller : "HomeCtrl"
        })
        .state('Quotations',{
            url : '/quotations',
            templateUrl : '/html/quotations.html',
            controller : "QuotationController"
        })
        .state('Emails',{
            url : '/emails',
            templateUrl : '/html/emails.html',
            controller : 'EmailController'
        })
        .state('Reminders',{
            url : '/newmailform',
            templateUrl : '/html/newmailform.html',
            controller : 'NewEmailController'
        })
        .state('View Purchase Order',{
            url : '/viewallpurchaseorders',
            templateUrl : '/html/viewallpurchaseorders.html',
            controller : 'PurchaseOrderController'
        })
        .state('Add Purchase Order',{
            url : '/addnewpurchaseorder',
            templateUrl : '/html/addnewpurchaseorder.html',
            controller : 'PurchaseOrderController'
        })
        .state('Update Purchase Order',{
            url : '/updatepurchaseorder',
            templateUrl : '/html/updatepurchaseorder.html',
            controller : 'PurchaseOrderController'
        })
        .state('Add New Utility',{
            url : '/utilities',
            templateUrl : '/html/utilities.html',
            controller : 'UtilitiesController'
        })
        .state('View All Utilities',{
            url : '/viewallutilities',
            templateUrl : '/html/viewallutilities.html',
            controller : 'UtilitiesController'
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