var express = require('express');
var router = express.Router();

router.get ('/', (req, res, next) => {
    var html = " ";
    html += "<body>";
    html += "<img src='https://freefrontend.com/assets/img/html-funny-404-pages/HTML-Yeti-404-Page.gif'>";
    html += "</body>";
    res.send(html);

});

module.exports = router;