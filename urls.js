var app = require('./app').app,
		routes = require('./routes/web');

require('./routes/socket');

app.get('/', routes.index);
