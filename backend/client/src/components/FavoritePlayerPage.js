import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import {listFavoritePlayerAction}  from '../actions/favoritePlayerActions'
import { useHistory } from "react-router"
import Carousel from 'react-material-ui-carousel';
import FavoriteTeamPage from '../components/FavoriteTeam'
import Livescore from '../components/Livescore'

function FavoritePlayerPage (props){
    // let index =  props.match.params.id;
    const userSignin = useSelector(state =>state.userSignin);
    let history = useHistory()

    const { userInfo } = userSignin;

    const {token, user} = userInfo;
    if(!token){
        history.push('/login')
      }
    const dispatch = useDispatch();

    useEffect(() => {
        if(!token || !userInfo){
            history.push('/login')
        }
            dispatch(listFavoritePlayerAction(token,user.id))
    }, [])

    const listFavoritePlayer = useSelector(state => state.listFavoritePlayer);
    const {favoritePlayersList, loading,error} = listFavoritePlayer

return loading? <div>Loading...</div>:error? <div>{error}</div>:
<div className="grid-user-details">
    <div className="grid-user-details__subgrid">
        <div>
            <div className="profile-page-titles">
                <div>USER INFO</div>
            </div>
            <div className="grid-user-details__userInfo">
                <div>Name: {userInfo.user.name}</div>
                <div>ID: {userInfo.user.id}</div>
                <div>email: {userInfo.user.email}</div>
                <div>Member since: {userInfo.user.createdAt}</div>
            </div>

        </div>

        <div className="profile-page-titles">
            <Livescore />
        </div>
    </div>
    <div className="grid-user-details__subgrid">
        <FavoriteTeamPage teams={user.id} token={token}/>
        <div>
            <div className="profile-page-titles">
                <div>FAVORITE PLAYERS</div>
            </div>
            <ul className="favorite-players-carousel">
                <Carousel>
                    {favoritePlayersList.favoritePlayers.map(player=>(
                        <Link to={`/player/${player.playerId}`}>
                            <li key={player.playerId} className="testing">
                            <div>
                                <div>Name: {player.playerName}</div>
                                <div>Team: {player.teamName}</div>
                            </div>
                            <img src={player.imageUrl} />
                        </li>
                        </Link>

                ))}

                </Carousel>

            </ul>
        </div>
    </div>
</div>

}

export default FavoritePlayerPage;
