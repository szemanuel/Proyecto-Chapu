import React from 'react';
import './Body.css';

const Body = () => {
  return (
    <div className="page">
      <main className="menu">
        <ul className="offerMenu">
          <li> Online Access </li>
          <li> Client Administration </li>
          <li> Stock Managements </li>
          <li> Sales Management </li>
          <li> Medical Records </li>
          <li> Easy Administration </li>
        </ul>
        <div className="accessMenu">  
        <a href="#">Try</a>      
        <a href="#">Pricing</a>      
        <a href="#">Contact us</a>      
        </div>
      </main>
    </div>
  );
};

export { Body };
