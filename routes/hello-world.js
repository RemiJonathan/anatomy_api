const express = require('express');
const router = express.Router();

/* GET hello world page. */
router.get('/', function (req, res, next) {
    res.json({message: 'Hello World!'});
});

module.exports = router;
