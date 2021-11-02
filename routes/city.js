var express = require('express');
var router = express.Router();
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'city.json');

router.get("/", (req, res, next) => {
    fs.readFile('stad.json', (err, data) => {

        if (err) {
            console.log(err);
            res.status(400).json({success: false});
            return;
        }
        res.send(data);
    });
});

module.exports = router;