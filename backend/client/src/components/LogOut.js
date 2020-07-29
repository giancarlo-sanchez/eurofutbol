import React,{useEffect,useSelector} from 'react';
import { connect,useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { logout } from '../actions/userSessionAction';
import { useHistory } from "react-router"

function LogOut (props){
console.log("this is the logout props",props)
const {token} = props;
let history = useHistory()
const dispatch = useDispatch();
// const redirect = props.location.search ? props.location.search.split("=")[1] : '/';


const logOutHandler = () => {
    // create an order
    dispatch(logout(token));
    history.push("/")
    // return <Redirect to='/'/>
    // dispatch();
  }

    useEffect(() => {
        if(!token){


        }
    }, [])

return<div className="logout-button-holder">
      <div onClick={logOutHandler}>Logout</div>
    </div>

}

export default LogOut
