const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    if(req.isAuthenticated()) {
        console.log(`router.get: ${req.body}`);
        console.log(`router.get USER: ${req.user}`);
        console.log('is authenticated?', req.isAuthenticated());
        let queryText = `SELECT * FROM "rss" WHERE person_id = $1;`;
        pool.query(queryText, [req.user.id]).then((result) => {
            res.send(result.rows);
        }).catch((error) => {
            console.log(`ERROR trying to GET /api/rss: ${error}`);
        });
    } else {
        res.sendStatus(403);
    }
});

/**
 * POST route template
 */

router.post('/', (req, res) => {
    if(req.isAuthenticated()) {
        console.log(`router.post: ${req.body}`);
        console.log(`router.post USER: ${req.user}`);
        console.log('is authenticated?', req.isAuthenticated());

        const queryText = `INSERT INTO "rss" ("url", "person_id")
                        VALUES ($1, $2) RETURNING "url";`;
        pool.query(queryText, [req.body.URL, req.user.id])
        .then((results) => { res.sendStatus(201); })
        .catch((error) => {
            console.log(`ERROR trying to POST /api/rss: ${error}`);
            res.sendStatus(500);
        })
    } else {
        res.sendStatus(403);
    }
});

module.exports = router;