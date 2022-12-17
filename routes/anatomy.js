const express = require('express');
const router = express.Router();

/*GET anatomy JSON Object*/
router.get('/', function (req, res, next) {
    //TODO: Use fs to read the file and return the JSON object
    res.json({
        anatomy: {
            structures: [
                {name: 'General anatomy'},
                {name: 'Bones'},
                {name: 'Joints'},
                {name: 'Muscles'},
                {name: 'Alimentary system'},
                {name: 'Respiratory system'},
                {name: 'Thoracic cavity'},
                {name: 'Urinary system'},
                {name: 'Genital systems'},
                {name: 'Abdominopelvic cavity'},
                {name: 'Endocrine glands'},
                {name: 'Cardiovascular system'},
                {name: 'Lymphoid system'},
                {name: 'Nervous system'},
                {name: 'Sense organs'},
                {name: 'The integument'}

            ]
        }
    });
});

module.exports = router;
