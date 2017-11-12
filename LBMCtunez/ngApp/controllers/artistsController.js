app.controller("artistsController", function($scope, $http, $timeout, ArtistFactory) {

    let getAllArtists = () => {

        let dbArtists = ArtistFactory.dbGetAllArtists();
        dbArtists.then((data) => {
            console.log(data);
            $scope.artists = data;
        }).catch((error) =>
            console.log(error));
    };

    getAllArtists();
    
});