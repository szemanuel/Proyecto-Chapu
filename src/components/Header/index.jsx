import React from 'react';
import './Header.css';
import {NavLink} from "react-router-dom"

const Header = () => {
  return (
    <div className="page">
      <header className="menu">
        <h1 className="logo"> Vte </h1>
        <h1 className="welcome">Welcome to Vte!!</h1>
        <NavLink to="/Login">Login</NavLink>      
      </header>
    </div>
  );
};

export { Header };
