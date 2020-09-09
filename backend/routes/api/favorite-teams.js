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

router.delete("/unfollow/:teamId/:userId",
    asyncHandler(async function(req, res){

        const userId = parseInt(req.params.userId, 10)
        const teamId = parseInt(req.params.teamId, 10)
        // console.log("this is the team Id and userId comming from req",teamId, userId)
        const favoriteTeams = await db.FavoriteTeam.findAll({
            where: {
                userId: userId,
                teamId: teamId
            },
        })

        console.log("Este es el equipo que sale",favoriteTeams);
        let favTeamId = favoriteTeams[0].dataValues;
        console.log('Este es el equipo que sale despues',favTeamId)
        const element = await db.FavoriteTeam.findByPk(favTeamId.id);
        const deletedFavoritePlayer = await element.destroy();

        res.json({msg: "You don't follow the player anymore 😞!",deletedFavoritePlayer});
}));

module.exports = router;
