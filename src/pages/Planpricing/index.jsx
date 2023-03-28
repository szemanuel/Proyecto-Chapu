import React from 'react';
import './plan_pricing.css';

const Plan_pricing = () => {
  return (
    <div className="loginPage">
      <header className="menu">
        <h1 className="logo"> Vte </h1>
        <h1 className="welcome">Welcome to Vte!!</h1>
        <h1></h1>      
      </header>  
        
      <main className="userLogin">
        <div className="loginInputs">
        <input className="inputType" placeholder="Monthly / Anual"/> 
        <input className="inputType" placeholder="Card Holder Name"/> 
        <input className="inputType" placeholder="Credit Card Number"/>
        <input className="inputType" placeholder="Expiration Date"/>
        <input className="inputType" placeholder="CVC code"/>
        </div>
        <div className="userOptions">
        <a href="#">Confirm</a>      
        </div>
      </main>
    </div>
  );
};

export { Plan_pricing };
