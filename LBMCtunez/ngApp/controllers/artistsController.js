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
            $scope.albumCount = results.length;

            // Grab the Selected Artist's Name
            $scope.selectedArtist = results[0].ArtistName;
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