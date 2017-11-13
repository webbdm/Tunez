app.factory("ArtistFactory", function ($http, $q, $routeParams) {

    let dbGetAllArtists = () => {
        let dbData = (response) => response.data;
        let dbErr = (error) => error;
        return $http.get('/api/Artists').then(dbData).catch(dbErr);      
    };

    let dbGetArtistCatalog = (artistId) => {
        let dbData = (response) => response.data;
        let dbErr = (error) => error;
        return $http.get(`/api/Artists/${artistId}`).then(dbData).catch(dbErr);
    };

    return {
        dbGetAllArtists: dbGetAllArtists,
        dbGetArtistCatalog: dbGetArtistCatalog
    };

});