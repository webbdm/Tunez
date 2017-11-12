app.controller("artistsController", function($scope, $http, $timeout, ArtistFactory) {

    //console.log(ArtistFactory.dbGetAllArtists);

    let getAllArtists = () => {
        ArtistFactory.dbGetAllArtists().then((results) => {

            $scope.artists = results;
            console.log($scope.artists);
            
            
            $timeout(function () {
                $scope.$apply(() => {
                    $scope.artists = results;
                    console.log($scope.artists);
                })
                
            },1000);

        }).catch((error) => {
            console.log("Error in getAllArtists", error);
        });
    };

    getAllArtists();
    
});