var express = require('express');
var app = express();

var inventoryRoute = require('./api/route/inventoryRoute');

app.use(function(req,res,next){
    res.setHeader("Access-Control-Allow-Origin" , "*");
    res.setHeader("Access-Control-Allow-Methods", "POST,PUT,GET,DELETE");
    res.setHeader("Access-Control-Allow-Headers" , "X-Requested-with-content-type");
    res.setHeader("Access-Control-Allow-Credentials" , true);

    next();
});
app.use(express.json());
app.use('/api/inventory' ,inventoryRoute);

module.exports = app;