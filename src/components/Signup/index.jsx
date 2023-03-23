import React from 'react';
import { Footer } from '../Footer';
import './Signup.css';

const Signup = () => {
  return (
    <div className="loginPage">
      <header className="menu">
        <h1 className="logo"> Vte </h1>
        <h1 className="welcome">Welcome to Vte!!</h1>
        <h1></h1>      
      </header>  
        
      <main className="userLogin">
        <div className="loginInputs">
        <input className="inputType" placeholder="Email"/> 
        <input className="inputType" placeholder="Full Name"/> 
        <input className="inputType" placeholder="Password"/>
        <input className="inputType" placeholder="Repeat Password"/>
        </div>
        <div className="userOptions">
        <a href="#">Confirm</a>      
        </div>
      </main>
    </div>
  );
};

export { Signup };
