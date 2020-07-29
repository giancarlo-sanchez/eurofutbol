import { REMOVE_TOKEN,USER_LOGIN_REQUEST,USER_LOGIN_SUCCESS, USER_LOGIN_FAIL, USER_REGISTER_FAIL, USER_REGISTER_SUCCESS, USER_REGISTER_REQUEST} from '../actions/userSessionAction';


function userSigninReducer(state ={}, action){
    switch(action.type){
        case USER_LOGIN_REQUEST:
            return {loading: true};
        case USER_LOGIN_SUCCESS:
            return {loading: false, userInfo: action.payload};
        case USER_LOGIN_FAIL:
            return {loading:false, error: action.payload};
        case USER_REGISTER_REQUEST:
            return {loading: true};
        case USER_REGISTER_SUCCESS:
            return {loading: false, userInfo: action.payload};
        case USER_REGISTER_FAIL:
                return {loading:false, error: action.payload};
        case REMOVE_TOKEN: {
            return {};
            }
        default:
            return state;
    }
}


export {userSigninReducer };
