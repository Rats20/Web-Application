var express = require('express');
var app = express();
var cors = require('cors');

//Parse incoming request bodies in a middleware before your handlers, 
//available under the req.body property.
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
    extended : true
}));

app.use(bodyParser.json())

//Importing router.js
var router = require('./router');

const port = process.env.PORT || 8080;

//app.use() is intended for binding middleware to your application.
//By specifying '/' as a "mount" path, app.use() will respond to any path that starts with '/'
//cors to enable Cross-Origin Resource Sharing.
app.use(cors());

//app.get(), on the other hand, is part of Express' application routing and is 
//intended for matching and handling a specific route when requested with the GET HTTP verb:
app.get(function(req, res, next){
    /*var yes = {name : 'Rats',
                Likes : 'Art'};
    res.send(yes);
    console.log(yes);*/
    console.log('Got');
    next();
});

app.use('/', router);

app.listen(port,(err)=>{
    if(err) throw err;
    console.log("Server listening on port: "+port);
});