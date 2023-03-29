import React from 'react';
import './BodyChapu.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Signup } from '../Signup/index';
import { Login } from './pages/Login/index';

const BodyChapu = () => {
  return (
    <div className="loginPage">
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
        <Route >
          //agregar el resto de las páginas acá
        <NoMatch />
        </Route>
        </div>

  );
};

export { Login };
