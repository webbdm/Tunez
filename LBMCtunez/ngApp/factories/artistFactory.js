app.factory("ArtistFactory", function ($http, $q, $routeParams) {

    let dbGetAllArtists = () => {
            let dbData = (response) => response.data;
            let dbErr = (error) => error;
            return $http.get('/api/Artists').then(dbData).catch(dbErr);      
    };

    let dbGetArtistCatalog = () => {

        console.log('db Gets all the Artists');

    };

    return {
        dbGetAllArtists: dbGetAllArtists,
        dbGetArtistCatalog: dbGetArtistCatalog
    };

});