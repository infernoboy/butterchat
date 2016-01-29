var ref = require('../db'),
    db = ref.db,
    sequelize = ref.sequelize;

exports.User = db.define('User', {
  active: sequelize.BOOLEAN,
  last_seen: sequelize.BIGINT,
  nickname: {
    type: sequelize.STRING,
    validate: {
      len: [3, 20]
    }
  },
  session_id: sequelize.STRING,
  ip: {
    type: sequelize.STRING,
    validate: {
      isIP: true
    }
  }
}, {
  timestamps: false
});
