const express = require('express');
const asyncHandler = require('express-async-handler');
const { check, validationResult } = require('express-validator');

const { authenticated } = require('./security-utils');
const db = require("../../db/models");

const router = express.Router();

router.get('/:id', authenticated, asyncHandler(async function(req, res) {
    const id = parseInt(req.params.id,10);
    const favoritePlayers = await db.FavoritePlayer.findAll({
        where: {
            userId: id
        },
        include: [db.User]
    });
    res.json({
        favoritePlayers,
    });
}));

router.post("/", authenticated, asyncHandler(async (req, res)=>{
    const userId = parseInt(req.body.userId, 10)
    const playerId = parseInt(req.body.playerId, 10)
    const imageUrl =  req.body.imageUrl;
    const teamName = req.body.teamName;
    const playerName = req.body.playerName;
    const newFavoritePlayer = { userId, playerId, imageUrl, teamName, playerName };
    try{
        const success = await db.FavoritePlayer.create(newFavoritePlayer);
        res.json({success})
    }catch(err){
        console.error(err);
        throw err;
    }
    res.status(201).end();
}));

router.delete("/unfollow-favorite-player/:id(\\d+)", authenticated,
    asyncHandler(async function(req, res){
        const favoritePlayerId = parseInt(req.params.id, 10);
        const favoriteTeam = await db.FavoritePlayer.findByPk(favoritePlayerId);

        const deletedFavoritePlayer = await favoriteTeam.destroy();

        res.json({msg: "You don't follow the player anymore 😞!",deletedFavoritePlayer});
}));

module.exports = router;
