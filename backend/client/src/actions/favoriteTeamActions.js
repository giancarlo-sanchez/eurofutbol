import axios from "axios";

import { baseUrl } from '../config';

const FAVORITE_TEAMS_LIST_REQUEST = 'FAVORITE_TEAMS_LIST_REQUEST';
const FAVORITE_TEAMS_SUCCESS = 'FAVORITE_TEAMS_LIST_SUCCESS';
const FAVORITE_TEAMS_LIST_FAIL = 'FAVORITE_TEAMS_LIST_FAIL';

const FAVORITE_TEAMS_CREATE_REQUEST = 'FAVORITE_TEAMS_CREATE_REQUEST';
const FAVORITE_TEAMS_CREATE_SUCCESS = 'FAVORITE_TEAMS_CREATE_SUCCESS';
const FAVORITE_TEAMS_CREATE_FAIL = 'FAVORITE_TEAMS_CREATE_FAIL';



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

const addFavoriteTeam = (teamData)=> async(dispatch,getState) =>{
    try{
        dispatch({type: FAVORITE_TEAMS_CREATE_REQUEST });
        // const { userSignin: { userInfo:{token} } } = getState();
        // console.log("This is the token on endpoint:",token)
        const {data} = await axios.post(`${baseUrl}/favorite-teams/`,teamData)
        let newTeam = data

        dispatch({type: FAVORITE_TEAMS_CREATE_SUCCESS, payload: newTeam})
        }catch(error){
            dispatch({type: FAVORITE_TEAMS_CREATE_FAIL, payload:error.message})
        }

}

export {listFavoriteTeamAction,addFavoriteTeam}
