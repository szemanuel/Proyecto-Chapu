import React from 'react';
import './Login.css';
import { Signup } from '/pages/Signup';

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
          <a href="#" >Login</a>
          <a href="#">Sign Up</a>
          <a href="#" >Forget Password</a>
        </div>
      </main>
    </div>
  );
};

export { Login };
