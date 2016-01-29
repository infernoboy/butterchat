var Sequelize = require('sequelize');

exports.db = new Sequelize('butterchat', 'butterchat', 'ButteryPasswordGoesHeref', {
	dialect: 'postgres',
	maxConcurrentQueries: 200,
	host: undefined,
	port: 5432,
	"native": true,
	sync: {
		force: false
	},
	define: {
		underscored: true
	},
	dialectOptions: {
		supportBigNumbers: true
	}
});

exports.sequelize = Sequelize;
