import Loginpage from "./components/login-page";
import Userprofile from './components/userprofile/Userprofile'
import LandingPage from "./components/LandingPage";
import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from "./components/home";
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import PrivateRoute from "./components/privateRoute";
import { MyChat } from "./components/chat";
function App() {
    return (
        <BrowserRouter>
            <ToastContainer position="top-center"/>
            <Routes>
                <Route path = "/" element = {<LandingPage />}></Route>
                <Route path="/auth" element={<Loginpage/>}></Route>
                <Route path="" element={<PrivateRoute/>}>
                    <Route path="/home" element={<><Home/><MyChat/></>}></Route>
                    <Route path="/profile" element={<Userprofile/>}></Route>
                </Route>
                
            </Routes>
        </BrowserRouter>
      
    );
  }
  
export default App;