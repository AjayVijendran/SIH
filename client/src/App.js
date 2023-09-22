import Loginpage from "./components/login-page";
import Userprofile from './components/userprofile/Userprofile'
import LandingPage from "./components/LandingPage";
import React from 'react';
import Home from "./components/home";
import Homepage from './components/home-page/homepage'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import PrivateRoute from "./components/privateRoute";
import 'react-toastify/dist/ReactToastify.css'
import { MyChat } from "./components/chat";
import About from "./components/home-page/about";
import Contact from "./components/home-page/contact";
import Tc from "./components/home-page/tc";
function App() {
    return (
        <BrowserRouter>
            <ToastContainer position="top-center"/>
            <Routes>
                
                <Route path="/home/about" element={<About />}></Route>
                <Route path="/home/ContactUs" element={<Contact />}></Route>
                <Route path="/home/TC" element={<Tc />}></Route>
                <Route path = "/" element = {<LandingPage />}></Route>
                <Route path="/auth" element={<Loginpage/>}></Route>
                <Route path="" element={<PrivateRoute/>}>
                    <Route path = "/home" element = {<><Homepage /><MyChat /></>}></Route>                    
                    <Route path="/profile" element={<Userprofile/>}></Route>
                </Route>
                
            </Routes>
        </BrowserRouter>
      
    );
  }
  
export default App;