const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// ROUTER.get
router.get('/', (req, res) => {
    if(req.isAuthenticated()) {
        console.log('is authenticated?', req.isAuthenticated());
        let queryText = `SELECT * FROM "favoritearticles" WHERE person_id = $1;`;
        pool.query(queryText, [req.user.id]).then((result) => {
            res.send(result.rows);
        }).catch((error) => {
            console.log(`ERROR trying to GET /api/fav: ${error}`);
        });
    } else {
        res.sendStatus(403);
    }
}); // end of router.get'

// ROUTER.post
router.post('/', (req, res) => {
    if(req.isAuthenticated()) {
        const fav_id = req.body
        const queryText = `INSERT INTO "favoritearticles" ("author", "link", "pubDate", "thumbnail", "title", "person_id")
                           VALUES ($1, $2, $3, $4, $5, $6) RETURNING "favoritearticles";`;
        const queryValues = [
            fav_id.author,  
            fav_id.link, 
            fav_id.pubDate, 
            fav_id.thumbnail,
            fav_id.title, 
            req.user.id
        ];
        pool.query(queryText, queryValues)
        .then((results) => { res.sendStatus(201); 
        console.log('router.post favorites: successful', results);
        })
        .catch((error) => {
            console.log(`ERROR trying to POST /api/: ${error}`);
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
        const delete_favorite = req.params.id;
        const queryText = 'DELETE FROM "favoritearticles" WHERE "id" = $1;';
        pool
        .query(queryText, [delete_favorite])
        .then(response => {
            res.sendStatus(200);
            console.log(
            'DELETE successful on router.delete api/fav:',response
            );
        })
        .catch(error => {
            console.log(`ERROR on router.delete api/fav: ${error}`);
            res.sendStatus(500);
        })
    // } else {
    //     res.sendStatus(403);
    // }
  }); // end of router.delete
module.exports = router;