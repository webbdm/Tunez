app.controller("artistsController", function ($scope, $http, $timeout, ArtistFactory) {

    $scope.form = false;
    $scope.newEntry;

    // Get all artists on page/view load
    ArtistFactory.dbGetAllArtists().then((results) => {
        $scope.artists = results;
    }).catch((error) => {
        console.log('Error in dbGetAllArtists', error);
    });

    $scope.getArtistCatalog = (artistId) => {
        ArtistFactory.dbGetArtistCatalog(artistId).then((results) => {
            $scope.albums = results;
            $scope.albumCount = results.length;

            // Populate Artist with additonal artist data from Spotify API
            //ArtistFactory.dbGetArtistSpotifyData(artistName).then((results) => {
            //    console.log(results);
            //}).catch((error) => {
            //    console.log('Error getting artist Spotify data');
            //});

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


    $scope.postNewEntry = (entry) => {
        console.log('form data', entry);
        ArtistFactory.dbPostNewEntry(entry).then((message) => {
            console.log(message);
        }).catch((error) => {
            console.log('Error posting entry',error);
        });
    };

});