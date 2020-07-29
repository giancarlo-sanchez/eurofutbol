import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import listDetailsTeamsReducer from './reducers/teamReducer';
import listPlayersReducer from './reducers/listPlayerReducer';
import thunk from 'redux-thunk';
import listLeaguesReducer from './reducers/leagueReducer';
import listLeagueTeamsReducer from './reducers/listLeagueTeamsReducer';
import playerReducer from './reducers/playerReducer';
import fixtureDetailsReducer from './reducers/fixturesReducer';
import listFavoritePlayerReducer from './reducers/favoritePlayerReducer';
import { userSigninReducer } from './reducers/userSessionReducer';
import Cookie from 'js-cookie';
import {listFavoriteTeamReducer,favoriteTeamCreateReducer} from './reducers/favoriteTeamReducer';
import livescoreDetailsReducer from './reducers/livescoreReducer';


const userInfo = Cookie.getJSON("userInfo") || null;

const initialState = {userSignin:{userInfo}};
const reducer = combineReducers({
    listDetailsTeam: listDetailsTeamsReducer,
    listPlayers: listPlayersReducer,
    listLeagues: listLeaguesReducer,
    listTeamsLeague : listLeagueTeamsReducer,
    listFavoritePlayer: listFavoritePlayerReducer,
    listDetailsPlayer: playerReducer,
    fixtures: fixtureDetailsReducer,
    userSignin: userSigninReducer,
    userRegister: userSigninReducer,
    listFavoriteTeam: listFavoriteTeamReducer,
    livescore:livescoreDetailsReducer,
    favoriteTeamCreate:favoriteTeamCreateReducer,


})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)))

export default store;
