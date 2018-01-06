var express = require('express');
var burgers = require('../models/burgers.js');

var router = express.Router();

router.get("/", function(req, res) {
    burgers.selectAll(function(data) {
        res.render("index", { burgers: data });
    });
});

router.post("/", function(req, res) {
    burgers.insertOne(["burger_name"], [req.body.burger_name], function(data) {
        res.json({ id: data.insertId });
    });
});

router.put("/", function(req, res) {
    burgers.updateOne({ devoured: true }, { id: req.body.id }, function(data) {
        if (data.changedRows === 0) {
            res.status(404).end();
        } else {
            res.status(200).end();
        }
    })
})

module.exports = router;