const LEAGUE_LIST_REQUEST = 'LEAGUE_LIST_REQUEST';
const LEAGUE_LIST_SUCCESS = 'LEAGUE_LIST_SUCCESS';
const LEAGUE_LIST_FAIL = 'LEAGUE_LIST_FAIL';

function listLeaguesReducer(state = { loading: true }, action){
    switch (action.type){
        case LEAGUE_LIST_REQUEST:
            return {loading: true};
        case LEAGUE_LIST_SUCCESS:
            return {loading: false, leagueList: action.payload};
        case LEAGUE_LIST_FAIL:
            return {loading: false, error: action.payload};
        default:
            return state;
    }
}

export default listLeaguesReducer;
