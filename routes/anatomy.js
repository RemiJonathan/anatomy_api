const express = require('express');
const router = express.Router();

/*GET anatomy JSON Object*/
router.get('/', function (req, res, next) {
    //TODO: Use fs to read the file and return the JSON object
    res.json({
        anatomy: [
            'General anatomy',
            'Bones',
            'Joints',
            'Muscles',
            'Alimentary system',
            'Respiratory system',
            'Thoracic cavity',
            'Urinary system',
            'Genital systems',
            'Abdominopelvic cavity',
            'Endocrine glands',
            'Cardiovascular system',
            'Lymphoid system',
            'Nervous system',
            'Sense organs',
            'The integument'

        ]
    });
});

module.exports = router;
