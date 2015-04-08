module.exports = function(app) {
    
    app.get("/places/get", function(requests, response) {
        
        var placesProvider = require('lib/services/places-provider.js')();
        
        placesProvider.get().then(function(places) {
            response.json(places);
        });
    });
    
}