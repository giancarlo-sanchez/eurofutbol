const express = require('express');
const asyncHandler = require('express-async-handler');
const { check, validationResult } = require('express-validator');

const { authenticated } = require('./security-utils');
const db = require("../../db/models");

const router = express.Router();

router.get('/:id', authenticated, asyncHandler(async function(req, res) {
    const id = parseInt(req.params.id,10);
    const favoriteTeams = await db.FavoriteTeam.findAll({
        where: {
            userId: id
        },
        include: [db.User]
    });
    res.json({
        favoriteTeams,
    });
}));

router.post("/", asyncHandler(async (req, res)=>{
    console.log("this is the request:",req.body)
    const userId = parseInt(req.body.userId, 10)
    const teamId = parseInt(req.body.teamId, 10)
    const teamImageUrl =  req.body.teamImageUrl;
    const teamName = req.body.teamName;
    const newFavoriteTeam = { userId, teamId, teamImageUrl, teamName };
    try{
        const success = await db.FavoriteTeam.create(newFavoriteTeam);
        res.json({success})
    }catch(err){
        console.error(err);
        throw err;
    }
    res.status(201).end();
}));

router.delete("/unfollow-favorite-team/:id", authenticated,
    asyncHandler(async function(req, res){
        const userId = parseInt(req.body.userId, 10)
        const teamId = parseInt(req.body.teamId, 10)
        const favoriteTeams = await db.FavoriteTeam.findAll({
            where: {
                userId: userId,
                teamId: teamId
            },
        })

        const deletedFavoritePlayer = await favoriteTeams.destroy();

        res.json({msg: "You don't follow the player anymore 😞!",deletedFavoritePlayer});
}));

module.exports = router;
