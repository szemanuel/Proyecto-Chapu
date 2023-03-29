import React from 'react';
import './BodyChapu.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Welcome } from '../Welcome/index';
import { Signup } from '../Signup/index';
import { Login } from '../Login/index';
import { PlanPricing } from '../Planpricing/index';
import { PlanPricing } from '../Login/index';



const BodyChapu = () => {
  return (
    <div className="loginPage">
      <BrowserRouter>
        <Routes>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/planprincing">
            <PlanPricing />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          //agregar el resto de las páginas acá
          <Route>
            <NoMatch />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export { BodyChapu };
