app.controller("artistsController", function ($scope, $http, $timeout, $rootScope, ArtistFactory) {

    $scope.form = false;
    $scope.newEntry;
    $rootScope.homeNav = false;
    console.log($rootScope.homeNav);

    // Get all artists on page/view load
    let getArtists = () => {
        ArtistFactory.dbGetAllArtists().then((results) => {
            $scope.artists = results;

            console.log(results);

            // Set an inital artist
            $scope.selectedArtist = results[0];
            $scope.getArtistCatalog(results[0].ArtistID);
        }).catch((error) => {
            console.log('Error in dbGetAllArtists', error);
        });
    };

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

        }).catch((error) => {
            console.log('Error in dbGetArtistCatalog', error);
        });
    };

    $scope.toggleForm = () => {
        $scope.form = !$scope.form;
    };

    $scope.falseForm = () => {
        $scope.form = false;
    };


    $scope.postNewEntry = (entry) => {
        ArtistFactory.dbPostNewEntry(entry).then((message) => {
            getArtists();
        }).catch((error) => {
            console.log('Error posting entry',error);
        });
    };

    getArtists();

});