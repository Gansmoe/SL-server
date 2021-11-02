var express = require('express');
var router = express.Router();
const fs = require('fs');

router.get("/", (req, res, next) => {
    fs.readFile('../land.json', (err, data) => {

        if (err) {
            console.log(err);
            res.status(400).json({success: false});
            return;
        }
        res.send(data);
    });
});



module.exports = router;