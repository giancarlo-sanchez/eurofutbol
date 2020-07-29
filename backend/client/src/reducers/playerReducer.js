const PLAYER_DETAILS_REQUEST = 'PLAYER_DETAILS_REQUEST';
const PLAYER_DETAILS_SUCCESS = 'PLAYER_DETAILS_SUCCESS';
const PLAYER_DETAILS_FAIL = 'PLAYER_DETAILS_FAIL';


function playerReducer(state = { loading: true }, action){
    switch (action.type){
        case PLAYER_DETAILS_REQUEST:
            return {loading: true};
        case PLAYER_DETAILS_SUCCESS:
            return {loading: false, playerInfo: action.payload};
        case PLAYER_DETAILS_FAIL:
            return {loading: false, error: action.payload};
        default:
            return state;
    }
}

export default playerReducer;
