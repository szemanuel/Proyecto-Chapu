import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="page">
      <header className="menu">
        <h1> Vte </h1>
        <h1 className="welcome">Welcome to Vte!!</h1>
        <a href="#">Login</a>
       
      </header>
    </div>
  );
};

export { Header };
