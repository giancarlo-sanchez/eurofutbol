import axios from "axios";
import {api_key} from '../config'

const LEAGUE_LIST_REQUEST = 'LEAGUE_LIST_REQUEST';
const LEAGUE_LIST_SUCCESS = 'LEAGUE_LIST_SUCCESS';
const LEAGUE_LIST_FAIL = 'LEAGUE_LIST_FAIL';


const listLeagueAction = () => async(dispatch) =>{
    try{
        dispatch({type: LEAGUE_LIST_REQUEST });
        const {data} = await axios.get(`https://soccer.sportmonks.com/api/v2.0/leagues?api_token=${api_key}`);
        let listOfAttributes = data.data
        dispatch({type: LEAGUE_LIST_SUCCESS, payload: listOfAttributes})
        }catch(error){
            dispatch({type: LEAGUE_LIST_FAIL, payload:error.message})
        }

}

export {listLeagueAction}
