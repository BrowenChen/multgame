
/**
 * Module dependencies.
 */
// See http://package.json.nodejitsu.com/

var express = require('express'),
	routes = require('./routes'),
	path = require('path'),
	sass = require('node-sass')
	
	port = process.argv[2] || 3456;

var app = express();

// App configuration for ALL environments:
app.configure(function(){
	app.set('title', "My App");
	app.set('views', __dirname + '/views');
	app.set('view engine', 'jade');
	app.use(express.favicon());
	app.use(express.logger('dev'));		// global logging
	app.use(express.bodyParser());		// extracts request variables nicely
	app.use(express.methodOverride());	// Faux HTTP method support (put,delete)
	app.use(express.cookieParser('long random string'));	// -> req.cookies
	app.use(express.session());			// Session support
	app.use(app.router);

	// SASS templating. debug: false, to turn off read/render etc logging
	app.use(sass.middleware({src: __dirname + '/public', debug: true}));

	// Static file server:
	app.use(express.static(path.join(__dirname, 'public')));
});

// Development env (default) config:
app.configure('development', function(){
	app.use(express.errorHandler({
		dumpExceptions: true,
		showStack: true
	}));
});

app.get('/', routes.index);

app.listen(port, function(){
	console.log("Express server listening on port " + port);
});
