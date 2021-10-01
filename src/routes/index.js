const express = require('express');
const { ResultWithContext } = require('express-validator/src/chain');
const router = express.Router();
router.get('/', (req, res) => {
    res.render('./pages/index', {
        title: 'TiendaGo',
        Style: 'styles.css',
        links: 'https://fonts.googleapis.com',
        links2: 'https://fonts.gstatic.com',
        links3: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700;800&display=swap',
        crossorigin: 'crossorigin',
    });
})
module.exports = router;