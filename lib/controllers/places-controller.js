module.exports = function(app) {
    
    app.get("/places/get", function(request, response) {
        
        var placesProvider = require('lib/services/places-provider.js')();
        
        placesProvider.get().then(function(places) {
            response.json(places);
        });
    });
    
    app.post("/places/like", function(request, response) {
        console.log(request.body);
    });
}