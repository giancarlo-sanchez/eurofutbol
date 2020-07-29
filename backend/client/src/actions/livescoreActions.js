import axios from "axios";
const LIVESCORE_REQUEST = 'LIVESCORE_REQUEST';
const LIVESCORE_SUCCESS = 'LIVESCORE_SUCCESS';
const LIVESCORE_FAIL = 'LIVESCORE_FAIL';


const livescoreDetailAction = () => async(dispatch) =>{
    try{
        dispatch({type: LIVESCORE_REQUEST });
        const {data} = await axios.get(`https://soccer.sportmonks.com/api/v2.0/livescores?api_token=SfQeCCmTu5DYuPGUCfkt35zhHafVze2nmNeen07xp5GyldU2YQ3WqkimCjI0&include=localTeam,visitorTeam,league`);
        let listOfAttributes = data.data
        // let coachInfo = listOfAttributes.coach;

        dispatch({type: LIVESCORE_SUCCESS, payload: listOfAttributes})
        }catch(error){
            dispatch({type: LIVESCORE_FAIL, payload:error.message})
        }

}

export {livescoreDetailAction}
