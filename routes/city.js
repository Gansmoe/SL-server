var express = require('express');
var router = express.Router();
const fs = require('fs');

app.get("/", (req, res) => {
    fs.readFile('./data/city.json', (err, data) => {

        if (err) {
            console.log(err);
            res.status(400).json({success: false});
            return;
        }
        res.send(data);
    });
});

module.exports = router;