const express = require('express');
const { ResultWithContext } = require('express-validator/src/chain');
const router = express.Router();
router.get('/', (req, res) => {
    res.render('./pages/index');
})
module.exports = router;