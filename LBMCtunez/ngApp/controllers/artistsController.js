app.controller("artistsController", function($scope, $http, $timeout, ArtistFactory) {

    $scope.form = false;
    $scope.newEntry;

    ArtistFactory.dbGetAllArtists().then((results) => {
        $scope.artists = results;
    }).catch((error) => {
        console.log('Error in dbGetAllArtists', error);
    });

    $scope.getArtistCatalog = (artistId) => {
        ArtistFactory.dbGetArtistCatalog(artistId).then((results) => {
            $scope.albums = results;
        }).catch((error) => {
            console.log('Error in dbGetArtistCatalog', error);
        });
    };

    $scope.toggleForm = () => {
        $scope.form = !$scope.form;
        console.log($scope.form);
    };


    $scope.submitNewEntry = (submittedEntry) => {
        console.log('form data', submittedEntry);
    };

});