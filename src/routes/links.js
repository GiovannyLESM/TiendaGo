const express = require('express');
const router = express.Router();
const pool = require('../database');
router.get('/catalogue', (req, res) => {
    res.render('./pages/catalogue', {
        title: 'Catálogos',
        Style: 'normalize_cata.css',
        Style2: 'skeleton_cata.css',
        Style3: 'style_cata.css',
    });
});
module.exports = router;