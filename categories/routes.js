var express = require('express');
var router = express.Router();
var categoryController = require('./controller');

router.get('/', categoryController.getAll);

router.get('/:id', categoryController.getCategory);

router.post('/', categoryController.create);

router.put('/:id', categoryController.update);

router.delete('/:id', categoryController.delete);

module.exports = router;