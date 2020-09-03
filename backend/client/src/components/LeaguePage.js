import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import {listLeagueAction}  from '../actions/LeagueActions'

function LeaguePage (){
    const dispatch = useDispatch();

    useEffect(() => {
            dispatch(listLeagueAction())
    }, [])

    const listLeagues = useSelector(state => state.listLeagues);
    const {leagueList, loading,error} = listLeagues

return loading? <div>Loading...</div>:error? <div>{error}</div>:<ul className="list-league-all">
{leagueList.map(league =>(
  <Link to={`/league/${league.current_season_id}`}>
    <li key={league.id}>
        <div className="list-leagues">
            <img src={league.logo_path} alt="team"/>
                <div>
                    {league.name}
                </div>
        </div>
    </li>

  </Link>
    ))}
    </ul>
}

export default LeaguePage;
