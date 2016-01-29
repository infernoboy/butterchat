var app = require('./app').app,
		routes = require('./routes/web'),
		userRoutes = require('./routes/web/user'),
		messageRoutes = require('./routes/web/message'),
		roomRoutes = require('./routes/web/room');

require('./routes/socket'); // for future use.

app.get('/', routes.index);

app.post('/churn', routes.join);
