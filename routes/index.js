var express = require('express');
var router = express.Router();
var utils = require('./utils/routes');

/* GET home page. */
router.get('/', function(req, res, next) {
  utils.allowUnsafe(res).render('pages/index', { title: 'Hackfortress Puzzle Starter' });
});

module.exports = router;
