import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import {listPlayersAction}  from '../actions/listPlayerActions'
import Carousel from 'react-material-ui-carousel'
import { addPlayer } from '../actions/favoritePlayerActions';
import PlayerPage from './PlayerPage';

function ListPlayers (teamId){
    console.log("This are the props:",teamId.teamId,teamId.seasonId,teamId.team)
    const dispatch = useDispatch();

    useEffect(() => {
            dispatch(listPlayersAction(teamId.teamId, teamId.seasonId))
    }, [])


    const listPlayersInTeam = useSelector(state => state.listPlayers);
    console.log("this is The store slice:",listPlayersInTeam)

    const {listPlayers, loading,error} = listPlayersInTeam

    console.log("this is squad",listPlayers)

    const userSignin = useSelector(state =>state.userSignin);
    const { userInfo, token } = userSignin;

    // const addFavoritePlayer = () => {
    //     dispatch(addPlayer(userInfo.user.id, player.id));
    //   }

// debugger
return loading? <div>Loading...</div>:error? <div>{error}</div>:
<Carousel className="list-players">{listPlayers.map(player =>(
        <div key={player.player_id}>
            <PlayerPage playerInfo={player.player_id}/>
        </div>
))}
</Carousel>

}

export default ListPlayers;
