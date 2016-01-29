var model = require('./load');

model.Message.belongsTo(model.Room); // this would generate the column "room_id" in the Message table.
model.Message.belongsTo(model.User); // this would generate the column "user_id" in the Message table.

model.Room.hasMany(model.Message); // this doesn't generate any columns. 
model.Room.hasMany(model.User); // no columns.

model.User.belongsTo(model.Room); // generates "room_id" in User
model.User.hasMany(model.Message); // no columns.
