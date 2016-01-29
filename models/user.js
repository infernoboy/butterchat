var ref = require('../db'),
    db = ref.db,
    sequelize = ref.sequelize;

exports.User = db.define('User', {
  active: sequelize.BOOLEAN, // true/false if the user is actively in a room.
  last_seen: sequelize.BIGINT,
  nickname: {
    type: sequelize.STRING,
    validate: {
      len: [3, 20]
    }
  },
  session_id: sequelize.STRING, // for socket.io
  ip: {
    type: sequelize.STRING,
    validate: { // a built-in sequelize feature to validate INSERTs and UPDATEs
      isIP: true // this is part of the validate object. it means that the data being passed to the "ip" column must be an IP address.
    }
  }
}, {
  timestamps: false
});
