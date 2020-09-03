import axios from "axios";

import { baseUrl } from '../config';

const FAVORITE_TEAMS_LIST_REQUEST = 'FAVORITE_TEAMS_LIST_REQUEST';
const FAVORITE_TEAMS_SUCCESS = 'FAVORITE_TEAMS_LIST_SUCCESS';
const FAVORITE_TEAMS_LIST_FAIL = 'FAVORITE_TEAMS_LIST_FAIL';

const FAVORITE_TEAMS_CREATE_REQUEST = 'FAVORITE_TEAMS_CREATE_REQUEST';
const FAVORITE_TEAMS_CREATE_SUCCESS = 'FAVORITE_TEAMS_CREATE_SUCCESS';
const FAVORITE_TEAMS_CREATE_FAIL = 'FAVORITE_TEAMS_CREATE_FAIL';

const FAVORITE_TEAMS_DELETE_REQUEST = 'FAVORITE_TEAMS_DELETE_REQUEST';
const FAVORITE_TEAMS_DELETE_SUCCESS = 'FAVORITE_TEAMS_DELETE_SUCCESS';
const FAVORITE_TEAMS_DELETE_FAIL = 'FAVORITE_TEAMS_DELETE_FAIL';



const listFavoriteTeamAction = (token,userId) => async(dispatch) =>{
    try{
        dispatch({type: FAVORITE_TEAMS_LIST_REQUEST });
        const {data} = await axios.get(`${baseUrl}/favorite-teams/${userId}`, {
            headers: { Authorization: `Bearer ${token}` },
          });
        let listOfAttributes = data

        dispatch({type: FAVORITE_TEAMS_SUCCESS, payload: listOfAttributes})
        }catch(error){
            dispatch({type: FAVORITE_TEAMS_LIST_FAIL, payload:error.message})
        }

}

const addFavoriteTeam = (userId,teamId, teamImageUrl, teamName)=> async(dispatch,getState) =>{
    try{
        dispatch({type: FAVORITE_TEAMS_CREATE_REQUEST });
        const {data} = await axios.post(`${baseUrl}/favorite-teams/`,userId,teamId, teamImageUrl, teamName)
        let newTeam = data

        dispatch({type: FAVORITE_TEAMS_CREATE_SUCCESS, payload: newTeam})
        }catch(error){
            dispatch({type: FAVORITE_TEAMS_CREATE_FAIL, payload:error.message})
        }

}

const removeFavoriteTeam = (teamId,userId)=> async(dispatch,getState) =>{
    try{
        dispatch({type: FAVORITE_TEAMS_DELETE_REQUEST });
        const { userSignin: { userInfo:{token} } } = getState();
        const {data} = await axios.delete(`${baseUrl}/unfollow-favorite-team/`,{
            headers: { Authorization: `Bearer ${token}` },teamId,userId})
        let deleteTeam = data

        dispatch({type: FAVORITE_TEAMS_DELETE_SUCCESS, payload: deleteTeam})
        }catch(error){
            dispatch({type: FAVORITE_TEAMS_DELETE_FAIL, payload:error.message})
        }

}

export {listFavoriteTeamAction,addFavoriteTeam,removeFavoriteTeam}
