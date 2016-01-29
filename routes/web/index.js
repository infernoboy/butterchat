exports.index = function(req, res) {
	res.render('index');
};

exports.join = function(req, res) {
	var room_id = req.body.room_id,
			nickname = req.body.nickname;

	res.send(room_id + ' ' + nickname); // just send this back for debugging. nvm
};
