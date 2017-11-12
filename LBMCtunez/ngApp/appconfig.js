app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider
        .when("/",
        {
            templateUrl: "/ngApp/Views/home.html",
            controller: "homeController"
        })
        .when("/jamz",
        {
            templateUrl: "/ngApp/Views/artists.html",
            controller: "artistsController"
        });
}]);


app.run(["$rootScope", "$http", "$location", function ($rootScope, $http, $location) {


}]);