const FAVORITE_TEAMS_LIST_REQUEST = 'FAVORITE_TEAMS_LIST_REQUEST';
const FAVORITE_TEAMS_SUCCESS = 'FAVORITE_TEAMS_LIST_SUCCESS';
const FAVORITE_TEAMS_LIST_FAIL = 'FAVORITE_TEAMS_LIST_FAIL';

const FAVORITE_TEAMS_CREATE_REQUEST = 'FAVORITE_TEAMS_CREATE_REQUEST';
const FAVORITE_TEAMS_CREATE_SUCCESS = 'FAVORITE_TEAMS_CREATE_SUCCESS';
const FAVORITE_TEAMS_CREATE_FAIL = 'FAVORITE_TEAMS_CREATE_FAIL';
const FAVORITE_TEAMS_DELETE_REQUEST = 'FAVORITE_TEAMS_DELETE_REQUEST';
const FAVORITE_TEAMS_DELETE_SUCCESS = 'FAVORITE_TEAMS_DELETE_SUCCESS';

function listFavoriteTeamReducer(state = { loading: true }, action){
    switch (action.type){
        case FAVORITE_TEAMS_LIST_REQUEST:
            return {loading: true};
        case FAVORITE_TEAMS_SUCCESS:
            return {loading: false, favoriteTeamsList: action.payload};
        case FAVORITE_TEAMS_LIST_FAIL:
            return {loading: false, error: action.payload};
        default:
            return state;
    }
}

function favoriteTeamCreateReducer(state = {}, action) {
    switch (action.type) {
      case FAVORITE_TEAMS_CREATE_REQUEST:
        return { loading: true };
      case FAVORITE_TEAMS_CREATE_SUCCESS:
        return { loading: false, favoriteTeamsList: action.payload, success: true };
      case FAVORITE_TEAMS_DELETE_SUCCESS:
        return { loading: false, favoriteTeamsList: action.payload, success: true };
      case FAVORITE_TEAMS_CREATE_FAIL:
        return { loading: false, error: action.payload };
      default: return state;
    }
  }

export{listFavoriteTeamReducer,favoriteTeamCreateReducer};
