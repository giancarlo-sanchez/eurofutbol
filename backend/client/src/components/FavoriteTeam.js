import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import {listFavoriteTeamAction}  from '../actions/favoriteTeamActions'
import { useHistory } from "react-router"
import Carousel from 'react-material-ui-carousel';

function FavoriteTeamPage (props){
    let token = props.token;
    let index = parseInt(props.teams)

    const dispatch = useDispatch();

    useEffect(() => {
            dispatch(listFavoriteTeamAction(token,index))
    }, [])

    const listFavoriteTeam = useSelector(state => state.listFavoriteTeam);
    const {favoriteTeamsList, loading,error} = listFavoriteTeam


return loading? <div>Loading...</div>:error? <div>{error}</div>:
        <div>
            <div className="profile-page-titles">
                <div>FAVORITE TEAMS</div>
            </div>
            <ul className="favorite-teams-carousel">
                <Carousel>
                    {favoriteTeamsList.favoriteTeams.map(team=>(
                        <Link to={`/team/${team.teamId}`}>
                            <li key={team.teamId} className="testing">
                                <div>
                                    <div>Name: {team.teamName}</div>
                                </div>
                                <img src={team.teamImageUrl} />
                            </li>
                        </Link>

                ))}

                </Carousel>

            </ul>
        </div>

}

export default FavoriteTeamPage;
