import React from 'react'
import './Header.css'
import { FaSearch } from "react-icons/fa";
import SignUp from '../SignUp/SignUp';
import Login from '../Login/Login';
import {useSelector } from 'react-redux';
import UserProfile from '../UserProfile/UserProfile';
import Logout from '../Logout/Logout';


const Header = () => {
  const user = useSelector(state => state.user?.user)
  return (
    <div style={{display:"flex"}}>
    <div className='inputSection'>
        <FaSearch />
        <input type='text' placeholder='Search Codepen'/> 
    </div>
    {user?
    <>
    <UserProfile />
    <Logout/>
    </> : <>
      <SignUp />
    <Login />
    </>}
   
    </div>
  )
}

export default Header