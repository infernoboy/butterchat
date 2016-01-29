var model = require('./load');

model.Message.belongsTo(model.Room);
model.Message.belongsTo(model.User);

model.Room.hasMany(model.Message);
model.Room.hasMany(model.User);

model.User.belongsTo(model.Room);
model.User.hasMany(model.Message);
