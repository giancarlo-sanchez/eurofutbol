
const LIST_PLAYERS_REQUEST = 'LIST_PLAYERS_REQUEST';
const LIST_PLAYERS_SUCCESS = 'LIST_PLAYERS_SUCCESS';
const LIST_PLAYERS_FAIL = 'LIST_PLAYERS_FAIL';


function listPlayersReducer(state = { loading: true }, action){
    switch (action.type){
        case LIST_PLAYERS_REQUEST:
            return {loading: true};
        case LIST_PLAYERS_SUCCESS:
            return {loading: false, listPlayers: action.payload};
        case LIST_PLAYERS_FAIL:
            return {loading: false, error: action.payload};
        default:
            return state;
    }
}

export default listPlayersReducer;
