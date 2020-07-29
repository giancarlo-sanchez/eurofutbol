import axios from "axios";
import {api_key} from '../config'

const LIST_PLAYERS_REQUEST = 'LIST_PLAYERS_REQUEST';
const LIST_PLAYERS_SUCCESS = 'LIST_PLAYERS_SUCCESS';
const LIST_PLAYERS_FAIL = 'LIST_PLAYERS_FAIL';


const listPlayersAction = (teamId, seasonId) => async(dispatch) =>{
    try{
        dispatch({type: LIST_PLAYERS_REQUEST });
        const {data} = await axios.get(`https://soccer.sportmonks.com/api/v2.0/squad/season/${seasonId}/team/${teamId}?api_token=${api_key}&include=player,position`);
        let listOfAttributes = data.data
        // let coachInfo = listOfAttributes.coach;

        dispatch({type: LIST_PLAYERS_SUCCESS, payload: listOfAttributes})
        }catch(error){
            dispatch({type: LIST_PLAYERS_FAIL, payload:error.message})
        }

}

export {listPlayersAction}
