var path = require('path');
var express = require('express');
var config = require('./config');
var routes = require('./routes');

var app = express.createServer();

app.configure(function() {
    var viewsRoot = path.join(_dirname, 'views');
    app.set('views engine', 'html');
    app.set('views', viewsRoot);
    app.register('.html', require('ejs'));
    //app.use(express.bodyParser({}));
    app.use(express.cookieParser());
    app.use(express.session({
        secret: config.sessionSecret
    }));
  });
  
  app.helpers({
      config: config
  });
  
  routes(app);
  
  app.listen(config.port);
  
  var staticDir = path.join(_dirname, 'public');
  app.configure('development', function() {
      app.use(express.static(staticDir));
      app.usr(express.errorHandler({
          dumpExceptions: true,
          showStack: true
      }));
  });
  
  console.log(config.host + ':' + config.port);
  module.exports = app;
