const TEAM_DETAILS_REQUEST = 'TEAM_DETAILS_REQUEST';
const TEAM_DETAILS_SUCCESS = 'TEAM_DETAILS_SUCCESS';
const TEAM_DETAILS_FAIL = 'TEAM_DETAILS_FAIL';

function listDetailsTeamsReducer(state = { loading: true }, action){
    switch (action.type){
        case TEAM_DETAILS_REQUEST:
            return {loading: true};
        case TEAM_DETAILS_SUCCESS:
            return {loading: false, teamDetails: action.payload};
        case TEAM_DETAILS_FAIL:
            return {loading: false, error: action.payload};
        default:
            return state;
    }
}

export default listDetailsTeamsReducer;
