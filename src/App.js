import React, { useState } from "react";
import HomePage from "./Components/HomePage";

import LoginPage from './Components/LoginPage'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="container">
      {isLoggedIn ? (
        <HomePage />
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;

