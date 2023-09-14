import Loginpage from "./components/login-page";
import Userprofile from './components/userprofile/Userprofile'

import React from 'react';
function App() {
  return (
    <div className="app-container">
      <Loginpage />
      <Userprofile />
    </div>
  );
}

export default App;