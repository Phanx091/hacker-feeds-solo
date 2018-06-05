const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    if(req.isAuthenticated()) {
        console.log('The user is authenticated');
        let queryText = `SELECT * FROM "rss";`;
        pool.query(queryText).then(result => {
            res.send(result.rows);
        }).catch(error => {
            console.log(`ERROR trying to GET /api/feed: ${error}`);
        });
    } else {
        res.sendStatus(403);
    }
});

/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;