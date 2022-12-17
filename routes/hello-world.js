const express = require('express');
const router = express.Router();

/* GET hello world page. */
router.get('/', function (req, res, next) {
    res.render('hello-world', {title: 'Hello World'});
});

module.exports = router;
