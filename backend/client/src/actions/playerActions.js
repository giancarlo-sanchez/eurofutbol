import axios from "axios";
import {api_key} from '../config'

const PLAYER_DETAILS_REQUEST = 'PLAYER_DETAILS_REQUEST';
const PLAYER_DETAILS_SUCCESS = 'PLAYER_DETAILS_SUCCESS';
const PLAYER_DETAILS_FAIL = 'PLAYER_DETAILS_FAIL';


const listDetailsPlayerAction = (index) => async(dispatch) =>{
    try{
        dispatch({type: PLAYER_DETAILS_REQUEST });
        const {data} = await axios.get(`https://soccer.sportmonks.com/api/v2.0/players/${index}?api_token=${api_key}&include=position,stats,team`);
        let listOfAttributes = data.data
        // let coachInfo = listOfAttributes.coach;

        dispatch({type: PLAYER_DETAILS_SUCCESS, payload: listOfAttributes})
        }catch(error){
            dispatch({type: PLAYER_DETAILS_FAIL, payload:error.message})
        }

}

export {listDetailsPlayerAction}
