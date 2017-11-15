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

    let dbGetArtistSpotifyData = (artistName) => {
        let dbData = (response) => response.data;
        let dbErr = (error) => error;
        console.log(`Query Spotify for ${artistName}`);
        //return $http.get(`/api/Artists/${artistId}`).then(dbData).catch(dbErr);
    };

    let dbPostNewEntry = (entry) => {
        console.log('dbPost', entry);
        let dbData = (response) => response.data;
        let dbErr = (error) => error;
        return $http.post('/api/Artists',entry).then(dbData).catch(dbErr);
    };

    return {
        dbGetAllArtists: dbGetAllArtists,
        dbGetArtistCatalog: dbGetArtistCatalog,
        dbPostNewEntry: dbPostNewEntry,
        dbGetArtistSpotifyData: dbGetArtistSpotifyData
    };

});