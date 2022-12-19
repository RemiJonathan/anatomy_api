const express = require('express');
const router = express.Router();
const fs = require('fs');

/*GET anatomy JSON Object*/
router.get('/', function (req, res, next) {
    //Use fs to read the file and return the JSON object
    fs.readFile('./data/structures.json', 'utf8', function (err, data) {
        if (err) {
            console.log(err);
        }
        res.send(JSON.parse(data));
    });
});

module.exports = router;
