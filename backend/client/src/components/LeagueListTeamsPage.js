import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import {listLeagueTeamAction}  from '../actions/ListTeamsActions'
import setLeagueName from '../utilFunctions/leagueNames'

function LeagueListTeamsPage (props){
    let index =  props.match.params.id
    let {name,place} = setLeagueName(index)
    console.log("this is name",name,"this is place:",place)
    console.log("this is index",index)
    const dispatch = useDispatch();

    useEffect(() => {
            dispatch(listLeagueTeamAction(index))
    }, [])

    const listTeamsLeague = useSelector(state => state.listTeamsLeague);
    console.log("this is teamData",listTeamsLeague)
    const {leagueTeamsList, loading,error} = listTeamsLeague
    console.log("this is leagueTeamsList",leagueTeamsList,loading)
    // const {coach,squad} = teamDetails
    // console.log("this is coach and squad",coach, squad)


return loading? <div>Loading...</div>:error? <div>{error}</div>:
<div className="league-teams-list-title">
    <div>{name}, {place}</div>
    <ul className="list-team-all">
    {leagueTeamsList.map(team =>(
        <Link to={`/team/${team.id}`}>
            <li key={team.id}>
            <div className="list-leagues">
                <img className="sneaker-image" src={team.logo_path} alt="sneaker"/>
                <div>
                    {team.name}
                </div>
            </div>
            </li>
        </Link>

        ))}
    </ul>
</div>
}

export default LeagueListTeamsPage;
