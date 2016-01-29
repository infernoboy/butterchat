var express = require('express'),
		session = require('express-session'),
		logger = require('express-logger'),
		bodyParser = require('body-parser'),
		cookieParser = require('cookie-parser'),
		errorHandler = require('errorhandler'),
		http = require('http'),
		path = require('path'),
		db = require('./db').db,
		app = express(),
		less = require('less-middleware'),
		socket = require('socket.io'),
		socketHandshake = require('socket.io-handshake'),
		socketRedis = require('socket.io-redis'),
		SessionRedisStore = require('connect-redis')(session);

var sessionStore = new SessionRedisStore({
	host: '127.0.0.1',
	db: 1
});

var crossOrigin = function(req, res, next) {
	if (req.headers.origin && req._parsedUrl.pathname === '/api/init') {
		res.header('Access-Control-Allow-Credentials', 'true');
		res.header('Access-Control-Allow-Origin', req.headers.origin);
		res.header('Access-Control-Allow-Methods', 'GET');
	}
	return next();
};

var noCache = function(req, res, next) {
	res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
	return next();
};

var env = app.get('env');

app.set('port', 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

if (env === 'development') {
	app.use(logger({
		path: path.join(__dirname, 'logs/dev.log')
	}));
}

if (env === 'production') {
	app.use(logger({
		path: path.join(__dirname, 'logs/production.log')
	}));
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cookieParser('butterchatGOOOOO@#$$@!!!WEEEEMORGAN'));

if (env === 'development') {
	app.use(noCache);
}

app.use(crossOrigin);

app.use(less(__dirname + '/public', {
	force: true
}));

if (env === 'development') {
	app.use(express["static"](path.join(__dirname, 'public')));
	app.use(errorHandler());
}

if (env === 'production') {
	app.use(express["static"](path.join(__dirname, 'public'), {
		maxAge: 3000000
	}));
}

var httpServer = http.createServer(app);

httpServer.listen(app.get('port'), '0.0.0.0', function() {
	return console.log("Express server listening on port " + app.get('port'));
});

var io = socket.listen(httpServer);

io.adapter(socketRedis({
	host: 'localhost'
}));

io.use(socketHandshake({
	key: 'butterchat',
	store: sessionStore,
	parser: cookieParser('butterchatGOOOOO@#$$@!!!WEEEEMORGAN')
}));

io.use(function(socket, next) {
	var data = socket.request;

	if (!data.headers.cookie) {
		return next(new Error('no cookies'));
	}

	data.cookie = cookie.parse(data.headers.cookie);

	if (!data.cookie.butterchat) {
		return next(new Error('session init error: cooking missing'));
	}

	data.sessionID = data.cookie.butterchat.split('.')[0].slice(2);

	return sessionStore.get(data.sessionID, function(err, session) {
		if (err || !session) {
			return next(new Error(err));
		}

		return next();
	});
});

exports.io = io;
exports.app = app;

require('./models');
require('./urls');
