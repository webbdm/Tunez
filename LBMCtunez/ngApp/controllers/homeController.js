app.controller("homeController", ["$http", "$rootScope","$scope", function ($http, $rootScope ,$scope) {

    $rootScope.homeNav = true;
    console.log($rootScope.homeNav);

}]);