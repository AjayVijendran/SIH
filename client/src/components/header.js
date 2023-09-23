import React from 'react';
import './header.css'
import { useNavigate } from 'react-router';
import { useLogoutMutation } from "../features/usersApiSlice"
import { useDispatch, useSelector} from "react-redux"
import { clearCredentials } from "../features/authSlice"
import { useState } from 'react';

function Header({ buttonText }) {
  const navigate = useNavigate();
  const redirectToProfile = () =>{
    navigate('/profile')
  }
  const navigateAbout = () => {
    navigate('/home/about')
  }
  const navigateHome = () => {
    navigate('/home')
  }
  const signout =async()=>{
    const res = await logout().unwrap()
    console.log(res)
    dispatch(clearCredentials())
    navigate('/auth')
  } 
  
  const [logout] = useLogoutMutation();
  const dispatch = useDispatch();
  
  return (
    <header className="navbar">
      {/* Navigation Menu */}
      <nav>
        <ul>
          <li><a onClick={navigateHome}>Home</a></li>
          <li><a onClick={navigateAbout} >About</a></li>
          <li><a href="https://pgportal.gov.in/Home/Faq" target='_blank'>Services</a></li>
        </ul>
      </nav>    
      {/* Sign In / Sign Up Button */}
      <button className="sign-in-up-button" onClick={redirectToProfile}>My Profile</button>
      <button className="logout-button" onClick={signout}>Logout</button>
    </header>
  );
}

export default Header;
