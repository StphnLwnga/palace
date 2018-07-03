var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/pricing', function(req, res, next) {
	res.render('pricing', { title: 'Pricing' })
})

router.get('/directions', function(req, res, next) {
	res.render('directions', { title: 'Directions' })
})

router.get('/consultancy', function(req, res, next) {
	res.render('consultancy', { title: 'Consultancy' })
})

module.exports = router;
