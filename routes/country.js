var express = require('express');
var router = express.Router();
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'land.json');

router.post("/", (req, res) => {
    fs.readFile("land.json", (err, data) => {

        if (err) {
            console.log(err);
            res.status(400).json({success: false});
            return;
        }

        const country = JSON.parse(data);
        country.push(req.body);

        fs.writeFile("land.json", JSON.stringify(country, null, 2), (err) => {
            if (err) {
                console.log(err);
            }
        });
        res.status(200).json({success: true});
    });
});

router.get("/", (req, res, next) => {
    fs.readFile('land.json', (err, data) => {

        if (err) {
            console.log(err);
            res.status(400).json({success: false});
            return;
        }
        res.send(data);
    });
});



module.exports = router;