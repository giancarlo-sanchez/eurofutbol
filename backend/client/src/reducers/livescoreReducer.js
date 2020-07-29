const LIVESCORE_REQUEST = 'LIVESCORE_REQUEST';
const LIVESCORE_SUCCESS = 'LIVESCORE_SUCCESS';
const LIVESCORE_FAIL = 'LIVESCORE_FAIL';

function livescoreDetailsReducer(state = { loading: true }, action){
    switch (action.type){
        case LIVESCORE_REQUEST:
            return {loading: true};
        case LIVESCORE_SUCCESS:
            return {loading: false, livescoreDetails: action.payload};
        case LIVESCORE_FAIL:
            return {loading: false, error: action.payload};
        default:
            return state;
    }
}

export default livescoreDetailsReducer;
