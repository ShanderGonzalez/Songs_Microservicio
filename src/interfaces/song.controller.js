const service = require('../application/song.service');

exports.getAll = async (req, res, next) => {
  try {
    const songs = await service.getAll();
    res.json(songs);
  } catch (err) {
    next(err);
  }
};

exports.create = async (req, res, next) => {
  try {
    const song = await service.create(req.body);
    res.status(201).json(song);
  } catch (err) {
    next(err);
  }
};

exports.update = async (req, res, next) => {
  try {
    const song = await service.update(req.params.id, req.body);
    res.json(song);
  } catch (err) {
    next(err);
  }
};

exports.remove = async (req, res, next) => {
  try {
    await service.remove(req.params.id);
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};
