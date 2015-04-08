require('rootpath')();      // Little helper to make node.js require relative to your project root
require('lib/linq.js')();   // Another little helper to add linq with yield


var express = require('express');

var app = express();

app.use(express.static('www'));
//app.use(require('express-promise')());

// CORS (Cross-Origin Resource Sharing) headers to support Cross-site HTTP requests
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

// TODO :  Just add anything in the controllers folder
require('lib/controllers/places-controller.js')(app);

// TODO : Load all the moongose stuff (MongoDb)
require('lib/storages/mongo/mongodb-initializer.js')();

app.set('port', (process.env.PORT || 8000));

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});