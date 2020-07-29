const LEAGUE_TEAM_LIST_REQUEST = 'LEAGUE_TEAM_LIST_REQUEST';
const LEAGUE_TEAM_LIST_SUCCESS = 'LEAGUE_TEAM_LIST_SUCCESS';
const LEAGUE_TEAM_LIST_FAIL = 'LEAGUE_TEAM_LIST_FAIL';

function listLeagueTeamsReducer(state = { loading: true }, action){
    switch (action.type){
        case LEAGUE_TEAM_LIST_REQUEST:
            return {loading: true};
        case LEAGUE_TEAM_LIST_SUCCESS:
            return {loading: false, leagueTeamsList: action.payload};
        case LEAGUE_TEAM_LIST_FAIL:
            return {loading: false, error: action.payload};
        default:
            return state;
    }
}

export default listLeagueTeamsReducer;
