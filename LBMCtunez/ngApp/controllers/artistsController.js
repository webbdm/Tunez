app.controller("artistsController", function($scope, $http, $timeout, ArtistFactory) {

    ArtistFactory.dbGetAllArtists().then((results) => {
        $scope.artists = results;
    }).catch((error) => {
        console.log('Error in dbGetAllArtists', error);
    });

    $scope.getArtistCatalog = (artistId) => {
        ArtistFactory.dbGetArtistCatalog(artistId).then((results) => {
            $scope.albums = results;
            console.log($scope.albums);
        }).catch((error) => {
            console.log('Error in dbGetArtistCatalog', error);
        });
    };

});