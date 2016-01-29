var ref = require('../db'), // think of "ref" as the "exports" variable contained within "db.js"
		db = ref.db, // this is like saying "exports.db". you wouldn't call it "exports", though, 'cause that's built-in to node.
		sequelize = ref.sequelize;

// allows the Message variable to be used from other files.
exports.Message = db.define('Message', { // define columns
	message: sequelize.TEXT, // a column with the TEXT type for long messages.
	className: { // define a column as an object to pass in options.
		type: sequelize.STRING, 
		defaultValue: '' // default to nothing!#E@!#$
	},
	nickname: sequelize.STRING,
	created: sequelize.BIGINT
}, { // pass in options to db.define
	timestamps: false // by default, sequelize creates a "created_at" and "updated_at" column. this prevents that. it's useless.
});
