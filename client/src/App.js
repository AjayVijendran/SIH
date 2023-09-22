import Loginpage from "./components/login-page";
import Userprofile from './components/userprofile/Userprofile'
import LandingPage from "./components/LandingPage";
import React from 'react';
import Homepage from './components/home-page/homepage'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import PrivateRoute from "./components/privateRoute";
import 'react-toastify/dist/ReactToastify.css'
function App() {
    return (
        <BrowserRouter>
            <ToastContainer position="top-center"/>
            <Routes>
            
                <Route path = "/landing" element = {<LandingPage />}></Route>
                <Route path="/auth" element={<Loginpage/>}></Route>
                <Route path="" element={<PrivateRoute/>}>
                <Route path = "/home" element = {<Homepage />}></Route>
                    <Route path="/profile" element={<Userprofile/>}></Route>
                </Route>
                
            </Routes>
        </BrowserRouter>
      
    );
  }
  
export default App;