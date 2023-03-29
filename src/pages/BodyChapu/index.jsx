import React from 'react';
import './BodyChapu.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Signup } from '../Signup/index';
import { Login } from './Login/index';

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
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/me">
            <Me />
          </Route>
          <Route path="/home">
            <Home />
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

export { Login };
