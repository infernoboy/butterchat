var models = ['message', 'room', 'user'];

for (var i = 0, len = models.length; i < len; i++) {
	Model = models[i][0].toUpperCase() + models[i].slice(1);

	exports[Model] = require('./' + models[i])[Model];
}
