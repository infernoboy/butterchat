var Sequelize = require('sequelize');

exports.db = new Sequelize('butterchat', 'butterchat', 'ButteryPasswordGoesHere', {
	dialect: 'postgres',
	logging: console.log,
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
