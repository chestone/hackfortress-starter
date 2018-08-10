const express = require('express');
const router = express.Router();
const utils = require('./utils/routes');

/* GET home page. */
router.get('/', function(req, res, next) {
  utils.allowUnsafe(res).render('pages/index', { title: 'Hackfortress Puzzle Starter' });
});

module.exports = router;
