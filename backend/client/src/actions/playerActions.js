import axios from "axios";

const PLAYER_DETAILS_REQUEST = 'PLAYER_DETAILS_REQUEST';
const PLAYER_DETAILS_SUCCESS = 'PLAYER_DETAILS_SUCCESS';
const PLAYER_DETAILS_FAIL = 'PLAYER_DETAILS_FAIL';


const listDetailsPlayerAction = (index) => async(dispatch) =>{
    try{
        dispatch({type: PLAYER_DETAILS_REQUEST });
        const {data} = await axios.get(`https://soccer.sportmonks.com/api/v2.0/players/${index}?api_token=SfQeCCmTu5DYuPGUCfkt35zhHafVze2nmNeen07xp5GyldU2YQ3WqkimCjI0&include=position,stats,team`);
        let listOfAttributes = data.data
        // let coachInfo = listOfAttributes.coach;

        dispatch({type: PLAYER_DETAILS_SUCCESS, payload: listOfAttributes})
        }catch(error){
            dispatch({type: PLAYER_DETAILS_FAIL, payload:error.message})
        }

}

export {listDetailsPlayerAction}
