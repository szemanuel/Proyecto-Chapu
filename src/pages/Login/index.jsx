import React from 'react';
import './Login.css';
import { Signup } from '../Signup/index';

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
          <a href="/Signup" >Login</a>
          <a href="/Signup">Sign Up</a>
          <a href="/Signup" >Forget Password</a>
        </div>
      </main>
    </div>
  );
};

export { Login };
