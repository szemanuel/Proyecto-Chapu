import React from 'react';
import './Body.css';

const Body = () => {
  return (
    <div className="pageBody">
      <main className="menuHeader">
        <ul className="offerMenu">
          <li> Online Access </li>
          <li> Client Administration </li>
          <li> Stock Managements </li>
          <li> Sales Management </li>
          <li> Medical Records </li>
          <li> Easy Administration </li>
        </ul>
        <div className="accessMenu">  
        <a href="#">TRY</a>      
        <a href="#">PRICING</a>      
        <a href="#">CONTACT US</a>      
        </div>
      </main>
    </div>
  );
};

export { Body };
