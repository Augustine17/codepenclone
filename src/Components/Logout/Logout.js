import React from 'react'
import './Logout.css'
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import {useDispatch} from 'react-redux'
import { SET_USER_NULL } from '../../redux/actions/userActions';
import { SET_PROJECTS_NULL } from '../../redux/actions/projectActions';

const Logout = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const logout = () =>{
        const auth = getAuth();
        signOut(auth).then(() => {
          dispatch(SET_USER_NULL())
          dispatch(SET_PROJECTS_NULL())
          navigate("/");
        }).catch((error) => {
          console.log(error);
        });
    }
  return (
    <div className='logout' onClick={logout}>Logout</div>
  )
}

export default Logout