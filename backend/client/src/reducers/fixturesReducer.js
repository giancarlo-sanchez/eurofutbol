const TEAM_FIXTURE_REQUEST = 'TEAM_FIXTURE_REQUEST';
const TEAM_FIXTURE_SUCCESS = 'TEAM_FIXTURE_SUCCESS';
const TEAM_FIXTURE_FAIL = 'TEAM_FIXTURE_FAIL';

function fixtureDetailsReducer(state = { loading: true }, action){
    switch (action.type){
        case TEAM_FIXTURE_REQUEST:
            return {loading: true};
        case TEAM_FIXTURE_SUCCESS:
            return {loading: false, fixtureDetails: action.payload};
        case TEAM_FIXTURE_FAIL:
            return {loading: false, error: action.payload};
        default:
            return state;
    }
}

export default fixtureDetailsReducer;
