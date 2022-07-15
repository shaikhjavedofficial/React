import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Landing } from "./Components/Landing";
import { Login } from "./Components/Login";
import { Employee } from "./Components/Employee";
import { SignUp } from "./Components/SignUp";
import { NavigationBar } from "./Components/NavigationBar";
function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState("");
  const handleLogin = (a, user) => {
    setIsLogin(a);
    setUser(user);
  };
  const handleLogout = (a) => {
    setIsLogin(a);
    setUser("");
  };
  useEffect(() => {}, [handleLogout]);
  return (
    // <Router>
    <div>
      <NavigationBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/Login" element={<Login handleLogin={handleLogin} />} />
        <Route
          path="/employee"
          element={isLogin ? <Employee /> : <Navigate to="/Login" />}
        />
        {/* <Route exact path="/Login" element={!isLogin ? <Login handleLogin={handleLogin}/> : <Navigate to="/employee" />} /> */}
        <Route
          path="/signup"
          element={
            !isLogin ? (
              <SignUp handleLogin={handleLogin} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
      </Routes>
    </div>
    // </Router>
  );
}

export default App;
