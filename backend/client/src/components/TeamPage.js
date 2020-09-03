import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux'

import {listDetailsTeamAction}  from '../actions/teamActions'
import ListPlayers from '../components/ListPlayer'
import TeamStats from '../components/TeamStats'
import TeamFixtures from '../components/TeamFixtures'
import {listFavoriteTeamAction,addFavoriteTeam, removeFavoriteTeam} from '../actions/favoriteTeamActions'
import PlayerPage from './PlayerPage';
import idChecker from '../utilFunctions/idChecker'

function TeamPage (props){
    let index =  props.match.params.id
    const dispatch = useDispatch();
    useEffect(() => {
            dispatch(listDetailsTeamAction(index))

    }, [index])

    const listDetailsTeam = useSelector(state => state.listDetailsTeam);
    const {teamDetails, loading,error} = listDetailsTeam
    const userSignin = useSelector(state =>state.userSignin);
    const { userInfo } = userSignin;

    useEffect(() => {
        dispatch(listFavoriteTeamAction(userInfo.token,userInfo.user.id))
    }, [userInfo.token,userInfo.user.id])

    const listFavoriteTeam = useSelector(state => state.listFavoriteTeam);
    const {favoriteTeamsList} = listFavoriteTeam

    let userId = userInfo ? userInfo.user.id : null
    let teamId = teamDetails ? teamDetails.id : null
    let teamImageUrl = teamDetails ? teamDetails.logo_path : null
    let teamName = teamDetails ? teamDetails.name : null
    console.log("This is favoriteTeamsList",favoriteTeamsList)
    console.log("This is the data on the variables",userId,teamId, teamImageUrl, teamName,"And thats it")

    console.log("This is teamDetails",teamDetails,"This is userInfo:",userInfo)

    // idChecker(teamId,favoriteTeamsList)

    const addFavTeam=(e)=>{
        e.preventDefault();
        dispatch(addFavoriteTeam({userId,teamId, teamImageUrl, teamName}))
        dispatch(listDetailsTeamAction(index))
    }

    const removeFavTeam=(e)=>{
        e.preventDefault();
        dispatch(removeFavoriteTeam({teamId,userId}))
        dispatch(listDetailsTeamAction(index))
    }

return loading? <div>Loading...</div>:error? <div>{error}</div>:
<div className="team-page-background">
<div className='players-section__title'>TEAM</div>
<div className="container-team-page">
    <div className="team-logo-square">
        <div className="text-box__squad-team-page">
            <img src={teamDetails.logo_path}></img>
            {
                idChecker(teamId,favoriteTeamsList?favoriteTeamsList.favoriteTeams:[])?<button onClick={removeFavTeam}>Unfollow</button>:<button onClick={addFavTeam}>Follow</button>
            }

        </div>
        <div className="team-logo-square__text-box">
            <text>Team:</text>
            <div>{teamDetails.name}</div>
        </div>
        <div className="team-logo-square__text-box">
            <text>Coach:</text>
            <div>{teamDetails.coach.data.fullname}</div>
        </div>
        <div className="team-logo-square__text-box">
            <text>Founded:</text>
            <div>{teamDetails.founded}</div>
        </div>
        {/* <div>Team Id: {teamDetails.id}</div> */}
        {/* <div>Founded: {teamDetails.founded}</div> */}


    </div>
    <div className="fixtures-n-stats-grid-container">
        <div className="fixtures-grid-container">
            <TeamFixtures fixtureId={teamDetails.upcoming.data} />
        </div>

        <div className="stats-grid-container">
            <TeamStats stats={teamDetails.stats} loading={loading}/>
        </div>
        {/* <div>TEAM STATS</div> */}
    </div>
</div>
<div className="players-section">
    <div className="players-section__title">PLAYERS</div>
    <div className="container-carousel">
    {/* <div>Players</div> */}
        <ListPlayers teamId={teamDetails.id} seasonId={teamDetails.current_season_id} team={teamDetails.name} />
    </div>
</div>

</div>


}

export default TeamPage;
