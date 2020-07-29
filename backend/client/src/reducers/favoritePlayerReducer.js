const FAVORITE_PLAYERS_LIST_REQUEST = 'FAVORITE_PLAYERS_LIST_REQUEST';
const FAVORITE_PLAYERS_SUCCESS = 'FAVORITE_PLAYERS_LIST_SUCCESS';
const FAVORITE_PLAYERS_LIST_FAIL = 'FAVORITE_PLAYERS_LIST_FAIL';

const POST_FAVORITE_PLAYERS_REQUEST = 'POST_FAVORITE_PLAYERS_REQUEST'
const POST_FAVORITE_PLAYERS_SUCCESS = 'POST_FAVORITE_PLAYERS_SUCCESS'
const POST_FAVORITE_PLAYERS_FAILS = 'POST_FAVORITE_PLAYERS_FAILS'

function listFavoritePlayerReducer(state = { loading: true }, action){
    switch (action.type){
        case FAVORITE_PLAYERS_LIST_REQUEST:
            return {loading: true};
        case FAVORITE_PLAYERS_SUCCESS:
            return {loading: false, favoritePlayersList: action.payload};
        case FAVORITE_PLAYERS_LIST_FAIL:
            return {loading: false, error: action.payload};
        case POST_FAVORITE_PLAYERS_REQUEST:
            return {loading: true};
        case POST_FAVORITE_PLAYERS_SUCCESS:
            return {loading: false,...state, favoritePlayersList: action.payload};
        case POST_FAVORITE_PLAYERS_FAILS:
                return {loading: false, error: action.payload};
        default:
            return state;
    }
}

export default listFavoritePlayerReducer;
