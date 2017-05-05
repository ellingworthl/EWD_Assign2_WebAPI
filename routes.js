var express = require('express');

var app = express(); 
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/FAF'); 

require('./config/express').addMiddleware(app)
require('./routes')(app)

app.listen(3000, function() {
  console.log('Express server listening on 3000.');
});