var http = require('http');
var app = require('./app');
var connect = require('./api/util/dbConnect');
var port = process.env.PORT || 6969;

var server = http.createServer(app);
connect();
server.listen(port);
console.log("Listening at port: "+port);