import axios from "axios";

import { baseUrl } from '../config';

const FAVORITE_PLAYERS_LIST_REQUEST = 'FAVORITE_PLAYERS_LIST_REQUEST';
const FAVORITE_PLAYERS_SUCCESS = 'FAVORITE_PLAYERS_LIST_SUCCESS';
const FAVORITE_PLAYERS_LIST_FAIL = 'FAVORITE_PLAYERS_LIST_FAIL';
const POST_FAVORITE_PLAYERS_REQUEST = 'POST_FAVORITE_PLAYERS_REQUEST'
const POST_FAVORITE_PLAYERS_SUCCESS = 'POST_FAVORITE_PLAYERS_SUCCESS'
const POST_FAVORITE_PLAYERS_FAILS = 'POST_FAVORITE_PLAYERS_FAILS'


const listFavoritePlayerAction = (token,userId) => async(dispatch) =>{
    try{
        dispatch({type: FAVORITE_PLAYERS_LIST_REQUEST });
        const {data} = await axios.get(`${baseUrl}/favorite-players/${userId}`, {
            headers: { Authorization: `Bearer ${token}` },
          });
        let listOfAttributes = data
        dispatch({type: FAVORITE_PLAYERS_SUCCESS, payload: listOfAttributes})
        }catch(error){
            dispatch({type: FAVORITE_PLAYERS_LIST_FAIL, payload:error.message})
        }

}

const addPlayer = (userId,playerId,imageUrl,teamName,playerName,token) =>async(dispatch)=>{
    dispatch({type: POST_FAVORITE_PLAYERS_REQUEST, payload:{userId,playerId,imageUrl,teamName,playerName}});
    try{
        const {data} = await axios.post(`${baseUrl}/favorite-players`,{
            headers: { Authorization: `Bearer ${token}` },
          },{body:{userId,playerId,imageUrl,teamName,playerName}});
        dispatch({type: POST_FAVORITE_PLAYERS_SUCCESS,payload: data});
    }catch(error){
        dispatch({type: POST_FAVORITE_PLAYERS_FAILS,payload: error.message });
    }
}

export {listFavoritePlayerAction, addPlayer}
