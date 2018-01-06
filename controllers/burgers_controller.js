var express = require('express');
var burgers = require('../models/burgers.js');

var router = express.Router();

router.get("/", function(req, res) {
    burgers.selectAll(function(data) {
        res.render("index", { burgers: data });
    });
});

module.exports = router;