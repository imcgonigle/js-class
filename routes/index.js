var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { page: 'Home' });
});

router.get('/students', function(req, res, next) {
  res.render('students', { page: 'Students' });
});

module.exports = router;
