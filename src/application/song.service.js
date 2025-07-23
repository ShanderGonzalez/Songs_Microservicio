const Song = require('../infrastructure/database/song.model');

exports.getAll = async () => await Song.find().lean();
exports.create = async (data) => await Song.create(data);
exports.update = async (id, data) => await Song.findByIdAndUpdate(id, data, { new: true });
exports.remove = async (id) => await Song.findByIdAndDelete(id);
