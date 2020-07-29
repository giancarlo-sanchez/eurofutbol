import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import {listPlayersAction}  from '../actions/listPlayerActions'
import Carousel from 'react-material-ui-carousel'
import { addPlayer } from '../actions/favoritePlayerActions';

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
        <Link to={`/player/${player.player_id}`}>
        <div key={player.player_id}>
            <div className="text-box__squad-team-page">
                <img src={player.player?player.player.data.image_path:"https://daily.jstor.org/wp-content/uploads/2018/06/soccer_europe_1050x700.jpg"}/>
            </div>
            <div className="text-box__squad-stats-team-page">
                <div className="team-logo-square__text-box">
                    <text>Name:</text>
                    <div>{player.player.data.fullname}</div>
                </div>
                <div className="team-logo-square__text-box">
                    <text>Number:</text>
                    <div>{player.number}</div>
                </div>
                <div className="team-logo-square__text-box">
                    <text>Position:</text>
                    <div>{player.position?player.position.data.name:"No data"}</div>
                </div>
                {/* <div>
                    <div>{userInfo?<button onClick={() => {dispatch(addPlayer(userInfo.user.id, player.player_id,player.player.data.image_path,teamId.team,player.player.data.fullname,token));}
                }>Follow</button>:<Link to='/login'><div>Sign In to interact with the app</div></Link>}</div>
                </div> */}
            </div>


        </div>
        </Link>
))}
</Carousel>

}

export default ListPlayers;
