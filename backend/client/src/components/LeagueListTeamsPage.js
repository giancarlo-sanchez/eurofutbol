import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import {listLeagueTeamAction}  from '../actions/ListTeamsActions'
import setLeagueName from '../utilFunctions/leagueNames'

function LeagueListTeamsPage (props){
    let index =  props.match.params.id
    let {name,place} = setLeagueName(index)
    const dispatch = useDispatch();

    useEffect(() => {
            dispatch(listLeagueTeamAction(index))
    }, [])

    const listTeamsLeague = useSelector(state => state.listTeamsLeague);

    const {leagueTeamsList, loading,error} = listTeamsLeague


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
