const express = require('express');
const router = express.Router();
router.get('/catalogue', (req, res) => {
    res.render('./pages/catalogue');
});
module.exports = router;