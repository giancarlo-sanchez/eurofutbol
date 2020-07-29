import axios from "axios";

const LEAGUE_TEAM_LIST_REQUEST = 'LEAGUE_TEAM_LIST_REQUEST';
const LEAGUE_TEAM_LIST_SUCCESS = 'LEAGUE_TEAM_LIST_SUCCESS';
const LEAGUE_TEAM_LIST_FAIL = 'LEAGUE_TEAM_LIST_FAIL';


const listLeagueTeamAction = (index) => async(dispatch) =>{
    try{
        dispatch({type: LEAGUE_TEAM_LIST_REQUEST });
        const {data} = await axios.get(`https://soccer.sportmonks.com/api/v2.0/teams/season/${index}?api_token=SfQeCCmTu5DYuPGUCfkt35zhHafVze2nmNeen07xp5GyldU2YQ3WqkimCjI0`);
        let listOfAttributes = data.data
        // let coachInfo = listOfAttributes.coach;

        dispatch({type: LEAGUE_TEAM_LIST_SUCCESS, payload: listOfAttributes})
        }catch(error){
            dispatch({type: LEAGUE_TEAM_LIST_FAIL, payload:error.message})
        }

}

export {listLeagueTeamAction}
