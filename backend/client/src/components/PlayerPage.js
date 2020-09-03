import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import {listDetailsPlayerAction}  from '../actions/playerActions'
import playerStatsTotal from '../utilFunctions/playerStats'
import { addPlayer } from '../actions/favoritePlayerActions';

function PlayerPage (props){
    let index =  props.playerInfo;
    const dispatch = useDispatch();


    useEffect(() => {
            dispatch(listDetailsPlayerAction(index))
    }, [])

    const listDetailsPlayer = useSelector(state => state.listDetailsPlayer);
    console.log("this is teamData",listDetailsPlayer)
    const {playerInfo, loading,error} = listDetailsPlayer
    console.log("this is player",playerInfo,loading)
    if(playerInfo){
        let filteredStats = playerStatsTotal(playerInfo.stats?playerInfo.stats.data:[])
        console.log(filteredStats)
    }

    const userSignin = useSelector(state =>state.userSignin);
    const { userInfo, token } = userSignin;

    // const addFavoritePlayer = () => {
    //     dispatch(addPlayer(userInfo.user.id, player.id));
    //   }



return loading? <div>Loading...</div>:error? <div>{error}</div>:
    <div className="container-player-page">
        <div>
            <div className="container-player-page__info">PLAYER INFO</div>
            <div className="player-logo-square">
                <div>Name: {playerInfo.fullname}</div>
                <div>Position: {playerInfo.position?playerInfo.position.data.name:"no data"}</div>
                <div>Team: {playerInfo.team.data.name}</div>
                <div>Birthday: {playerInfo.birthdate}</div>
                <div className="player-logo-square__img">
                    <img src={playerInfo.image_path} />
                </div>
            </div>
        </div>

        <div>
            <div className="container-player-page__info">PERSONAL</div>
            <div className="player-logo-square">
            <div>Country: {playerInfo.birthcountry}</div>
            <div>height: {playerInfo.height}</div>
            <div>weight: {playerInfo.weight}</div>
            <div>Team: {playerInfo.team.data.name}</div>
            <Link to={`/team/${playerInfo.team.data.id}`}>
                <div className="player-logo-square__img">
                    <img src={playerInfo.team.data.logo_path} />
                </div>
            </Link>

        </div>
        </div>

        <div>
            <div className="container-player-page__info">STATS</div>
            <div className="player-logo-square">
            <div>Total matches: {playerStatsTotal(playerInfo.stats.data).appearences}</div>
            <div>Total goals:{playerStatsTotal(playerInfo.stats.data).goals}</div>
            <div>Total assists:{playerStatsTotal(playerInfo.stats.data).assists}</div>
            <div>Total Saves: {playerStatsTotal(playerInfo.stats.data).saves}</div>
            <div>Total yellow cards: {playerStatsTotal(playerInfo.stats.data).yellowcards}</div>
            <div>Total red cards: {playerStatsTotal(playerInfo.stats.data).redcards}</div>

        </div>
        </div>

    </div>



}

export default PlayerPage;
