import React, { useEffect, useState } from 'react';
import './login-page.css';
import { useDispatch, useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom'
import { useLoginMutation, useRegisterMutation } from '../features/usersApiSlice';
import { setCredentials } from '../features/authSlice';
import { toast } from 'react-toastify';
const Loginpage =()=> {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [login] = useLoginMutation();
  const [register] = useRegisterMutation();
  const {userInfo} = useSelector((state)=>state.auth)
  const [state,setState] = useState({
    email : '',
    password : '',
    name : '',
    isSignUpMode: false,
  })
  // useEffect(()=>{
  //   if(userInfo){
  //     navigate('/')
  //   }
  // },[navigate,userInfo])
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState({ ...state,[name]: value });
  };

  const handleLogin = async(e) => {
    // You can add authentication logic here
    // For simplicity, we'll just pretend it's successful
    e.preventDefault();
    const email  = state.email
    const pwd = state.password
    try{
      const res = await login({email,pwd}).unwrap();
      dispatch(setCredentials({...res}))
      toast.success("Logged In successfully")
      navigate('/')
    }catch(e){
      toast.error(e?.data?.Error || e.error)
    }
  };


  const handleToggleMode = () => {
    setState((prevState) => ({
      isSignUpMode: !prevState.isSignUpMode,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (state.isSignUpMode) {
      const email  = state.email
      const pwd = state.password
      const name = state.name
      try{
        const res = await register({email,pwd,name}).unwrap();
        dispatch(setCredentials({...res}))
        toast.success("Registered Successfully")
        navigate('/')
      } catch(e){
        toast.error(e?.data?.error || e.error)
      }
    } else {
      handleLogin(event);
    }
  }
    return (
      <div className={`Loginpage ${state.isLoggedIn ? 'loggedIn' : ''}`}>
        <div className="login-container">
            <div className="login-form">
              <h2>{state.isSignUpMode ? 'Sign Up' : 'Sign In'}</h2>
              <form onSubmit={handleSubmit}>
                {!state.isSignUpMode && (
                  <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={state.email || ''}
                      onChange={handleInputChange}
                      required
                      className="input-field"
                    />
                  </div>
                )}
                {!state.isSignUpMode && (
                  <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={state.password}
                      onChange={handleInputChange}
                      required
                      className="input-field"
                    />
                  </div>
                )}
                {state.isSignUpMode && (
                  <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={state.email}
                      onChange={handleInputChange}
                      required
                      className="input-field"
                    />
                  </div>
                )}
                {state.isSignUpMode && (
                  <div className="form-group">
                    <label htmlFor="firstName">Name:</label>
                    <input
                      type="text"
                      id="Name"
                      name="name"
                      value={state.name}
                      onChange={handleInputChange}
                      required
                      className="input-field"
                    />
                  </div>
                )}
                
                {state.isSignUpMode && (
                  <div className="form-group">
                    <label htmlFor="newPassword">Password:</label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={state.password}
                      onChange={handleInputChange}
                      required
                      className="input-field"
                    />
                  </div>
                )}
                <button type="submit" className="login-button">
                  {state.isSignUpMode ? 'Sign Up' : 'Sign In'}
                </button>
                <div className="alt-login-options mt-6">
                  <hr className="alt-login-divider" />
                  <p>Or continue with:</p>
                  <a
                    href="https://accounts.google.com/login"
                    className="alt-login-button google"
                  >
                    Continue with Google
                  </a>
                  <a
                    href="https://www.facebook.com/login" // Replace with actual Facebook login URL
                    className="alt-login-button facebook"
                  >
                    Continue with Facebook
                  </a>
                  <a
                    href="https://www.apple.com/sign-in" // Replace with actual Apple login URL
                    className="alt-login-button apple"
                  >
                    Continue with Apple
                  </a>
                  <a
                    href="https://www.example.com/mobile-login" // Replace with actual mobile login URL
                    className="alt-login-button mobile"
                  >
                    Continue with Mobile Number
                  </a>
                </div>
                <button
                  type="button"
                  className="toggle-mode-button"
                  onClick={handleToggleMode}
                >
                  {state.isSignUpMode ? 'Sign In Instead' : 'Sign Up Instead'}
                </button>
              </form>
            </div>
        </div>
      </div>
    );
}

export default Loginpage;