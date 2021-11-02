var express = require('express');
var router = express.Router();
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'city.json');

router.post("/", (req, res) => {
    fs.readFile("stad.json", (err, data) => {

        if (err) {
            console.log(err);
            res.status(400).json({success: false});
            return;
        }

        const city = JSON.parse(data);
        city.push(req.body);

        fs.writeFile("land.json", JSON.stringify(city, null, 2), (err) => {
            if (err) {
                console.log(err);
            }
        });
        res.status(200).json({success: true});
    });
});

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