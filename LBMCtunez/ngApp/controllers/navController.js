app.controller("navController", ["$http", "$location", "$scope", "$rootScope", function ($http, $location, $scope, $rootScope) {

    $rootScope.homeNav = true;
    console.log($rootScope.homeNav);

}]);