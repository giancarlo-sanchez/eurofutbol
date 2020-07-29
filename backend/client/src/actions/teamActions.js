import axios from "axios";
import {api_key} from '../config'

const TEAM_DETAILS_REQUEST = 'TEAM_DETAILS_REQUEST';
const TEAM_DETAILS_SUCCESS = 'TEAM_DETAILS_SUCCESS';
const TEAM_DETAILS_FAIL = 'TEAM_DETAILS_FAIL';


const listDetailsTeamAction = (index) => async(dispatch) =>{
    try{
        dispatch({type: TEAM_DETAILS_REQUEST });
        const {data} = await axios.get(`https://soccer.sportmonks.com/api/v2.0/teams/${index}?api_token=${api_key}&include=stats,coach,upcoming`);
        let listOfAttributes = data.data
        // let coachInfo = listOfAttributes.coach;

        dispatch({type: TEAM_DETAILS_SUCCESS, payload: listOfAttributes})
        }catch(error){
            dispatch({type: TEAM_DETAILS_FAIL, payload:error.message})
        }

}

export {listDetailsTeamAction}
