var express = require('express');
var router = express.Router();

// Get Page model
var Page = require('../models/page');

/*
 * GET pages index
 */
router.get('/', isAdmin, function (req, res) {
    Page.find({}).sort({sorting: 1}).exec(function (err, pages) {
        res.render('admin/pages', {
            pages: pages
        });
    });
});


// Exports
module.exports = router;