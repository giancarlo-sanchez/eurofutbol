import React,{useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../actions/userSessionAction';
import { useHistory } from "react-router"

function LogOut (props){
console.log("this is the logout props",props)
const {token} = props;
let history = useHistory()
const dispatch = useDispatch();



const logOutHandler = () => {
    dispatch(logout(token));
    history.push("/")
  }

    useEffect(() => {
        if(!token){


        }
    }, [])

return<div className="logout-button-holder">
      <div onClick={logOutHandler}>LOGOUT</div>
    </div>

}

export default LogOut
