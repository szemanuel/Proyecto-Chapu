import React from 'react';
import './Login.css';
import { Signup } from '/pages/Signup';
import { BrowserRouter, Route, Routes, NavLink, Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="loginPage">
      <header className="menu">
        <h1 className="logo"> Vte </h1>
        <h1 className="welcome">Welcome to Vte!!</h1>
        <h1></h1>
      </header>

      <main className="userLogin">
        <div className="loginInputs">
          <input className="inputType" placeholder="Email" />
          <input className="inputType" placeholder="Password" />
        </div>
        <div className="userOptions">
          <BrowserRouter>
            <Link to="/signup">Login</Link>
            <Link to="/signup">Sign Up</Link>
            <Link to="/signup">Forget Password</Link>
            <Routes>
              <Route exact path="/signup" element={<Signup />}></Route>
            </Routes>
          </BrowserRouter>
        </div>
      </main>
    </div>
  );
};

export { Login };
