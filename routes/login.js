var express = require('express');
var router = express.Router();
var utils = require('./utils/routes');

/* GET login page. */
router.get('/', function(req, res, next) {
  utils.allowUnsafe(res).render('login', { title: 'Hackfortress Admin Login' });
});

router.post('/', function(req, res, next) {
  console.log('Someone posting to login!');
});

module.exports = router;
