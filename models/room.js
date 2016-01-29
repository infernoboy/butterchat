var ref = require('../db'),
		db = ref.db,
		sequelize = ref.sequelize;

exports.Room = db.define('Room', {
	name: sequelize.TEXT
});
