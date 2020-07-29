import axios from 'axios';
import Cookie from 'js-cookie'
import { baseUrl } from '../config';
import { Redirect } from 'react-router-dom';

export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAIL = 'USER_LOGIN_FAIL';


export const USER_REGISTER_REQUEST = 'USER_REGISTER_REQUEST';
export const USER_REGISTER_SUCCESS = 'USER_REGISTER_SUCCESS';
export const USER_REGISTER_FAIL = 'USER_REGISTER_FAIL';
export const REMOVE_TOKEN = 'REMOVE_TOKEN'

export const removeToken = token => ({ type: REMOVE_TOKEN });

const signin = (email,password) => async(dispatch) =>{
    dispatch({type: USER_LOGIN_REQUEST, payload:{email,password}});
    try{
        const {data} = await axios.post(`${baseUrl}/session`, {email, password});
        dispatch({type: USER_LOGIN_SUCCESS,payload: data});
        Cookie.set("userInfo", JSON.stringify(data))
    }catch(error){
        dispatch({type: USER_LOGIN_FAIL,payload: error.message });
    }
}


const logout = (token,props) => async (dispatch) => {
    // const { userSignin: { userInfo:{token} } } = getState();
    const response = await fetch(`${baseUrl}/session`, {
      method: 'delete',
      headers: { Authorization: `Bearer ${token}` },
    });

    console.log("this is the response:",response)

    if (response.ok) {
      Cookie.remove("userInfo");
      dispatch(removeToken());
    //   return <Redirect to='/' />
    //   props.history.push('/');
    }
  }


const register = (name, email ,password) => async(dispatch) =>{
    dispatch({type: USER_REGISTER_REQUEST, payload:{name, email ,password}});
    try{
        const {data} = await axios.post(`${baseUrl}/users`, {name, email ,password});
        dispatch({type: USER_REGISTER_SUCCESS,payload: data});
        Cookie.set("userInfo", JSON.stringify(data))
    }catch(error){
        dispatch({type: USER_REGISTER_FAIL,payload: error.message });
    }


}

export {signin, register, logout}
