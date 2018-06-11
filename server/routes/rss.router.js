const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// ROUTER.get
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
}); // end of router.get
// ROUTER.post
router.post('/', (req, res) => {
    if(req.isAuthenticated()) {
        console.log(`router.post: ${req.body}`);
        console.log(`router.post USER: ${req.user}`);
        console.log('is authenticated?', req.isAuthenticated());
        const url_id = req.body.url
        const queryText = `INSERT INTO "rss" ("url", "person_id")
                        VALUES ($1, $2) RETURNING "url";`;
        pool.query(queryText, [url_id, req.user.id])
        .then((results) => { res.sendStatus(201); 
        console.log('router.post: successful', results);
        })
        .catch((error) => {
            console.log(`ERROR trying to POST /api/rss: ${error}`);
            res.sendStatus(500);
        })
    } else {
        res.sendStatus(403);
    }
});// end of router.post
// ROUTER.delete
router.delete("/:id", (req, res) => {
    // if(req.isAuthenticated()) {
        console.log(`router.delete: ${req.params.id}`);
        const delete_rss = req.params.id;
        const queryText = 'DELETE FROM "rss" WHERE "id" = $1;';
        pool
        .query(queryText, [delete_rss])
        .then(response => {
            res.sendStatus(200);
            console.log(
            `DELETE successful on router.delete api/rss: ${response}`
            );
        })
        .catch(error => {
            console.log(`ERROR on router.delete api/rss: ${error}`);
            res.sendStatus(500);
        })
    // } else {
    //     res.sendStatus(403);
    // }
  }); // end of router.delete
module.exports = router;