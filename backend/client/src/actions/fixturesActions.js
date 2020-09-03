import axios from "axios";
import {api_key} from '../config'
const TEAM_FIXTURE_REQUEST = 'TEAM_FIXTURE_REQUEST';
const TEAM_FIXTURE_SUCCESS = 'TEAM_FIXTURE_SUCCESS';
const TEAM_FIXTURE_FAIL = 'TEAM_FIXTURE_FAIL';


const fixtureDetailAction = (index) => async(dispatch) =>{
    try{
        dispatch({type: TEAM_FIXTURE_REQUEST });
        const {data} = await axios.get(`https://soccer.sportmonks.com/api/v2.0/fixtures/${index}?api_token=${api_key}&include=league,localTeam,visitorTeam`);
        let listOfAttributes = data.data
        dispatch({type: TEAM_FIXTURE_SUCCESS, payload: listOfAttributes})
        }catch(error){
            dispatch({type: TEAM_FIXTURE_FAIL, payload:error.message})
        }

}

export {fixtureDetailAction}
