var ref = require('../db'),
		db = ref.db,
		sequelize = ref.sequelize;

exports.Message = db.define('Message', {
	message: sequelize.TEXT,
	className: {
		type: sequelize.STRING,
		defaultValue: ''
	},
	nickname: sequelize.STRING,
	created: sequelize.BIGINT
}, {
	timestamps: false
});
