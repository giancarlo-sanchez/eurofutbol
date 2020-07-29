import axios from "axios";

const LEAGUE_LIST_REQUEST = 'LEAGUE_LIST_REQUEST';
const LEAGUE_LIST_SUCCESS = 'LEAGUE_LIST_SUCCESS';
const LEAGUE_LIST_FAIL = 'LEAGUE_LIST_FAIL';


const listLeagueAction = () => async(dispatch) =>{
    try{
        dispatch({type: LEAGUE_LIST_REQUEST });
        const {data} = await axios.get(`https://soccer.sportmonks.com/api/v2.0/leagues?api_token=SfQeCCmTu5DYuPGUCfkt35zhHafVze2nmNeen07xp5GyldU2YQ3WqkimCjI0`);
        let listOfAttributes = data.data
        // let coachInfo = listOfAttributes.coach;

        dispatch({type: LEAGUE_LIST_SUCCESS, payload: listOfAttributes})
        }catch(error){
            dispatch({type: LEAGUE_LIST_FAIL, payload:error.message})
        }

}

export {listLeagueAction}
