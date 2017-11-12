app.factory("ArtistFactory", function ($http, $q, $routeParams) {

    let dbGetAllArtists = () => {

        return $q((resolve, reject) => {
            $http.get('/api/Artists').then((dbArtists) => {
                //console.log(dbArtists.data);
                resolve(dbArtists.data)
            })
            .catch((error) => {
                reject(error);
            })
        })

    };

    return {
        dbGetAllArtists: dbGetAllArtists
    };

});