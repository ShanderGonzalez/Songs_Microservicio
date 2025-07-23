const express = require('express');
const router = express.Router();
const controller = require('../../../interfaces/song.controller');
const validate = require('../middlewares/validateSong');

router.get('/', controller.getAll);
router.post('/', validate, controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.remove);

module.exports = router;
