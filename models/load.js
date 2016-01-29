var models = ['Message', 'Room', 'User'];

// pre-define the .length for better performance.
for (var i = 0, len = models.length; i < len; i++) {
	exports[models[i]] = require('./' + models[i].toLowerCase())[models[i]];
}
