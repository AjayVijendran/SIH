import Loginpage from "./components/login-page";
import Userprofile from './components/userprofile/Userprofile'

import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from "./components/home";
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
function App() {
    return (
        <BrowserRouter>
            <ToastContainer position="top-center"/>
            <Routes>
                <Route path="/auth" element={<Loginpage/>}></Route>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/profile" element={<Userprofile/>}></Route>
            </Routes>
        </BrowserRouter>
      
    );
  }
  
export default App;