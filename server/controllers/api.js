/**
 * Created by RFreeman on 3/29/2017.
 */
let express = require('express');
let router = express.Router();

let Game = require('../models/game');

// get all
router.get('/', function (req, res, next) {
    Game.find(function (err, games) {
       if (err) {
           return res.send(err).status(501);
       }

       res.json(games);
    });
});

// post
router.post('/', function (req, res, next) {
   let newGame = new Game(req.body);

   newGame.save(function (err, game) {
       if (err) {
           console.log(err);
           return res.json(err).status(501);
       }
       res.json(game).status(201);
   });
});

module.exports = router;
