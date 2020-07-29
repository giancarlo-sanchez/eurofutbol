import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux'

import {listDetailsTeamAction}  from '../actions/teamActions'
import ListPlayers from '../components/ListPlayer'
import TeamStats from '../components/TeamStats'
import TeamFixtures from '../components/TeamFixtures'
import {addFavoriteTeam} from '../actions/favoriteTeamActions'

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

    console.log("This is teamDetails",teamDetails,"This is userInfo:",userInfo)

    let userId;
    let teamId;
    let teamImageUrl;
    let teamName;

    if(teamDetails){
        userId=userInfo.user.id;
        teamId=teamDetails.id;
        teamImageUrl=teamDetails.logo_path;
        teamName=teamDetails.name;
    }

    console.log("This is the object that is passed to favorite teams",userId, teamId, teamImageUrl, teamName)
    const followTeam = () => {
        // create a follow team object
        dispatch(addFavoriteTeam({userId, teamId, teamImageUrl, teamName}));
      }

return loading? <div>Loading...</div>:error? <div>{error}</div>:
<div className="container-team-page">
    <div className="team-logo-square">
        <div className="text-box__squad-team-page">
            <img src={teamDetails.logo_path}></img>
            <button onClick={followTeam}>Follow</button>
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

    <div className="container-carousel">
        <ListPlayers teamId={teamDetails.id} seasonId={teamDetails.current_season_id} team={teamDetails.name} />
    </div>


</div>
}

export default TeamPage;
